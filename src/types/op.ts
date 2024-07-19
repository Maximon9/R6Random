//#region Main
import type { Equipment, EquipmentInfo } from "../utils/equipment.js";
import type { Weapon, WeaponInfo } from "../utils/weaponInfo/weapon.js";

export type OPInfoParameters = {
    name?: string;
    images?: string[];
    icons?: string[];
    equipmentNum?: number;
    equipment?: EquipmentInfo[];
    primaryWeapons?: WeaponInfo[];
    secondaryWeapons?: WeaponInfo[];
};
export type OPParameters = {
    name?: string;
    image?: string;
    icon?: string;
    equipment?: Equipment[];
    primaryWeapon?: Weapon;
    secondaryWeapon?: Weapon;
};
//#endregion
