""" from enum import Enum
from os import listdir
from os import remove
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
    ops_json_paths = ["OPS.json", "OPs.json", "Ops.json", "ops.json", "opS.json", "oPS.json"]
    tools_json_paths = ["Tools.json", "tools.json"]
    group_paths = ["Attacker", "Attackers", "Defender", "Defenders"]
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
    def __try_decompress(self):
        print("Trying to decompress")
        paths = listdir(self.siege_path)
        print(paths)
        for path in paths:
            if path in self.ops_json_paths:
                self.__decompress_compression(f"{self.siege_path}/{path}", path)
                return
        for path in paths:
            if path in self.group_paths:
                self.__search_for_ops(f"{self.siege_path}/{path}")

    def __search_for_ops(self, main_path: str):
        paths = listdir(main_path)
        for path in paths:
            real_path = f"{main_path}/{path}"
            if isdir(real_path):
                self.__search_for_tools(real_path)
    def __search_for_tools(self, main_path: str):
        paths = listdir(main_path)
        for path in paths:
            if path in self.tools_json_paths:
                print(f"Printing: {path}")
                self.__decompress_needed_compression(main_path, f"{main_path}/{path}", path)
    
    def __decompress_needed_compression(self, main_path: str, json_path: str, name: str):
        tools_file = open(json_path, 'r')
        tools_data = json.load(tools_file)
        self.__create_dirs_from_json(main_path, main_path, tools_data)
        tools_file.close()
        remove(json_path)
        
    def __create_dirs_from_json(self, main_path: str, json_path: str, data: any):
        for item in data:
            value = data[item]
            if not isinstance(value, str):
                path = f"{main_path}/{item}"
                if not exists(path):
                    mkdir(path)
                self.__create_dirs_from_json(path, json_path, value)
            else:
                real_value_path = f"{json_path}/{value}"
                dist_path = f"{main_path}/{basename(value)}"
                print(f"File: {real_value_path}\nDist: {dist_path}\n")
                copyfile(real_value_path, dist_path)

                value_path = dirname(real_value_path)
                remove(real_value_path)
                
                paths = listdir(value_path)
                if len(paths) <= 0:
                    rmdir(value_path)


    
    def __decompress_compression(path: str, name: str):
        pass
    
    def __try_compress_needed(self):
        print("Trying to compress what is needed")
    def __try_compress(self):
        print("Trying to compress everything")

Compressionator = __Compressionator()

Compressionator.mode = Compression.DECOMPRESS """