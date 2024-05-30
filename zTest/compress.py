""" #region Main
from enum import Enum
from os import listdir
from os import remove
from os.path import samefile
from os.path import isdir
from os.path import exists
from os.path import basename
from os.path import dirname
from os.path import splitext
from os import getcwd
from os import mkdir
from os import rmdir
from os import walk
from shutil import copyfile
from pathlib import Path
import json

class Compression(Enum):
    DECOMPRESS = 0
    COMPRESS_NEEDED = 1
    COMPRESS = 2


class __Compressionator:
    __json_data = {}
    __json_op_names = ["ops.json"]
    __tool_names = ["Equipment", "PrimaryWeapons", "SecondaryWeapons"]
    __attachment_names = ["Sight", "Barrel", "Underbarrel", "Grip"]
    __json_tools_names = ["tools.json"]
    __group_names = ["Attackers", "Defenders"]
    __paths_to_remove: list[str] = []
    __check_remove_path: list[str] = []
    __error_string: str = ""
    @property
    def siege_path(self):
        if getcwd().endswith("assets"):
            return "./Siege-Rando-Images"
        else:
            return "."
    
    @property
    def ops_path(self):
        if getcwd().endswith("assets"):
            return "../src/ops.ts"
        else:
            return "../../src/ops.ts"

    __mode: Compression = Compression.DECOMPRESS
    @property
    def mode(self):
        return self.__mode
    @mode.setter
    def mode(self, value: Compression):
        self.__mode = value
        self.__compress()

    def __compress(self):
        match self.__mode:
            case Compression.DECOMPRESS:
                self.__try_decompress()
            case Compression.COMPRESS_NEEDED:
                self.__try_compress_needed()
            case Compression.COMPRESS:
                self.__try_compress()

    def __string_contains(self, string: str, string_list: list[str]) -> bool:
        for check in string_list:
            if self.__is_similar(string, check):
                return True
        return False

    def __is_similar(self, string1: str, string2: str) -> bool:
        if string1.lower().replace(" ", "") in string2.lower().replace(" ", "") or string2.lower().replace(" ", "") in string1.lower().replace(" ", ""):
            return True;
        return False
    
    def __similar_name_exists(self, base_path: str, name_to_check: str):
        names = listdir(base_path)
        for name in names:
            if self.__is_similar(name_to_check, name):
                return name
        return name_to_check
    
    #region Change Compression
    #region Decompressing
    def __try_decompress(self):
        print("Trying to decompress")
        names = listdir(self.siege_path)
        all_ops: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__json_op_names):
                all_ops.append(f"{self.siege_path}/{name}")
        self.__error_handler(all_ops, True)
        for op_path in all_ops:
            if self.__string_contains(basename(op_path), self.__json_op_names):
                self.__decompress_compression(self.siege_path, op_path)
        for name in names:
            if self.__string_contains(name, self.__group_names):
                self.__search_for_ops(f"{self.siege_path}/{name}", self.__search_for_tools_json, self.__decompress_needed_compression, True)

    #region Decompress needed compression
    def __search_for_tools_json(self, base_path: str):
        names = listdir(base_path)
        all_json_tools: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__json_tools_names):
                all_json_tools.append(f"{base_path}/{name}")
        return all_json_tools

    def __decompress_needed_compression(self, all_json_tools: list[str]):
        for json_path in all_json_tools:
            base_path = dirname(json_path)
            tools_file = open(json_path, 'r')
            tools_data = json.load(tools_file)

            self.__create_dirs_from_json(base_path, base_path, tools_data, self.__create_dirs_from_json)
            
            tools_file.close()
            remove(json_path)
        self.__remove_paths_and_check()
    #endregion

    #region Decompress full compression
    def __decompress_compression(self, base_path: str, json_path: str):
        ops_file = open(json_path, 'r')
        ops_data = json.load(ops_file)

        self.__create_dirs_from_json(base_path, base_path, ops_data, self.__create_dirs_from_json)
        self.__remove_paths_and_check()

        ops_file.close()
        remove(json_path)
    #endregion
    #endregion

    #region Compress Needed
    def __try_compress_needed(self):
        print("Trying to compress what is needed")
        names = listdir(self.siege_path)
        all_ops: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__json_op_names):
                all_ops.append(f"{self.siege_path}/{name}")
        self.__error_handler(all_ops, True)
        for op_path in all_ops:
            if self.__string_contains(basename(op_path), self.__json_op_names):
                self.__compress_needed_from_compression(self.siege_path, op_path)
        for name in names:
            if self.__string_contains(name, self.__group_names):
                self.__search_for_ops(f"{self.siege_path}/{name}", self.__search_for_tools, self.__compress_needed_from_decompression)
    
    #region Compress only what is needed from what's already decompressed
    def __search_for_tools(self, base_path: str):
        names = listdir(base_path)
        all_tools: list[str] = []
        for name in names:
            if self.__string_contains(name, self.__tool_names):
                all_tools.append(f"{base_path}/{name}")
        return all_tools

    def __compress_needed_from_decompression(self, all_tools: list[str]):
        for tool_path in all_tools:
            base_path = dirname(tool_path)
            json_path = f"{base_path}/tools.json"
            if exists(json_path):
                tools_file = open(json_path, "r")
                self.__json_data = json.load(tools_file)
                tools_file.close()
            
            tools_file = open(json_path, "w")

            self.__put_file_in_json(base_path, base_path, tool_path, basename(tool_path))
            
            tools_file.write(json.dumps(self.__json_data, indent=4))

            self.__json_data = {}
            tools_file.close()
        self.__remove_paths_and_check()
    
    def __put_file_in_json(self, op_path: str, base_path: str, main_path: str, dir_name: str):
        base_name = basename(base_path)

        real_base_name = base_name.replace(" ", "").replace("_", "")
        real_dir_name = dir_name.replace(" ", "").replace("_", "")

        self.__json_data[real_dir_name] = {}
        names = listdir(main_path)

        self.__check_remove_path.append(main_path)

        for name in names:
            path = f"{main_path}/{name}"
            if isdir(path):
                self.__put_file_in_json(op_path, main_path, path, name)
            else:
                real_name = splitext(name)[0].replace("_", " ")
                if self.__is_similar(real_dir_name, self.__tool_names[0]):
                    path_to_file = f"../../{real_dir_name}/{name}"
                elif self.__is_similar(real_dir_name, self.__tool_names[1]) or self.__is_similar(real_dir_name, self.__tool_names[2]) or self.__similar_name_exists(real_dir_name, self.__attachment_names):
                    path_to_file = f"../../Weapons/{real_dir_name}/{name}"
                else:
                    if self.__is_similar(real_base_name, self.__tool_names[0]):
                        path_to_file = f"../../{real_dir_name}/{name}"
                    elif self.__is_similar(real_base_name, self.__tool_names[1]):
                        path_to_file = f"../../Weapons/{real_dir_name}/{name}"
                    elif self.__is_similar(real_base_name, self.__tool_names[2]):
                        path_to_file = f"../../Weapons/{real_dir_name}/{name}"
                    else:
                        path_to_file = None
                if path_to_file != None:
                    new_path = f"{op_path}/{path_to_file}"
                    Path(dirname(new_path)).mkdir(parents=True, exist_ok=True)
                    copyfile(path, new_path)
                    self.__paths_to_remove.append(path)
                    self.__json_data[real_dir_name][real_name] = path_to_file
    #endregion
    
    #region Compress only what is needed from what's already compressed
    def __compress_needed_from_compression(self, base_path: str, json_path: str):
        ops_file = open(json_path, 'r')
        ops_data = json.load(ops_file)

        for group in ops_data:
            if not self.__string_contains(group, self.__group_names):
                raise ValueError(f"the file {json_path} is formatted incorrectly.\nGO FIX IT!!!")
        self.__create_dirs_from_json(base_path, dirname(json_path), ops_data, self.__create_op_dirs, False)
                
        self.__remove_paths_and_check()

        ops_file.close()
        remove(json_path)
    
    def __create_op_dirs(self, base_path: str, json_base_path: str, data: dict):
        for item in data:
            value = data[item]
            if not isinstance(value, str):
                self.__create_json_tools_and_dirs(self.create_dir(base_path, item), json_base_path, value)
    def __create_json_tools_and_dirs(self, base_path: str, json_base_path: str, data: dict):
        items_to_remove: list[str] = []
        for item in data:
            value = data[item]
            if isinstance(value, str):
                self.create_file(base_path, json_base_path, value)
                if not item in items_to_remove:
                    items_to_remove.append(item)
        for item in items_to_remove:
            del data[item]
        items_to_remove.clear()
        tools_json_path = f"{base_path}/tools.json"
        tools_json = open(tools_json_path, "w")

        number_of_parents: int = 2
        parent_string = ""
        for _ in range(number_of_parents):
            parent_string += "../"
        tools_json.write(json.dumps(self.__fix_json_path_values(data, parent_string), indent=4))

        tools_json.close()
    def __fix_json_path_values(self, data: dict, parent_string: str) -> dict:
        for item in data:
            value = data[item]
            if isinstance(value, str):
                data[item] = f"{parent_string}{value}"
            else:
                self.__fix_json_path_values(value, parent_string)
        return data
    #endregion
    #endregion

    #region Compress
    def __try_compress(self):
        print("Trying to compress everything")
    #endregion
    
    def __search_for_ops(self, base_path: str, tools_callback, compression_callback, check_json_paths: bool = False):
        names = listdir(base_path)
        all_tools: list[str] = []
        for name in names:
            real_path = f"{base_path}/{name}"
            if isdir(real_path):
                all_tools += tools_callback(real_path)
        self.__error_handler(all_tools, check_json_paths)
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
                if not samefile(base, self.siege_path) and not base in self.__check_remove_path:
                    self.__check_remove_path.append(base)
                    i += 1
                if len(names) <= 0 and exists(path):
                    rmdir(path)
            self.__check_remove_path.remove(path)
            i -= 1
    
    def __create_dirs_from_json(self, base_path: str, json_base_path: str, data: dict, callback, repeat_callback: bool = True):
        for item in data:
            value = data[item]
            if isinstance(value, str):
                self.create_file(base_path, json_base_path, value)
            else:
                if repeat_callback:
                    callback(self.create_dir(base_path, item), json_base_path, value, callback)
                else:
                    callback(self.create_dir(base_path, item), json_base_path, value)
    def create_file(self, base_path: str, json_base_path: str, value: dict):
        real_value_path = f"{json_base_path}/{value}"
        dist_path = f"{base_path}/{basename(value)}"
        # print(f"File: {real_value_path}\nDist: {dist_path}\n")
        copyfile(real_value_path, dist_path)

        value_path = dirname(real_value_path)
        if not value_path in self.__check_remove_path:
            if not self.__string_contains(value_path, self.__group_names):
                self.__check_remove_path.append(value_path)
            
        if not real_value_path in self.__paths_to_remove:
            if not self.__string_contains(real_value_path, self.__group_names):
                self.__paths_to_remove.append(real_value_path)
    def create_dir(self, base_path: str, item: str) -> str:
        path = f"{base_path}/{self.__similar_name_exists(base_path, item)}"
        if not exists(path):
            mkdir(path)
        return path
    
    def __error_handler(self, json_paths: list[str], check_json_paths: bool):
        for path in json_paths:
            if not exists(path):
                self.__error_string += f"The path \"{path}\" does not exist\nThis is most likely a problem with the script\nSO GO TELL AZUL!!!\n"
        if check_json_paths:
            for path in json_paths:
                json_file = open(path, "r")
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

def fetch_dir_count(path: str) -> int:
    folders: int = 0
    for _, dirnames, _ in walk(path):
        folders += len(dirnames)
    return folders
Compressionator = __Compressionator()

Compressionator.mode = Compression.COMPRESS_NEEDED
#endregion """