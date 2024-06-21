//#region Main
import type {Equipment} from "../utils/equipment.js";
import type {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "../utils/weaponInfo/attachment.js";
import type {Weapon, WeaponInfo} from "../utils/weaponInfo/weapon.js";

export type WeaponAttackmentsInfo = {
    sights?: SightAttachment[];
    barrels?: BarrelAttachment[];
    grips?: GripAttachment[];
    underBarrels?: UnderBarrelAttachment[];
};
export type WeaponAttackments = {
    sight?: SightAttachment;
    barrel?: BarrelAttachment;
    grip?: GripAttachment;
    underBarrel?: UnderBarrelAttachment;
};

export type EquipmentParameters = {name?: string; image?: string};
export type AttachmentParameters = {name?: string; image?: string};
export type WeaponInfoParameters = {name?: string; image?: string; attachments?: WeaponAttackmentsInfo};
export type WeaponParameters = {name?: string; image?: string; attachments?: WeaponAttackments};
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
export type GroupParameters = {
    name?: string;
    icon?: string;
};
//#region
