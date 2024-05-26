from enum import Enum
from os import listdir
from os.path import exists

siege_path = "./Siege-Rando-Images"
ops_path = f"../src/ops.ts"

def start_parse():
    ops = open(ops_path, "r")
    ops_data = ops.read()
    ops.close()

    main_dirs = listdir(siege_path)

    for i in range(len(main_dirs) - 1, -1, -1):
        path = main_dirs[i]
        if path != "Attacker" and path != "Attackers" and path != "Defenders" and path != "Defender":
            main_dirs.remove(path)
    for path in main_dirs:
        if path.upper().endswith("S"):
            group = path.upper()
        else:
            group = f"{path.upper()}S"

        ops_data = parse(f"{siege_path}/{path}", path, SiegeType.GROUP, group, main_dirs.index(path) == len(main_dirs) - 1, ops_data)
        
    ops = open(ops_path, "w")
    ops.write(ops_data)  
    ops.close()

class SiegeType(Enum):
    GROUP = 0
    OP = 1
    EQUIPMENT = 2
    SIGHT_ATTACHMENT = 4
    BARREL_ATTACHMENT = 5
    UNDER_BARREL_ATTACHMENT = 6
    GRIP_ATTACHMENT = 7
    PRIMARY_WEAPON = 8
    PRIMARY_WEAPON_SKIP = 9
    SECENDARY_WEAPON = 10
    SECENDARY_WEAPON_SKIP = 11

def parse(main_path: str, name: str, siege_type: SiegeType, group: str, isLastDir: bool, ops_data: str) -> str:
    dirs = listdir(main_path)
    const_string = f"const {group}: OPInfo[] = "
    match siege_type:
        case SiegeType.GROUP:
            if not const_string in ops_data:
                try:
                    search_string = "function image"
                    insert_index = ops_data.index(search_string)
                except:
                    return
                ops_data = insert_at_index(f"{const_string}[]\n\n", ops_data, insert_index)
        case SiegeType.OP:
            try:
                group_index = ops_data.index(const_string) + len(const_string)
            except:
                return ops_data
            last_index = fetch_ending_sq_bracket(ops_data, group_index)
            print(group_index, last_index)
            if not f"new OPInfo(\"{name}\"" in ops_data:
                if group_index + 1 == last_index:
                    ops_data = insert_at_index(f"\n\tnew OPInfo(\"{name}\", image(\"\"), image(\"\"), [], [], [])", ops_data, last_index)
                elif isLastDir:
                    ops_data = insert_at_index(f",\n\tnew OPInfo(\"{name}\", image(\"\"), image(\"\"), [], [], [])\n", ops_data, last_index)
                else:
                    ops_data = insert_at_index(f",\n\tnew OPInfo(\"{name}\", image(\"\"), image(\"\"), [], [], [])", ops_data, last_index)
        case SiegeType.EQUIPMENT:
            pass
        case SiegeType.PRIMARY_WEAPON:
            pass
        case SiegeType.SECENDARY_WEAPON:
            pass
        case SiegeType.SIGHT_ATTACHMENT:
            pass
        case SiegeType.BARREL_ATTACHMENT:
            pass
        case SiegeType.UNDER_BARREL_ATTACHMENT:
            pass
        case SiegeType.GRIP_ATTACHMENT:
            pass
    for path in dirs:
        if path.endswith(".png"):
            pass
        else:
            match siege_type:
                case SiegeType.GROUP:
                    new_siege_type = SiegeType.OP
                case SiegeType.OP:
                    match path:
                        case "Equipment":
                            new_siege_type = SiegeType.EQUIPMENT
                        case "PrimaryWeapons":
                            new_siege_type = SiegeType.PRIMARY_WEAPON_SKIP
                        case "Secondary Weapons":
                            new_siege_type = SiegeType.SECENDARY_WEAPON_SKIP
                case SiegeType.PRIMARY_WEAPON_SKIP:
                    new_siege_type = SiegeType.PRIMARY_WEAPON
                case SiegeType.PRIMARY_WEAPON:
                    match path:
                        case "SightAttatchments":
                            new_siege_type = SiegeType.SIGHT_ATTACHMENT
                        case "BarrelAttachments":
                            new_siege_type = SiegeType.BARREL_ATTACHMENT
                        case "UnderBarrelAttachments":
                            new_siege_type = SiegeType.UNDER_BARREL_ATTACHMENT
                        case "GripAttachments":
                            new_siege_type = SiegeType.GRIP_ATTACHMENT
                case SiegeType.SECENDARY_WEAPON_SKIP:
                    new_siege_type = SiegeType.SECENDARY_WEAPON
                case SiegeType.SECENDARY_WEAPON:
                    match path:
                        case "SightAttatchments":
                            new_siege_type = SiegeType.SIGHT_ATTACHMENT
                        case "BarrelAttachments":
                            new_siege_type = SiegeType.BARREL_ATTACHMENT
                        case "UnderBarrelAttachments":
                            new_siege_type = SiegeType.UNDER_BARREL_ATTACHMENT
                        case "GripAttachments":
                            new_siege_type = SiegeType.GRIP_ATTACHMENT
            ops_data = parse(f"{main_path}/{path}", path, new_siege_type, group, dirs.index(path) == len(dirs) - 1, ops_data)
    return ops_data

def depend_from_json():
    pass
def append_to_json():
    pass

def fetch_ending_sq_bracket(string: str, index: int):
    count = 0
    for i in range(index + 1, len(string)):
        char = string[i]
        if char == "[":
            count -= 1
        elif char == "]":
            count += 1
        if count == 1:
            return i;
    return 0
def insert_at_index(insert: str, string: str, at: int) -> str:
    return f"{string[:at]}{insert}{string[at:]}"
def split_at_indices(string: str, indices: list[int]) -> list[str]:
    start = 0
    output = []

    for index in indices:
        if index < 0 or index >= len(string):
            indices.remove(index)

    for index in indices:
        output.append(string[start:index])
        start = index
    output.append(string[index:])

    return output

start_parse()