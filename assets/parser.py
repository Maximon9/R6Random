# region Main
from enum import Enum
from genericpath import exists
import json
from ntpath import join
from os.path import dirname, relpath as __relpath
from pathlib import Path
from typing import Callable, LiteralString, Optional, TypedDict, Union, TypeVar, Generic
from math import ceil


class Import(TypedDict):
    import_: str | Callable[[], str]
    active: bool


class Imports(TypedDict):
    Groups: Import
    OPs: Import
    Equipment: Import
    Weapons: Import
    Attachments: Import
    Img: Import


T = TypeVar("T")


class StrDict(Generic[T], dict[str, T]):
    pass


class Imports(TypedDict):
    Groups: Import
    GroupInfo: Import
    OPInfo: Import
    EquipmentInfo: Import
    WeaponInfo: Import
    AttachmentInfo: Import


class AttachmentImports(TypedDict):
    BarrelAttachmentInfo: bool
    GripAttachmentInfo: bool
    SightAttachmentInfo: bool
    UnderBarrelAttachmentInfo: bool


class ToolType(Enum):
    EQUIPMENT = 0
    WEAPON = 1
    ATTACHMENT = 2


class SimilarityMode(Enum):
    NONE = 0
    ONE_WORD_SIMILAR = 1
    MOST_WORDS_SIMILAR = 2
    ALL_WORDS_SIMILAR = 3


T = TypeVar("T")


def merge(d: dict, *dict_list: dict):
    for d1 in dict_list:
        for k in d1:
            if k in d and isinstance(d[k], dict) and isinstance(d1[k], dict):
                merge(d[k], d1[k])
            else:
                d[k] = d1[k]


def relpath(
    path: Union[LiteralString, bytes, str],
    start: Union[LiteralString, bytes, str, None] = None,
) -> Union[LiteralString, bytes, str]:
    if isinstance(path, str) and isinstance(start, str):
        return __relpath(path, start).replace("\\", "/")
    return __relpath(path, start)


def replace_between(string: str, replace: str, start: int, end: int) -> str:
    return string[0:start] + replace + string[end : len(string)]


class Config(TypedDict):
    siegeNames: list[str]
    siegePaths: list[str]
    ignore: list[str]
    groupNames: list[str]
    equipmentNames: list[str]
    weaponNames: list[str]
    attachmentNames: list[str]
    imageExtensions: list[str]
    jsonParsingEnabled: bool
    searchForFolderNames: bool


