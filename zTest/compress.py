""" #region Main
from enum import Enum
from os import listdir
from os import remove
from os.path import samefile
from os.path import isdir
from os.path import exists
from os.path import basename
from os.path import dirname
from os import getcwd
from os import mkdir
from os import rmdir
from shutil import copyfile
import json

class Compression(Enum):
    DECOMPRESS = 0
    COMPRESS_NEEDED = 1
    COMPRESS = 2


class __Compressionator:
    __json_data = ""
    __ops_json_paths = ["ops.json"]
    __tools_json_paths = ["tools.json"]
    __group_paths = ["Attackers", "Defenders"]
    __paths_to_remove: list[str] = []
    __check_remove_path: list[str] = []
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
            if string.lower() in check.lower():
                return True
        return False

    def __is_similar(self, string1: str, string2: str) -> bool:
        if string1.lower().replace(" ", "") in string2.lower().replace(" ", "") or string2.lower().replace(" ", "") in string1.lower().replace(" ", ""):
            return True;
        return False
    
    def __similar_path_exists(self, main_path: str, name_to_check: str):
        names = listdir(main_path)
        for name in names:
            if self.__is_similar(name_to_check, name):
                return name
        return name_to_check
    
    #region Change Compression
    #region Decompressing
    def __try_decompress(self):
        print("Trying to decompress")
        names = listdir(self.siege_path)
        for name in names:
            if self.__string_contains(name, self.__ops_json_paths):
                self.__decompress_compression(self.siege_path, f"{self.siege_path}/{name}")
        for name in names:
            if self.__string_contains(name, self.__group_paths):
                self.__search_for_ops(f"{self.siege_path}/{name}")

    #region Decompress needed compression
    def __decompress_needed_compression(self, main_path: str, json_path: str):
        tools_file = open(json_path, 'r')
        tools_data = json.load(tools_file)

        self.__create_dirs_from_json(main_path, main_path, tools_data)
        self.__remove_paths_and_check()
        
        tools_file.close()
        remove(json_path)
    #endregion

    #region Decompress full compression
    def __decompress_compression(self, main_path: str, json_path: str):
        ops_file = open(json_path, 'r')
        ops_data = json.load(ops_file)

        self.__create_dirs_from_json(main_path, main_path, ops_data)
        self.__remove_paths_and_check()

        ops_file.close()
        remove(json_path)
    #endregion
    #endregion

    #region Compress Needed
    def __try_compress_needed(self):
        print("Trying to compress what is needed")
        names = listdir(self.siege_path)
        for name in names:
            if self.__string_contains(name, self.__ops_json_paths):
                self.compress_needed_from_compression(self.siege_path, f"{self.siege_path}/{name}")
        for name in names:
            if self.__string_contains(name, self.__group_paths):
                self.__search_for_ops(f"{self.siege_path}/{name}", self.compress_needed_from_compression)
                self.__search_for_ops(f"{self.siege_path}/{name}", self.compress_needed_from_decompression, self.__search_for_tools)
    
    #region Compress only what is needed from what's already decompressed
    def compress_needed_from_decompression(self, main_path: str, json_path: str):
        pass
    #endregion
    
    #region Compress only what is needed from what's already compressed
    def compress_needed_from_compression(self, main_path: str, json_path: str):
        pass
    #endregion
    #endregion

    #region Compress
    def __try_compress(self):
        print("Trying to compress everything")
    #endregion
    
    def __search_for_tools_json(self, main_path: str, compress_callback: function = __decompress_needed_compression):
        names = listdir(main_path)
        for name in names:
            if self.__string_contains(name, self.__tools_json_paths):
                compress_callback(main_path, f"{main_path}/{name}")
    def __search_for_tools(self, main_path: str, compress_callback: function = __decompress_needed_compression):
        names = listdir(main_path)
        for name in names:
            if self.__string_contains(name, self.__tools_json_paths):
                compress_callback(main_path, f"{main_path}/{name}")
    
    def __search_for_ops(self, main_path: str, compress_callback: function = __decompress_needed_compression, search_tools_callback: function = __search_for_tools_json):
        names = listdir(main_path)
        for name in names:
            real_path = f"{main_path}/{name}"
            if isdir(real_path):
                search_tools_callback(real_path, compress_callback)
    
    def __remove_paths_and_check(self):
        for i in range(len(self.__paths_to_remove) - 1, -1, -1):
            path = self.__paths_to_remove[i]
            if exists(path):
                remove(path)
            self.__paths_to_remove.remove(path)
        i = len(self.__check_remove_path) - 1
        while i >= 0:
            path = self.__check_remove_path[i]
            names = listdir(path)
            base = dirname(path)
            if not samefile(base, self.siege_path) and not base in self.__check_remove_path:
                self.__check_remove_path.append(base)
                i += 1
            if len(names) <= 0 and exists(path):
                rmdir(path)
            self.__check_remove_path.remove(path)
            i -= 1
    def __create_dirs_from_json(self, main_path: str, json_path: str, data: any):
        for item in data:
            value = data[item]
            if isinstance(value, str):
                real_value_path = f"{json_path}/{value}"
                dist_path = f"{main_path}/{basename(value)}"
                # print(f"File: {real_value_path}\nDist: {dist_path}\n")
                copyfile(real_value_path, dist_path)

                value_path = dirname(real_value_path)
                if not value_path in self.__check_remove_path:
                    self.__check_remove_path.append(value_path)
                    
                if not real_value_path in self.__paths_to_remove:
                    self.__paths_to_remove.append(real_value_path)
            else:
                path = f"{main_path}/{self.__similar_path_exists(main_path, item) }"
                if not exists(path):
                    mkdir(path)
                self.__create_dirs_from_json(path, json_path, value)
    #endregion

Compressionator = __Compressionator()

Compressionator.mode = Compression.DECOMPRESS
#endregion """