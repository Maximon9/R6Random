from genericpath import exists
import json
from os import listdir
from os.path import dirname
from pathlib import Path
from typing import Callable, TypedDict, Union
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

class Imports(TypedDict):
    Groups: Import
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

class __Parser():

    def __init__(this) -> None:
        this.imports: Imports = {
            "Groups": {
                "import_": "import type {Groups} from \"./types/groups.js\";\nimport {Group} from \"./utils/groups.js\";",
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
            "Img": {
                "import_": "import {img} from \"./utils/htmlImageHanlder.js\";",
                "active": False
            },
        }

        this.parsed_json_path: str = "./Siege-Rando-Images/parsed.json"
        this.ops_ts_path: str = "../src/ops.ts"

        this.attachment_imports: AttachmentImports = {
            "BarrelAttachment": False,
            "GripAttachment": False,
            "SightAttachment": False,
            "UnderBarrelAttachment": False
        }

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
            parse_string = this.__parse(parsed_data)
            ts_file.write(f"{this.__fetch_imports}{parse_string}")
            ts_file.close()

    def __parse(this, data: dict) -> str:
        parse_string = ""
        if len(data) > 0:
            parse_string += "const GROUPS: Groups = {"
            this.imports["Groups"]["active"] = True
            for key in data:
                value = data[key]
                parse_string += f"\n\t{key}: new Group(\n\t\t\"{key}\""
                if isinstance(value, dict):
                    parse_string = this.__parse_group_info(value, parse_string)
                else:
                    parse_string += f",\n\t\timg({value})\n\t),"
            parsed_string += "\n};"
        else:
            parsed_string += "};"
        return parse_string
    def __parse_group_info(this, data: dict, parse_string: str) -> str:
        if len(data) > 0:
            for key in data:
                value = data[key]
                if isinstance(value, dict):
                    parse_string += ",\n\t\t["
                    parse_string += f"\n\t\t\tnew OPInfo(\n\t\t\t\t\"{key}\""
                    parse_string = this.__parse_op_info(key, value, parse_string)
                elif isinstance(value, str):
                    parse_string += f",\n\t\timg(\n\t\t\t\"{value}\"\n\t\t\t)"
        parse_string += "\n\t),"
        return parse_string    
    def __parse_op_info(this, name: str, data: dict[str, Union[dict, str]], parse_string: str) -> str:
        if len(data) > 0:
            possible_images: list[list[str, str]] = []
            for key in data:
                value = data[key]
                if isinstance(value, str):
                    possible_images.append(key, value)
            parse_string = this.__parse_op_images(name, parse_string, possible_images)
            for key in data:
                value = data[key]
                if isinstance(value, dict):
                    parse_string = this.__parse_tools(value, parse_string)
        parse_string += "\n\t\t]"
        return parse_string
    def __parse_tools(this, name: str, data: dict[str, Union[dict, str]], parse_string: str) -> str:    
    def __parse_op_images(this, name: str, parse_string: str, possible_images: list[list[str, str]]) -> str:
        if len(possible_images) > 0 and this.__there_are_op_images(name, possible_images):
            parse_string += ",\n\t\t\t\t{"
            for [key, value] in possible_images:
                if "icon" in key.lower():
                    parse_string += f"\n\t\t\t\t\timage: img(\n\t\t\t\t\t\t\"{value}\"\n\t\t\t\t\t),"
                else:
                    if this.__is_similar(name, key):
                        parse_string += f"\n\t\t\t\t\icon: img(\n\t\t\t\t\t\t\"{value}\"\n\t\t\t\t\t),"
            parse_string += "\n\t\t\t\t}"
        return parse_string

    def __is_op_image(this, name:str, key: str):
        if "icon" in key.lower():
            return True
        else:
            return this.__is_similar(name, key)
    def __there_are_op_images(this, name: str, possible_images: list[list[str, str]]):
        for [key, _] in possible_images:
            if this.__is_op_image(name, key):
                return True
        return False

    def __is_similar(this, string1: str, string2: str) -> bool:
        real_string_1 = string1.lower().replace(" ", "").replace("_", "")
        real_string_2 = string2.lower().replace(" ", "").replace("_", "")
        if real_string_1 in real_string_2 or real_string_2 in real_string_1:
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