class __Parser:

    def __init__(this) -> None:
        this.imports: Imports = {
            "Groups": {
                "import_": 'import type {Groups} from "./types/groups.js";',
                "active": False,
            },
            "GroupInfo": {
                "import_": 'import {GroupInfo} from "./utils/group.js";',
                "active": False,
            },
            "OPInfo": {
                "import_": 'import {OPInfo} from "./utils/op.js";',
                "active": False,
            },
            "EquipmentInfo": {
                "import_": 'import {EquipmentInfo} from "./utils/equipment.js";',
                "active": False,
            },
            "WeaponInfo": {
                "import_": 'import {WeaponInfo} from "./utils/weaponInfo/weapon.js";',
                "active": False,
            },
            "AttachmentInfo": {"import_": this.__fetch_attachments, "active": False},
        }

        this.configs: Config = {
            "siegeNames": ["Siege-Rando-Images"],
            "siegePaths": [],
            "ignore": [".git", ".vscode"],
            "groupNames": ["Attackers", "Defenders"],
            "equipmentNames": ["Equipment"],
            "weaponNames": ["PrimaryWeapons", "SecondaryWeapons"],
            "attachmentNames": [
                "SightAttachments",
                "BarrelAttachments",
                "UnderBarrelAttachments",
                "GripAttachments",
            ],
            "imageExtensions": [
                ".png",
                ".jpg",
                ".webp",
                ".svg",
                ".gif",
                ".tiff",
                ".tif",
            ],
            "jsonParsingEnabled": True,
            "searchForFolderNames": True,
        }

        this.__spaces: list[str] = [" ", "_", "-"]

        this.parsed_json_path: str = "./Siege-Rando-Images/parsed.json"
        this.parsed_json_base_path: str = "./Siege-Rando-Images"
        this.base_path: str = ".."
        this.ops_ts_path: str = "../src/ops.ts"
        this.rel_path_from: str = ".."
        this.export_groups_regardless = True

        this.attachment_imports: AttachmentImports = {
            "BarrelAttachmentInfo": False,
            "GripAttachmentInfo": False,
            "SightAttachmentInfo": False,
            "UnderBarrelAttachmentInfo": False,
        }

    # @property
    # def __check_names(this) -> list[str]:
    #     return [*this.configs["groupNames"], *this.configs["equipmentNames"], *this.configs["weaponNames"], *this.configs["attachmentNames"]]

    @property
    def __has_many_attachments(this) -> bool:
        count = 0
        for key in this.attachment_imports:
            value = this.attachment_imports[key]
            if value == True:
                count += 1
                if count > 1:
                    return True
        return False

    @property
    def __fetch_imports(this) -> str:
        import_strings: list[str] = []
        for key in this.imports:
            value = this.imports[key]
            if value["active"]:
                if callable(value["import_"]):
                    import_strings.append(value["import_"]())
                else:
                    import_strings.append(value["import_"])
        return "\n".join(import_strings)

    def __fetch_attachments(this):
        import_string = "import {"
        has_many = this.__has_many_attachments
        for key in this.attachment_imports:
            value = this.attachment_imports[key]
            if value == True:
                if has_many:
                    import_string += f"\n\t{key},"
                else:
                    import_string += f"{key}"
        if has_many:
            import_string += '\n} from "./utils/weaponInfo/attachment.js";'
        else:
            import_string += '} from "./utils/weaponInfo/attachment.js";'

        return import_string

    def parse(this):
        parsed_data = {}
        if exists(this.parsed_json_path):
            with open(this.parsed_json_path, "r") as json_file:
                parsed_data = json.load(json_file)
                json_file.close()
        if not exists(this.ops_ts_path):
            Path(dirname(this.ops_ts_path)).mkdir(parents=True, exist_ok=True)
        with open(this.ops_ts_path, "w") as ts_file:
            parse_string: str = ""
            parse_string = this.__parse_group(
                parsed_data, this.__try_fetch_references(parsed_data), parse_string
            )
            ts_file.write(
                f"//#region Main\n\n{this.__fetch_imports}{parse_string}\n\n//#endregion\n"
            )
            ts_file.close()

    def __parse_group(
        this,
        data: StrDict[Union[str, list[str], StrDict]],
        references: StrDict[str],
        parse_string: str,
    ) -> str:
        if this.export_groups_regardless:
            if not this.imports["Groups"]["active"]:
                this.imports["Groups"]["active"] = True
                parse_string += "\n\nexport const GROUPS: Groups = {"
        groups: list[tuple[str, StrDict]] = []
        if len(data) > 0:
            if not this.export_groups_regardless:
                if not this.imports["Groups"]["active"]:
                    this.imports["Groups"]["active"] = True
                    parse_string += "\n\nexport const GROUPS: Groups = {"
            for key in data:
                value = data[key]
                if not "reference" in key.lower() and isinstance(value, dict):
                    groups.append((key, value))
            groups = list(filter(lambda group: len(group[1]) > 0, groups))
            if len(groups) > 0:
                for key, value in groups:
                    parse_string = this.__parse_group_info(
                        key, value, references, parse_string
                    )
            if this.imports["Groups"]["active"]:
                parse_string += "\n};"
        elif this.export_groups_regardless:
            parse_string += "};"
        return parse_string

    def __parse_group_info(
        this,
        name: str,
        data: StrDict[Union[str, list[str], StrDict]],
        references: StrDict[str],
        parse_string: str,
    ) -> str:
        ops: list[tuple[str, StrDict]] = []
        icons: list[str] = []
        if len(data) > 0:
            end_it = False
            for key in data:
                value = data[key]
                if isinstance(value, str):
                    value = this.__try_fetch_ref_info(value, references)[0]
                    icons.append(value)
                elif isinstance(value, list):
                    for v in value:
                        path = this.__try_fetch_ref_info(v, references)[0]
                        icons.append(path)
                elif isinstance(value, dict):
                    ops.append((key, value))
                else:
                    end_it = True
                    break
            if not end_it:
                has_group = False
                if len(icons) > 0:
                    if not this.imports["GroupInfo"]["active"]:
                        this.imports["GroupInfo"]["active"] = True
                    if not has_group:
                        parse_string += f"\n\t{name}: new GroupInfo(" + "{"
                        has_group = True
                    parse_string = this.__add_images(
                        "icons", icons, parse_string, "\t\t"
                    )
                ops = list(filter(lambda op: len(op[1]) > 0, ops))
                if len(ops) > 0:
                    if not this.imports["GroupInfo"]["active"]:
                        this.imports["GroupInfo"]["active"] = True
                    if not has_group:
                        parse_string += f"\n\t{name}: new GroupInfo(" + "{"
                        has_group = True
                    parse_string += "\n\t\tops: ["
                    for key, value in ops:
                        parse_string = this.__parse_op_info(
                            key, value, references, parse_string
                        )
                    parse_string += "\n\t\t],"
                if has_group:
                    parse_string += "\n\t}),"
        return parse_string

    def __parse_op_info(
        this,
        name: str,
        data: StrDict[Union[str, list[str], StrDict]],
        references: StrDict[str],
        parse_string: str,
    ) -> str:
        icons: list[str] = []
        images: list[str] = []
        tools: list[tuple[str, StrDict, ToolType]] = []
        end_it = False
        for key in data:
            value = data[key]
            if isinstance(value, str):
                value = this.__try_fetch_ref_info(value, references)[0]
                if "icon" in key.lower():
                    icons.append(value)
                else:
                    images.append(value)
            elif isinstance(value, list):
                for v in value:
                    path = this.__try_fetch_ref_info(v, references)[0]
                    if "icon" in key.lower():
                        icons.append(path)
                    else:
                        images.append(path)
            elif isinstance(value, dict):
                type = None
                if this.__string_contains(key, this.configs["equipmentNames"]):
                    key = this.__fetch_matching_name(
                        key, this.configs["equipmentNames"]
                    )
                    type = ToolType.EQUIPMENT
                elif this.__string_contains(key, this.configs["weaponNames"]):
                    key = this.__fetch_matching_name(key, this.configs["weaponNames"])
                    type = ToolType.WEAPON
                if type != None:
                    tools.append((key, value, type))
            else:
                end_it = True
                break
        if not end_it:
            has_op = False
            if len(icons) > 0:
                if not this.imports["OPInfo"]["active"]:
                    this.imports["OPInfo"]["active"] = True
                if not has_op:
                    parse_string += (
                        "\n\t\t\tnew OPInfo({\n\t\t\t\tname: " + f'"{name}",'
                    )
                    has_op = True
                parse_string = this.__add_images(
                    "icons", icons, parse_string, "\t\t\t\t"
                )
            if len(images) > 0:
                if not this.imports["OPInfo"]["active"]:
                    this.imports["OPInfo"]["active"] = True
                if not has_op:
                    parse_string += (
                        "\n\t\t\tnew OPInfo({\n\t\t\t\tname: " + f'"{name}",'
                    )
                    has_op = True
                parse_string = this.__add_images(
                    "images", images, parse_string, "\t\t\t\t"
                )
            tools = list(filter(lambda tool: len(tool[1]) > 0, tools))
            if len(tools) > 0:
                if not this.imports["OPInfo"]["active"]:
                    this.imports["OPInfo"]["active"] = True
                if not has_op:
                    parse_string += (
                        "\n\t\t\tnew OPInfo({\n\t\t\t\tname: " + f'"{name}",'
                    )
                    has_op = True
                for key, value, type in tools:
                    parse_string += f"\n\t\t\t\t{key[0:1].lower() + key[1:len(key)]}: ["
                    parse_string = this.__parse_tool(
                        key, value, references, type, parse_string
                    )
                    parse_string += "\n\t\t\t\t],"
            if has_op:
                parse_string += "\n\t\t\t}),"
        return parse_string

    def __parse_tool(
        this,
        name: str,
        data: StrDict[Union[str, list[str], StrDict]],
        references: StrDict[str],
        type: ToolType,
        parse_string: str,
    ) -> str:
        tools: StrDict[list[str]] = {}
        tool_infos: list[tuple[str, str, StrDict, ToolType, str]] = []
        for key in data:
            value = data[key]
            if isinstance(value, str):
                value = this.__try_fetch_ref_info(value, references)[0]
                if not key in tools:
                    tools[key] = []
                tools[key].append(value)
            if isinstance(value, list):
                for v in value:
                    path = this.__try_fetch_ref_info(v, references)[0]
                    if not key in tools:
                        tools[key] = []
                    tools[key].append(path)
            elif isinstance(value, dict):
                if not key in tools:
                    tools[key] = []
                this.__parse_tool_info(
                    tools[key],
                    tool_infos,
                    name,
                    key,
                    value,
                    references,
                    type,
                )
        started_attachment = False
        for key in tools:
            tool = tools[key]
            if len(tool) > 0:
                match type:
                    case ToolType.EQUIPMENT:
                        if not this.imports["EquipmentInfo"]["active"]:
                            this.imports["EquipmentInfo"]["active"] = True
                        parse_string += (
                            "\n\t\t\t\t\tnew EquipmentInfo({"
                            + f'\n\t\t\t\t\t\tname: "{key}",'
                        )
                        parse_string = this.__add_images(
                            "images", tool, parse_string, "\t\t\t\t\t\t"
                        )
                        parse_string += "\n\t\t\t\t\t}),"
                    case ToolType.WEAPON:
                        if not this.imports["WeaponInfo"]["active"]:
                            this.imports["WeaponInfo"]["active"] = True
                        parse_string += (
                            "\n\t\t\t\t\tnew WeaponInfo({"
                            + f'\n\t\t\t\t\t\tname: "{key}",'
                        )
                        parse_string = this.__add_images(
                            "images", tool, parse_string, "\t\t\t\t\t\t"
                        )
                        if len(tool_infos) > 0:
                            parse_string += "\n\t\t\t\t\t\tattachments: {"
                            new_name = this.__capitalize_all_words(key).replace(
                                "_", " "
                            )
                            for tool_name, key, value, new_type in tool_infos:
                                if new_name == tool_name:
                                    parse_string = this.__parse_tool(
                                        key, value, references, new_type, parse_string
                                    )
                            parse_string += "\n\t\t\t\t\t\t}"
                        parse_string += "\n\t\t\t\t\t}),"
                    case ToolType.ATTACHMENT:
                        if not this.imports["AttachmentInfo"]["active"]:
                            this.imports["AttachmentInfo"]["active"] = True
                        new_name = this.__fetch_match(
                            name,
                            list(this.attachment_imports.keys()),
                            SimilarityMode.MOST_WORDS_SIMILAR,
                        )
                        if not started_attachment:
                            new_key = this.__fetch_match(
                                name,
                                ["sights", "barrels", "grips", "underBarrels"],
                                SimilarityMode.MOST_WORDS_SIMILAR,
                            )
                            parse_string += f"\n\t\t\t\t\t\t\t{new_key}: ["
                            started_attachment = True
                        if not this.attachment_imports[new_name]:
                            this.attachment_imports[new_name] = True
                        parse_string += (
                            f"\n\t\t\t\t\t\t\t\tnew {new_name}("
                            + "{"
                            + f'\n\t\t\t\t\t\t\t\t\tname: "{key}",'
                        )
                        parse_string = this.__add_images(
                            "images", tool, parse_string, "\t\t\t\t\t\t\t\t\t"
                        )
                        parse_string += "\n\t\t\t\t\t\t\t\t}),"
        if started_attachment:
            parse_string += f"\n\t\t\t\t\t\t\t],"
        return parse_string

    def __parse_tool_info(
        this,
        tool: list[str],
        tool_infos: list[tuple[str, str, StrDict, ToolType, str]],
        tool_name: str,
        tool_info_name: str,
        data: StrDict[Union[str, list[str], StrDict]],
        references: StrDict[str],
        type: ToolType,
    ):
        for key in data:
            value = data[key]
            if isinstance(value, str):
                value = this.__try_fetch_ref_info(value, references)[0]
                tool.append(value)
            elif isinstance(value, list):
                for v in value:
                    path = this.__try_fetch_ref_info(v, references)[0]
                    tool.append(path)
            elif isinstance(value, dict):
                if type == ToolType.WEAPON and this.__string_contains(
                    key, this.configs["attachmentNames"]
                ):
                    new_name = this.__capitalize_all_words(tool_info_name).replace(
                        "_", " "
                    )
                    new_key = this.__fetch_matching_name(
                        key, this.configs["attachmentNames"], keep_spaces=True
                    )
                    tool_infos.append((new_name, new_key, value, ToolType.ATTACHMENT))
                else:
                    this.__parse_tool_info(
                        tool,
                        tool_infos,
                        tool_name,
                        tool_info_name,
                        value,
                        references,
                        type,
                    )

    def __add_images(
        this, id: str, images: list[str], parse_string: str, tabs: str
    ) -> str:
        if len(images) > 0:
            parse_string += f"\n{tabs}{id}: ["
            for icon in images:
                parse_string += f'\n{tabs}\t"{relpath(join(this.parsed_json_base_path, icon), this.base_path)}",'
            parse_string += f"\n{tabs}],"
        return parse_string

    def __fetch_matching_name(
        this,
        name: str,
        names: list[str],
        return_none: bool = False,
        keep_spaces: bool = False,
    ) -> Optional[str]:
        new_string: Optional[str] = None
        for check in names:
            if this.__all_words_are_similar(name, check):
                new_string = this.__capitalize_all_words(check)
        if new_string != None:
            if not keep_spaces:
                for space in this.__spaces:
                    new_string = new_string.replace(space, "")
        else:
            if not return_none:
                new_string = name
                if not keep_spaces:
                    for space in this.__spaces:
                        new_string = new_string.replace(space, "")
        return new_string

    def __fetch_match(
        this,
        string: str,
        substrings: list[str],
        mode: SimilarityMode = SimilarityMode.NONE,
    ) -> str:
        sims: list[tuple[str, int]] = []
        for check in substrings:
            match mode:
                case SimilarityMode.NONE:
                    if this.__is_similar(string, check):
                        return check
                case SimilarityMode.ALL_WORDS_SIMILAR:
                    if this.__all_words_are_similar(string, check):
                        return check
                case SimilarityMode.MOST_WORDS_SIMILAR:
                    sim = this.__most_words_are_similar(string, check)
                    if sim != None:
                        sims.append((check, sim))
                case _:
                    if this.__one_word_is_similar(string, check):
                        return check
        if len(sims) > 0:
            most_sim = None
            for check, sim in sims:
                if most_sim == None:
                    most_sim = sim
                elif sim > most_sim:
                    most_sim = sim
            for check, sim in sims:
                if sim == most_sim:
                    return check
        return string

    def __string_contains(this, string: str, substrings: list[str]) -> bool:
        for check in substrings:
            if this.__all_words_are_similar(string, check):
                return True
        return False

    def __is_similar(this, string1: str, string2: str) -> bool:
        real_string_1 = string1.lower().replace(" ", "").replace("_", "")
        real_string_2 = string2.lower().replace(" ", "").replace("_", "")
        if real_string_1 == "" and real_string_2 != "":
            return False
        elif real_string_1 != "" and real_string_2 == "":
            return False
        elif real_string_1 in real_string_2 or real_string_2 in real_string_1:
            return True
        return False

    def __all_words_are_capitalized(this, string: str):
        all_words = this.__get_all_words(string)
        for word in all_words:
            if word[0] != word[0].upper():
                return False
        return True

    def __capitalize_all_words(this, string: str) -> str:
        if not this.__all_words_are_capitalized(string):
            words = this.__get_all_words(string, True)
            for i in range(len(words)):
                word: str = words[i]
                if not word in this.__spaces:
                    word = word[0:1].upper() + word[1 : len(word)]
                    words[i] = word
            string = "".join(words)
        return string

    def __get_all_words(this, string: str, with_spaces: bool = False) -> list[str]:
        split_list: list[str] = [string]
        for space in this.__spaces:
            for i in range(len(split_list) - 1, -1, -1):
                split = split_list[i]
                new_split_list = split.split(space)
                if with_spaces:
                    for ni in range(len(new_split_list) - 1, -1, -1):
                        if ni > 0:
                            new_split_list.insert(ni, space)
                del split_list[i]
                split_list[i:i] = new_split_list
        for i in range(len(split_list) - 1, -1, -1):
            new_split_list: list[str] = this.__get_words_from_cap(split_list[i])
            if len(new_split_list) > 0:
                del split_list[i]
                split_list[i:i] = new_split_list
        return split_list

    def __get_words_from_cap(this, string: str):
        split_list: list[str] = []
        pre_char: str = ""
        for i in range(len(string)):
            char = string[i]

            if i == 0 or (
                pre_char.isalpha()
                and char.isalpha()
                and pre_char == pre_char.lower()
                and char == char.upper()
            ):
                si = i
                spc: str = ""
                while si < len(string):
                    sc = string[si]
                    if (
                        spc.isalpha()
                        and char.isalpha()
                        and spc == spc.lower()
                        and sc == sc.upper()
                    ):
                        break
                    elif sc in this.__spaces:
                        break
                    spc = sc
                    si += 1
                if i < si:
                    split_list.append(string[i:si])
                else:
                    split_list.append(string[i : i + 1])
            pre_char = char
        return split_list

    def __all_words_are_similar(this, string_1: str, string_2: str):
        words_1 = this.__get_all_words(string_1)
        words_2 = this.__get_all_words(string_2)
        length = len(words_1)
        if length != len(words_2):
            return False
        for i in range(length):
            if not this.__is_similar(words_1[i], words_2[i]):
                return False
        return True

    def __most_words_are_similar(this, string_1: str, string_2: str) -> Optional[int]:
        words_1 = this.__get_all_words(string_1)
        words_2 = this.__get_all_words(string_2)
        length = min(len(words_1), len(words_2))
        word_count = ceil((length + length) / 2)
        count = 0
        for i in range(length):
            if this.__is_similar(words_1[i], words_2[i]):
                count += 2
        if count >= word_count:
            return count - word_count
        else:
            return None

    def __one_word_is_similar(this, string_1: str, string_2: str):
        words_1 = this.__get_all_words(string_1)
        words_2 = this.__get_all_words(string_2)
        length = min(len(words_1), len(words_2))
        for i in range(length):
            if this.__is_similar(words_1[i], words_2[i]):
                return True
        return False

    def __try_fetch_ref_info(
        this, value: str, references: Optional[StrDict[str]] = None
    ) -> tuple[str, Optional[str]]:
        if references != None and value in references:
            return (references[value], value)
        else:
            return (value, None)

    def __try_fetch_references(
        this,
        data: StrDict[Union[str, list[str], StrDict]],
        remove_from_ref: bool = False,
    ) -> StrDict[str]:
        all_refs: list[StrDict[str]] = []
        refs_to_remove: list[str] = []
        for key in data:
            value = data[key]
            if isinstance(value, dict) and "reference" in key.lower():
                is_ref = True
                for ref_key in value:
                    ref_value = value[ref_key]
                    if not isinstance(ref_value, str):
                        is_ref = False
                        break
                if is_ref:
                    if remove_from_ref and not key in refs_to_remove:
                        refs_to_remove.append(key)
                    all_refs.append(data[key])
        if remove_from_ref:
            for key in refs_to_remove:
                del data[key]
        references: StrDict[str] = {}
        if len(all_refs) > 1:
            merge(references, *all_refs)
        if len(all_refs) == 1:
            references: StrDict[str] = all_refs[0]
        return references


Parser = __Parser()

Parser.parse()
# endregion
