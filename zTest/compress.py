#region Main
from vscode import log
from vscode.workspace import WorkspaceFolder
from enum import Enum
from genericpath import isfile, isdir, exists, samefile
from os import getcwd, listdir, mkdir, remove, rmdir
from os.path import basename, dirname, splitext, relpath
from shutil import copyfile
from pathlib import Path
import json

class Compression(Enum):
    DECOMPRESS = 0
    COMPRESS_NEEDED = 1
    COMPRESS = 2

class __Compressionator:
    __json_data: dict = {}
    __json_op_names: list[str] = ["ops"]
    __json_tools_names: list[str] = ["tools"]
    __tool_names: list[str] = ["Equipment", "PrimaryWeapons", "SecondaryWeapons"]
    __attachment_names: list[str] = ["SightAttachments", "BarrelAttachments", "UnderBarrelAttatchments", "GripAttatchments"]
    __group_names: list[str] = ["Attackers", "Defenders"]
    __paths_to_remove: list[str] = []
    __check_remove_path: list[str] = []
    __error_string: str = ""
    __siege_path: str = ""
    workspace_folders: list[WorkspaceFolder] = []
    @property
    def siege_path(self):
        if self.__siege_path == "":
            self.__search_for_siege_path()
        elif not exists(self.__siege_path):
            self.__search_for_siege_path()
        return self.__siege_path
    def __search_for_siege_path(self):
        cwd = getcwd()
        fetch_siege_path = self.__fix_path(cwd, ["siege-rando-images"], "-")
        if fetch_siege_path != None:
            self.__siege_path = relpath(fetch_siege_path).replace("\\", "/")
        else:
            if len(self.workspace_folders) > 0:
                for wf in  self.workspace_folders:
                    path = relpath(str(wf.uri)).replace("\\", "/")
                    fetch_siege_path = self.__search_for_dir_recursively(path, "siege-rando-images", "-", [".git", ".vscode"])
                    if fetch_siege_path != None:
                        break
            else:
                fetch_siege_path = self.__search_for_dir_recursively(".", "siege-rando-images", "-", [".git", ".vscode"])
            if fetch_siege_path != None:
                self.__siege_path = fetch_siege_path
            else:
                raise ValueError("Cannot Find \"Siege-Rando-Images\" Folder")
    def __remove_files_from_list(self, main_path: str, name: str, ignore: list[str]):
        path = f"{main_path}/{name}"
        if isdir(path) and not self.__string_contains(name, ignore):
            return True
        return False
    def __search_for_dir_recursively(self, main_path: str, dir_name: str, split_word_by: str, ignore: list[str]):
        names: list = list(filter(lambda name: self.__remove_files_from_list(main_path, name, ignore), listdir(main_path)))
        if len(names) == 0:
            return None
        else:
            for name in names:
                path = f"{main_path}/{name}"
                if self.__all_words_are_similar(name, dir_name, split_word_by):
                    return path
            for name in names:
                path = f"{main_path}/{name}"
                fetch = self.__search_for_dir_recursively(path, dir_name, split_word_by, ignore)
                if fetch != None:
                    return fetch
                
    __mode: Compression = Compression.DECOMPRESS
    @property
    def mode(self):
        return self.__mode
    @mode.setter
    def mode(self, value: Compression):
        self.__mode = value
        self.__start_compression()

    def __start_compression(self):
        names = listdir(self.siege_path)
        match self.__mode:
            case Compression.DECOMPRESS:
                self.__try_decompress(names)
            case Compression.COMPRESS_NEEDED:
                self.__try_compress_needed(names)
            case Compression.COMPRESS:
                self.__try_compress(names)

    def __fix_string_name(self, string: str, string_list: list[str], keep_spaces = False) -> str:
        new_string: str = string
        for check in string_list:
            if self.__all_words_are_similar(string.replace("_", " "), check.replace("_", " "), " "):
                new_string = self.__capitalize_all_words(check)
        if not keep_spaces:
            return new_string.replace(" ", "")
    def __string_contains(self, string: str, string_list: list[str]) -> bool:
        for check in string_list:
            if self.__all_words_are_similar(string, check, " "):
                return True
        return False
    def __path_contains(self, path: str, string_list: list[str], split_words_by: str) -> bool:
        while path != "" and path != "." and path != ".." and path != "C:\\":
            name = basename(path)
            for check in string_list:
                if self.__all_words_are_similar(name, check, split_words_by):
                    return True
            path = dirname(path)
        return False
    def __fix_path(self, path: str, string_list: list[str], split_words_by: str) -> bool:
        while path != "" and path != "." and path != ".." and path != "C:\\":
            name = basename(path)
            for check in string_list:
                if self.__all_words_are_similar(name, check, split_words_by):
                    return path
            path = dirname(path)
        return None

    def __is_similar(self, string1: str, string2: str) -> bool:
        real_string_1 = string1.lower().replace(" ", "").replace("_", "")
        real_string_2 = string2.lower().replace(" ", "").replace("_", "")
        if real_string_1 in real_string_2 or real_string_2 in real_string_1:
            return True;
        return False
    
    def __similar_name_exists(self, base_path: str, name_to_check: str):
        names = listdir(base_path)
        for name in names:
            if self.__all_words_are_similar(name_to_check, name, " "):
                return name
        return name_to_check
    
    #region Change Compression
    #region Decompressing
    def __try_decompress(self, names: list[str]):
        log("Trying to decompress")
        self.__search_for_json_ops(names, self.__decompress_compression)
        self.__search_for_groups(names, self.__decompress_needed_compression, True)

    #region Decompress needed compression
    def __decompress_needed_compression(self, all_tools: dict):
        for base_path in all_tools:
            tool_info = all_tools[base_path]
            self.__create_files_from_json(base_path, base_path, tool_info["json_data"], self.__create_files_from_json)
        
        for base_path in all_tools:
            tool_info = all_tools[base_path]
            for path in tool_info["json_paths"]:
                remove(path)
        self.__remove_paths_and_check()
    #endregion

    #region Decompress full compression
    def __decompress_compression(self, base_path: str, all_json_paths: list[str], json_data: dict):
        self.__create_files_from_json(base_path, base_path, json_data, self.__create_files_from_json)
        self.__remove_paths_and_check()
        for path in all_json_paths:
            remove(path)
    #endregion
    #endregion

    #region Compress Needed
    def __try_compress_needed(self, names: list[str]):
        log("Trying to compress what is needed")
        self.__search_for_json_ops(names, self.__compress_needed_from_compression)
        self.__search_for_groups(names, self.__turn_all_tool_json_files_into_one, True)
        self.__search_for_groups(names, self.__compress_needed_from_decompression)
    
    def __turn_all_tool_json_files_into_one(self, all_tools: list[str]):
        for base_path in all_tools:
            json_tools_path = f"{base_path}/tools.json"
            tool_info = all_tools[base_path]
            for path in tool_info["json_paths"]:
                remove(path)
            with open(json_tools_path, "w") as tools_file:
                json.dump(tool_info["json_data"], tools_file, indent=4)
                tools_file.close()
    
    #region Compress only what is needed from what's already decompressed
    def __compress_needed_from_decompression(self, all_tools: dict):
        for base_path in all_tools:
            json_paths = all_tools[base_path]
            for path in json_paths:
                json_path = f"{base_path}/tools.json"
                if exists(json_path):
                    tools_file = open(json_path, "r")
                    self.__json_data = json.load(tools_file)
                    tools_file.close()
                
                self.__compress(base_path, base_path, path, basename(path), self.__json_data )

                with open(json_path, "w") as tools_file:
                    json.dump(self.__json_data, tools_file, indent=4)
                    tools_file.close()
                
                self.__json_data.clear()
        self.__remove_paths_and_check()
    #endregion
    
    #region Compress only what is needed from what's already compressed
    def __compress_needed_from_compression(self, base_path: str, all_json_paths, data: dict):
        self.__create_files_from_json(base_path, base_path, data, self.__create_op_dirs, False)
                
        self.__remove_paths_and_check()

        for path in all_json_paths:
            remove(path)
    
    def __create_op_dirs(self, base_path: str, json_base_path: str, data: dict):
        for item in data:
            value = data[item]
            if not isinstance(value, str):
                self.__create_json_tools_and_files(self.__create_dir(base_path, item), json_base_path, value)
    def __create_json_tools_and_files(self, base_path: str, json_base_path: str, json_data: dict):
        items_to_remove: list[str] = []
        for item in json_data:
            value = json_data[item]
            if isinstance(value, str):
                self.__create_file(base_path, json_base_path, value)
                if not item in items_to_remove:
                    items_to_remove.append(item)
        for item in items_to_remove:
            del json_data[item]
        items_to_remove.clear()

        tools_json_path = f"{base_path}/tools.json"

        if exists(tools_json_path):
            with open(tools_json_path, "r") as json_file:
                self.__json_data = json.load(json_file)
                json_file.close()
            self.__fix_json_item_names(json_data, self.__json_data)
        else:
            self.__fix_json_item_names(json_data)
        
        self.__fix_json_items(json_data, base_path=base_path, json_base_path=json_base_path)

        if len(self.__json_data) > 0:
            self.__merge(json_data, self.__json_data)

        self.__json_data.clear()
        
        with open(tools_json_path, "w") as tools_file:
            json.dump(json_data, tools_file, indent=4)        
            tools_file.close()
    #endregion
    #endregion

    #region Full Compressioon
    def __try_compress(self, names: list[str]):
        log("Trying to compress everything")
        self.__search_for_json_ops(names, self.__turn_all_ops_json_files_into_one)
        for name in names:
            if self.__string_contains(name, self.__group_names):
                self.__compress(self.siege_path, self.siege_path, f"{self.siege_path}/{name}", name, self.__json_data)

        with open(f"{self.siege_path}/ops.json", "w") as json_file:
            json.dump(self.__json_data, json_file, indent=4)
        self.__json_data.clear()
        self.__remove_paths_and_check()
        
    def __turn_all_ops_json_files_into_one(self, base_path: str, all_json_paths: list[str], json_data: dict):
        if len(all_json_paths) > 1:
            json_ops_path = f"{base_path}/ops.json"
            for path in all_json_paths:
                remove(path)
            with open(json_ops_path, "w") as ops_file:
                json.dump(json_data, ops_file, indent=4)
                ops_file.close()
        self.__json_data = json_data
    #endregion
    
    #region Shared functions
    def __compress(self, start_path: str, base_path: str, main_path: str, dir_name: str, json_data: dict):
        base_name = basename(base_path)

        check_names = [*self.__group_names, *self.__tool_names, *self.__attachment_names]
        real_base_name = self.__fix_string_name(base_name, check_names)
        real_dir_name = self.__fix_string_name(self.__fix_string_name(dir_name, check_names), list(json_data.keys()))

        json_data[real_dir_name] = {}
        names = listdir(main_path)

        self.__check_remove_path.append(main_path)

        for name in names:
            path = f"{main_path}/{name}"
            if isdir(path):
                self.__compress(start_path, main_path, path, name, json_data[real_dir_name])
            elif name.endswith(".png"):
                real_name = self.__capitalize_all_words(splitext(name)[0].replace("_", " "))
                if not self.__string_contains(real_base_name, self.__group_names):
                    if self.__string_contains(real_name, list(json_data[real_dir_name].keys())):
                        continue
                    
                if self.__is_similar(real_dir_name, self.__tool_names[0]):
                    path_to_file = f"{self.siege_path}/{real_dir_name}/{name}"
                elif self.__is_similar(real_dir_name, self.__tool_names[1]) or self.__is_similar(real_dir_name, self.__tool_names[2]) or self.__string_contains(real_dir_name, self.__attachment_names):
                    path_to_file = f"{self.siege_path}/Weapons/{real_dir_name}/{name}"
                else:
                    if self.__is_similar(real_base_name, self.__tool_names[0]):
                        path_to_file = f"{self.siege_path}/{real_base_name}/{real_dir_name}/{name}"
                    elif self.__is_similar(real_base_name, self.__tool_names[1]) or self.__is_similar(real_base_name, self.__tool_names[2]):
                        path_to_file = f"{self.siege_path}/Weapons/{real_dir_name}/{name}"
                    elif self.__string_contains(real_base_name, self.__group_names):
                        if real_dir_name in real_name:
                            if "icon" in real_name.lower():
                                path_to_file = f"{self.siege_path}/OPIcons/{name}"
                            else:
                                path_to_file = f"{self.siege_path}/OPImages/{name}"
                    else:
                        path_to_file = None
                if path_to_file != None:
                    Path(dirname(path_to_file)).mkdir(parents=True, exist_ok=True)
                    copyfile(path, path_to_file)
                    self.__paths_to_remove.append(path)
                    json_data[real_dir_name][real_name] = relpath(path_to_file, start_path).replace("\\", "/")
            elif name.endswith(".json"):
                with open(path, "r") as json_file:
                    new_json_data = json.load(json_file)
                    self.__fix_json_item_names(json_data[real_dir_name], new_json_data)
                    self.__fix_json_items(new_json_data, base_path=start_path, json_base_path=dirname(path))
                    self.__merge(json_data[real_dir_name], new_json_data)
                    self.__paths_to_remove.append(path)
                    json_file.close()
                
    def __search_for_json_ops(self, names: list[str], compression_callback):
        all_ops: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__json_op_names) and name.endswith(".json"):
                all_ops.append(f"{self.siege_path}/{name}")
        self.__error_handler(*all_ops, True)

        all_ops_data: list[dict] = []
        for path in all_ops:
            json_file = open(path, "r")
            all_ops_data.append(json.load(json_file))
            json_file.close()
        compression_callback(self.siege_path, all_ops, self.__merge_json_data(*all_ops_data))
    def __search_for_groups(self, names: list[str], compression_callback, search_for_jsons: bool = False):
        for name in names:
            if self.__string_contains(name, self.__group_names):
                self.__search_for_ops(f"{self.siege_path}/{name}", compression_callback, search_for_jsons)
    
    def __fix_json_item_names(self, *json_data_list: dict):
        for json_data in json_data_list:
            items_to_add: list[list[str, dict]] = []
            items_to_remove: list[str] = []

            # This replaces all names that have underscores to have spaces instead
            # Example: A json dictionary has the name of an attachment called "Red_Dot" so it changes to "Red Dot"
            for item_name in json_data:
                if "_" in item_name:
                    item = json_data[item_name]
                    new_item_name = item_name.replace("_", " ")
                    item_to_add = [new_item_name, item]
                    if not item_to_add in items_to_add:
                        items_to_add.append(item_to_add)
                    if not item_name in items_to_remove:
                        items_to_remove.append(item_name)

            for [item_name, item] in items_to_add:
                json_data[item_name] = item
            for item_name in items_to_remove:
                del json_data[item_name]
            items_to_add.clear()
            items_to_remove.clear()

            # This fixes any names that are similar to a group name or a tool name to be correctly named
            # Example: A json dictionary has an op group called "Attack" when it should be called "Attackers" this it fixes that
            check_names = [*self.__group_names, *self.__tool_names, *self.__attachment_names]
            for item_name in json_data:
                item = json_data[item_name]
                if not isinstance(item, str) and self.__string_contains(item_name, check_names):
                    new_item_name = self.__fix_string_name(item_name, check_names)
                else:
                    new_item_name = item_name
                if item_name != new_item_name:
                    if not item_name in items_to_remove:
                        items_to_remove.append(item_name)
                    item_to_add = [new_item_name, item]
                    if not item_to_add in items_to_add:
                        items_to_add.append(item_to_add)

            for item_name in items_to_remove:
                del json_data[item_name]
            for [item_name, item] in items_to_add:
                json_data[item_name] = item
            items_to_add.clear()
            items_to_remove.clear()

            
            # This fixes any names similar between each dictionary to have the same name
            # Example: One json dictionary has the name "Ash" and the other "ash" which would then turn into "Ash" on both json dictionaries
            for item_name in json_data:
                item = json_data[item_name]
                new_item_name = self.__get_most_prefered_item_name(item_name, json_data_list)
                if item_name != new_item_name:
                    if not item_name in items_to_remove:
                        items_to_remove.append(item_name)
                    item_to_add = [new_item_name, item]
                    if not item_to_add in items_to_add:
                        items_to_add.append(item_to_add)

            for item_name in items_to_remove:
                del json_data[item_name]
            for [item_name, item] in items_to_add:
                json_data[item_name] = item
            items_to_add.clear()
            items_to_remove.clear()
        
        next_dict_list = self.__get_next_json_data_list_level(json_data_list)
        if len(next_dict_list) > 0:
            self.__fix_json_item_names(*next_dict_list)
    def __fix_json_items(self, *data_list: dict, base_path: str, json_base_path: str):        
        for data in data_list:
            for item in data:
                value = data[item]
                if isinstance(value, str):
                    real_value_path = f"{json_base_path}/{value}"
                    data[item] = relpath(real_value_path, base_path).replace("\\", "/")
                else:
                    self.__fix_json_items(value, base_path=base_path, json_base_path=json_base_path)
    
    def __merge_json_data(self, *dict_list: dict) -> dict:
        self.__fix_json_item_names(*dict_list)
        if len(dict_list) <= 0:
            return {}
        elif len(dict_list) == 1:
            return dict_list[0]
        return self.__merge_copy(*dict_list)
    def __merge_copy(self, *dict_list: dict):
        copy = dict_list[0].copy()
        dict_list.remove(dict_list[0])
        self.__merge(copy, *dict_list)
        return copy
    def __merge(self, dictionary: dict, *dict_list: dict):
        for d in dict_list:
            for k in d:
                if k in dictionary and isinstance(dictionary[k], dict) and isinstance(d[k], dict):
                    self.__merge(dictionary[k], d[k])
                else:
                    dictionary[k] = d[k]     
    
    def __get_next_json_data_list_level(self, json_data_list: list[dict]) -> list[dict]:
        new_json_data_list: list[dict] = []
        for json_data in json_data_list:
            for item_name in json_data:
                item = json_data[item_name]
                if not isinstance(item, str):
                    new_json_data_list.append(item)
        return new_json_data_list
    def __get_most_prefered_item_name(self, name: str, json_data_list: list[dict]) -> str:
        all_similar_names: list[str] = [name]
        word_count = self.__word_count(name)
        for json_data in json_data_list:
            for item_name in json_data:
                new_word_count = self.__word_count(item_name)
                if not name == item_name and word_count == new_word_count and self.__is_similar(name, item_name) and not item_name in all_similar_names:
                    all_similar_names.append(item_name)
        prefered: str = name

        for name in all_similar_names:
            if self.__all_words_capitalized(prefered) and self.__all_words_capitalized(name):
                if self.__all_words_are_similar(prefered, name, " "):
                    p_len = len(prefered)
                    n_len = len(name)
                    if n_len > p_len:
                        prefered = name
            elif not self.__all_words_capitalized(prefered) and self.__all_words_capitalized(name):
                if self.__all_words_are_similar(prefered, name, " "):
                    p_len = len(prefered)
                    n_len = len(name)
                    if n_len > p_len:
                        prefered = name
        prefered = self.__capitalize_all_words(prefered)
        
        return prefered
    
    def __all_words_capitalized(self, string: str):
        all_words = string.split(" ")
        for word in all_words:
            if word[0] != word[0].upper():
                return False
        return True
    def __word_count(self, string: str):
        return len(string.split(" "))
    def __capitalize_all_words(self, string):
        if not self.__all_words_capitalized(string):
            words = string.split(" ")
            for i in range(len(words)):
                word: str = words[i]
                word = word[0:1].upper() + word[1:len(word)]
                words[i] = word
            string = " ".join(words)
        return string
    def __all_words_are_similar(self, string_1: str, string_2: str, split_by: str):
        words_1 = string_1.split(split_by)
        words_2 = string_2.split(split_by)
        length = len(words_1)
        if length != len(words_2):
            return False
        if length == 0:
            words_1.append(string_1)
            words_2.append(string_2)
        for i in range(length):
            if not self.__is_similar(words_1[i], words_2[i]):
                return False
        return True
    
    def __search_for_tools_json(self, base_path: str):
        names = listdir(base_path)
        all_json_tools: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__json_tools_names) and name.endswith(".json"):
                all_json_tools.append(f"{base_path}/{name}")
        return all_json_tools
    def __search_for_tools(self, base_path: str):
        names = listdir(base_path)
        all_tools: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__tool_names):
                all_tools.append(f"{base_path}/{name}")
        return all_tools
    def __search_for_ops(self, base_path: str, compression_callback, search_for_jsons: bool = False):
        names = listdir(base_path)
        all_tools: dict[str, any] = {}
        for name in names:
            real_path = f"{base_path}/{name}"
            if isdir(real_path):
                if search_for_jsons:
                    tools = self.__search_for_tools_json(real_path)
                    all_tool_data: list[dict] = []
                    for path in tools:
                        with open(path, "r") as json_file:
                            all_tool_data.append(json.load(json_file))
                            json_file.close()
                    all_tools[real_path] = {
                        "json_paths": tools,
                        "json_data": self.__merge_json_data(*all_tool_data)
                    }
                else:
                    all_tools[real_path] = self.__search_for_tools(real_path)
        self.__error_handler(*all_tools, search_for_jsons)

        items_to_remove: list[str] = []
        for item_name in all_tools:
            item = all_tools[item_name]
            if len(item) == 0:
                if not item_name in items_to_remove:
                    items_to_remove.append(item_name)
        
        for item_name in items_to_remove:
            del all_tools[item_name]
        items_to_remove.clear()
                
        if len(all_tools) > 0:
            compression_callback(all_tools)
    
    def __remove_paths_and_check(self):
        for i in range(len(self.__paths_to_remove) - 1, -1, -1):
            path = self.__paths_to_remove[i]
            if exists(path):
                remove(path)
            self.__paths_to_remove.remove(path)
        i = len(self.__check_remove_path) - 1
        while i >= 0:
            path = self.__check_remove_path[i]
            if exists(path):
                names = listdir(path)
                base = dirname(path)
                if not self.__same_path(base, self.siege_path) and not base in self.__check_remove_path:
                    self.__check_remove_path.append(base)
                    i += 1
                if len(names) <= 0 and exists(path):
                    rmdir(path)
            self.__check_remove_path.remove(path)
            i -= 1
    
    def __create_files_from_json(self, base_path: str, json_base_path: str, data: dict, callback, repeat_callback: bool = True):
        for item in data:
            value = data[item]
            if isinstance(value, str):
                self.__create_file(base_path, json_base_path, value)
            else:
                if repeat_callback:
                    callback(self.__create_dir(base_path, item), json_base_path, value, callback)
                else:
                    callback(self.__create_dir(base_path, item), json_base_path, value)
    def __create_file(self, base_path: str, json_base_path: str, value: dict):
        real_value_path = relpath(f"{json_base_path}/{value}").replace("\\", "/")
        dist_path = relpath(f"{base_path}/{basename(value)}").replace("\\", "/")
        # log(f"Fake: {value}   {f"{json_base_path}/{value}"}")
        if not self.__same_path(real_value_path, dist_path):
            # log(f"Real:\n\tCurrent: {real_value_path}\n\tDist: {dist_path}\n")
            copyfile(real_value_path, dist_path)
            value_path = dirname(real_value_path)
            if not self.__path_contains(value_path, self.__group_names, " ") and not value_path in self.__check_remove_path:
                self.__check_remove_path.append(value_path) 
            if not self.__path_contains(real_value_path, self.__group_names, " ") and not real_value_path in self.__paths_to_remove:
                self.__paths_to_remove.append(real_value_path)
    def __create_dir(self, base_path: str, item: str) -> str:
        path = f"{base_path}/{self.__similar_name_exists(base_path, item)}"
        if not exists(path):
            mkdir(path)
        return path
    
    def __same_path(self, p1: str, p2: str):
        try:
            return samefile(p1, p2)
        except:
            return False
    def __error_handler(self, *json_paths: str, check_jsons: bool = False):
        for path in json_paths:
            if not exists(path):
                self.__error_string += f"The path \"{path}\" does not exist\nThis is most likely a problem with the script\nSO GO TELL AZUL!!!\n"
        if check_jsons:
            for path in json_paths:
                with open(path, "r") as json_file:
                    json_data = json.load(json_file)
                    json_file.close()
                    self.__json_paths_error_handler(path, json_data)
        if self.__error_string != "":
            raise ValueError(self.__error_string)
    def __json_paths_error_handler(self, json_path: str, json_data: dict):
        for item in json_data:
            value = json_data[item]
            if isinstance(value, str):
                if not exists(value):
                    self.__error_string += f"Inside the json file \"{json_path}\":\n\tThe path {value} from {item} doesn't exist \nThis is most likely a you problem so go fix it\n"
    #endregion
    #endregion

def fetch_dir_count(path: str) -> int:
    dir_count = 0
    relative_path: str = relpath(path).replace("\\", "/")
    if isfile(relative_path):
        relative_path = dirname(relative_path)
    while relative_path != "" and relative_path != "."  and relative_path != ".." and isdir(relative_path):
        if not exists(relative_path):
            raise ValueError(f"{relative_path} does not exist.\nThis is most likely an Azul problem\nSO GO TELL AZUL!!!")
        dir_count += 1
        relative_path = dirname(relative_path);
    return dir_count
Compressionator = __Compressionator()
#endregion