#region Main
from genericpath import exists
import json
from ntpath import join
from os import listdir
from os.path import dirname, basename, relpath as rel_path
from pathlib import Path
from typing import Any, Callable, LiteralString, Optional, TypedDict, Union
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

class SubstringInfo(TypedDict):
    start: Optional[int]
    end: Optional[int]
class ImageInfo(TypedDict):
    found: bool
    info: SubstringInfo
class Imports(TypedDict):
    Groups: Import
    Group: Import
    OPs: Import
    Equipment: Import
    Weapons: Import
    Attachments: Import
    Img: Import
class AttachmentImports(TypedDict):
    BarrelAttachment: bool
    GripAttachment: bool
    SightAttachment: bool
    UnderBarrelAttachment: bool

def relpath(path: Union[LiteralString, bytes, str], start: Union[LiteralString, bytes, str, None] = None) -> Union[LiteralString, bytes, str]:
    if isinstance(path, str) and isinstance(start, str):
        return rel_path(path=path, start=start).replace("\\", "/")
    return rel_path(path=path, start=start)

def replace_between(string: str, replace: str, start: int, end: int) -> str:
    return string[0:start] + replace + string[end:len(string)]

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

class __Parser():

    def __init__(this) -> None:
        this.imports: Imports = {
            "Groups": {
                "import_": "import type {Groups} from \"./types/groups.js\";",
                "active": False
            },
            "Group": {
                "import_": "import {Group} from \"./utils/group.js\";",
                "active": False
            },
            "OPs": {
                "import_": "import {OPInfo} from \"./utils/op.js\";",
                "active": False
            },
            "Equipment": {
                "import_": "import {Equipment} from \"./utils/equipment.js\";",
                "active": False
            },
            "Weapons": {
                "import_": "import {WeaponInfo} from \"./utils/weaponInfo/weapon.js\";",
                "active": False
            },
            "Attachments": {
                "import_": this.__fetch_attachments,
                "active": False
            },
        }

        this.configs: Config = {
            "siegeNames": [
                "Siege-Rando-Images"
            ],
            "siegePaths": [],
            "ignore": [
                ".git",
                ".vscode"
            ],
            "groupNames": [
                "Attackers",
                "Defenders"
            ],
            "equipmentNames": [
                "Equipment"
            ],
            "weaponNames": [
                "PrimaryWeapons",
                "SecondaryWeapons"
            ],
            "attachmentNames": [
                "SightAttachments",
                "BarrelAttachments",
                "UnderBarrelAttachments",
                "GripAttachments"
            ],
            "imageExtensions": [
                ".png",
                ".jpg",
                ".webp",
                ".svg",
                ".gif",
                ".tiff",
                ".tif"
            ],
            "jsonParsingEnabled": True,
            "searchForFolderNames": True
        }

        this.__spaces: list[str] = [" ", "_", "-"]

        this.parsed_json_path: str = "./Siege-Rando-Images/parsed.json"
        this.parsed_json_base_path: str = "./Siege-Rando-Images"
        this.ops_ts_path: str = "../src/ops.ts"
        this.export_groups_regardless = True
        this.__image_infos: dict[str, ImageInfo] = {}

        this.attachment_imports: AttachmentImports = {
            "BarrelAttachment": False,
            "GripAttachment": False,
            "SightAttachment": False,
            "UnderBarrelAttachment": False
        }
    @property
    def __check_names(this) -> list[str]:
        return [*this.configs["groupNames"], *this.configs["equipmentNames"], *this.configs["weaponNames"], *this.configs["attachmentNames"]]

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
        has_many = this.__has_many_attachments;
        for key in this.attachment_imports:
            value = this.attachment_imports[key]
            if value == True:
                if has_many:
                    import_string += f"\n\t{key},"
                else:
                    import_string += f"{key}"
        if has_many:
            import_string += "\n} from \"./utils/weaponInfo/attachment.js\";"
        else:
            import_string += "} from \"./utils/weaponInfo/attachment.js\";"

        return import_string

    def start(this):
        parsed_data = {}
        if exists(this.parsed_json_path):
            with open(this.parsed_json_path, "r") as json_file:
                parsed_data = json.load(json_file)
                json_file.close()
        if not exists(this.ops_ts_path):
            Path(dirname(this.ops_ts_path)).mkdir(parents=True, exist_ok=True)
        with open(this.ops_ts_path, "w") as ts_file:
            parse_string: str = ""
            parse_string = this.__parse(parsed_data, parse_string)
            ts_file.write(f"//#region Main\n\n{this.__fetch_imports}{parse_string}\n\n//#endregion")
            ts_file.close()

    def __parse(this, data: dict, parse_string: str, json_tree_path: str = ".", name: str = "") -> str:
        first_matching_parent = this.__fetch_first_matching_parent(json_tree_path, this.__check_names)
        if first_matching_parent == None:
            parse_string = this.__parse_group(data, parse_string, json_tree_path)
        else:
            first_matching_parent_string = first_matching_parent[0]
            first_matching_parent_level = first_matching_parent[1]
            # real_dir_name = basename(json_tree_path)
            
            if first_matching_parent_level == 1:
                if this.__string_contains(first_matching_parent_string, this.configs["equipmentNames"]):
                    pass
                elif this.__string_contains(first_matching_parent_string, this.configs["weaponNames"]) or this.__string_contains(first_matching_parent_string, this.configs["attachmentNames"]):
                    pass
                elif this.__string_contains(first_matching_parent_string, this.configs["groupNames"]):
                    parse_string = this.__parse_group_info(data, parse_string, json_tree_path)
                else:
                    pass
            elif first_matching_parent_level > 1:
                pass
                if this.__string_contains(first_matching_parent_string, this.configs["equipmentNames"]):
                    pass
                elif this.__string_contains(first_matching_parent_string, this.configs["weaponNames"]) or this.__string_contains(first_matching_parent_string, this.configs["attachmentNames"]):
                    pass
                elif this.__string_contains(first_matching_parent_string, this.configs["groupNames"]):
                    parse_string = this.__parse_op_info(data, parse_string, json_tree_path, name)
                else:
                    pass
        return parse_string
    def __parse_group(this, data: dict, parse_string: str, json_tree_path: str) -> str:
        if this.export_groups_regardless:
            if not this.imports["Groups"]["active"]:
                this.imports["Groups"]["active"] = True
            parse_string += "\n\nexport const GROUPS: Groups = {"
        if len(data) > 0:
            if not this.export_groups_regardless:
                if not this.imports["Groups"]["active"]:
                    this.imports["Groups"]["active"] = True
                parse_string += "\n\nexport const GROUPS: Groups = {"
            for key in data:
                value = data[key]
                if not this.imports["Group"]["active"]:
                    this.imports["Group"]["active"] = True
                parse_string += f"\n\t{key}: new Group(" + "{"
                if isinstance(value, dict):
                    parse_string = this.__parse(value, parse_string, join(json_tree_path, key), key)
                elif isinstance(value, str):
                    this.__add_image_info("icon", parse_string, value, "\t\t", lambda parse_string: f"{parse_string}\n\t" + "});")
                else:
                    parse_string += "}),"
            this.__image_infos.clear()
            parse_string += "\n};"
        elif this.export_groups_regardless:
            parse_string += "};"
        return parse_string
    def __parse_group_info(this, data: dict, parse_string: str, json_tree_path: str) -> str:
        found_an_op = False
        if len(data) > 0:
            for key in data:
                value = data[key]
                if isinstance(value, str):
                    this.__add_image_info("icon", parse_string, value, "\t\t")
            this.__image_infos.clear()
            for key in data:
                value = data[key]
                if isinstance(value, dict):
                    if not found_an_op:
                        found_an_op = True
                        parse_string += "\n\t\tops: ["
                    if not this.imports["OPs"]["active"]:
                        this.imports["OPs"]["active"] = True
                    parse_string += "\n\t\t\tnew OPInfo({" + f"\n\t\t\t\tname: \"{key}\","
                    parse_string = this.__parse(value, parse_string, join(json_tree_path, key), key)
                    parse_string += "\n\t\t\t}),"
            if found_an_op:
                parse_string += "\n\t\t]"
            parse_string += "\n\t}),"
        else:
            parse_string += "});"
        return parse_string
    def __parse_op_info(this, data: dict[str, Union[str, dict]], parse_string: str, json_tree_path: str, name: str) -> str:
        if len(data) > 0:
            for key in data:
                value = data[key]
                if isinstance(value, str):
                    if "icon" in key.lower():
                        this.__add_image_info("icon", parse_string, value, "\t\t\t\t")
                    else:
                        this.__add_image_info("image", parse_string, value, "\t\t\t\t")
            this.__image_infos.clear()
        return parse_string

    def __add_image_info(this, id: str, parse_string: str, value: str, tabs: str, callback: Optional[Callable[[str], str]] = None):
        if not id in this.__image_infos:
            this.__image_infos[id] = {"found": False, "info": {"start": None, "end": None}}
        real_value_path = join(this.parsed_json_base_path, value)
        if exists(real_value_path):
            if not this.__image_infos[id]["found"]:
                icon_string = f"\n{tabs}{id}: \"{relpath(value)}\","

                this.__image_infos[id]["found"] = True
                this.__image_infos[id]["info"]["start"] = len(parse_string)
                this.__image_infos[id]["info"]["end"] = len(parse_string) + len(icon_string)

                parse_string += icon_string
                if callback != None:
                    parse_string = callback(parse_string)
            else:
                parse_string = replace_between(parse_string, f"\n{tabs}{id}: {value},", this.__image_infos[id]["info"]["start"], this.__image_infos[id]["info"]["end"])

    def __fetch_matching_name(this, name: str, names: list[str], return_none: bool = False, keep_spaces: bool = False) -> Optional[str]:
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
    def __string_contains(this, string: str, substrings: list[str]) -> bool:
        for check in substrings:
            if this.__all_words_are_similar(string, check):
                return True
        return False
    def __path_contains(this, path: str, substrings: list[str]) -> bool:
        pre_path = None
        while path != pre_path:
            name = basename(path)
            for check in substrings:
                if this.__all_words_are_similar(name, check):
                    return True
            pre_path = path
            path = dirname(path)
        return False
    def __fetch_paths_from_path(this, path: str, substrings: list[str], ignore_paths: list[str]) -> Optional[list[str]]:
        all_paths: list[str] = []
        pre_path = None
        while path != pre_path:
            name = basename(path)
            skip = False
            for i_path in ignore_paths:
                if this.__same_path(path, i_path):
                    skip = True
            if not skip:
                for check in substrings:
                    # log(f"Name: {name}\nCheck: {check}\n")
                    if this.__all_words_are_similar(name, check):
                        all_paths.append(relpath(path))
            pre_path = path
            path = dirname(path)
        return all_paths
    def __fetch_first_matching_parent(this, path: str, names: list[str]) -> Optional[list[str, int]]:
        parent_level = 1
        pre_path = None
        while path != pre_path:
            name = basename(path)
            fetch = this.__fetch_matching_name(name, names, True, True)
            if fetch != None:
                return [fetch, parent_level]
            parent_level += 1
            pre_path = path
            path = dirname(path)
        return None

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
    def __similar_name_exists(this, base_path: str, name_to_check: str):
        names = listdir(base_path)
        for name in names:
            if this.__all_words_are_similar(name_to_check, name):
                return name
        return name_to_check
    def __all_words_are_capitalized(this, string: str):
        all_words = this.__get_all_words(string)
        for word in all_words:
            if word[0] != word[0].upper():
                return False
        return True
    def __word_count(this, string: str):
        return len(this.__get_all_words(string))
    def __capitalize_all_words(this, string: str) -> str:
        if not this.__all_words_are_capitalized(string):
            words = this.__get_all_words(string, True)
            for i in range(len(words)):
                word: str = words[i]
                if not word in this.__spaces:
                    word = word[0:1].upper() + word[1:len(word)]
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
            
            if i == 0 or (pre_char.isalpha() and char.isalpha() and pre_char == pre_char.lower() and char == char.upper()):
                si = i
                spc: str = ""
                while si < len(string):
                    sc = string[si]
                    if spc.isalpha() and char.isalpha() and spc == spc.lower() and sc == sc.upper():
                        break
                    elif sc in this.__spaces:
                        break
                    spc = sc
                    si += 1
                if i < si:
                    split_list.append(string[i:si])
                else:
                    split_list.append(string[i:i + 1])
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

Parser = __Parser()

Parser.start()
#endregion