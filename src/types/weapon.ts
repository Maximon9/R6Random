//#region Main
import type {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "../utils/weaponInfo/attachment.js";

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

export type WeaponInfoParameters = {
    name?: string;
    images?: string[];
    attachments?: WeaponAttackmentsInfo;
};
export type WeaponParameters = {
    name?: string;
    image?: string;
    attachments?: WeaponAttackments;
};
//#endregion
