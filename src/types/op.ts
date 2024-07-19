//#region Main
import type { Equipment, EquipmentInfo } from "../utils/equipment.js";
import type { Weapon, WeaponInfo } from "../utils/weaponInfo/weapon.js";

export type OPInfoParameters<Name extends string> = {
    name?: Name;
    images?: string[];
    icons?: string[];
    equipmentNum?: number;
    equipment?: EquipmentInfo[];
    primaryWeapons?: WeaponInfo[];
    secondaryWeapons?: WeaponInfo[];
};
export type OPParameters<Name extends string> = {
    name?: Name;
    image?: string;
    icon?: string;
    equipment?: Equipment[];
    primaryWeapon?: Weapon;
    secondaryWeapon?: Weapon;
};
//#endregion
