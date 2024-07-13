//#region Main
import type { Equipment } from "../utils/equipment.js";
import type { Weapon, WeaponInfo } from "../utils/weaponInfo/weapon.js";

export type OPInfoParameters = {
    name?: string;
    image?: string;
    icon?: string;
    equipment?: Equipment[];
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
