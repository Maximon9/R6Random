import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "../utils/weaponInfo/attachment.js";

export type WeaponAttatchments = {
    sight?: SightAttachment;
    barrel?: BarrelAttachment;
    underBarrel?: UnderBarrelAttachment;
    grip?: GripAttachment;
};
export type WeaponAttatchmentsInfo = {
    sights?: SightAttachment[];
    barrels?: BarrelAttachment[];
    underBarrels?: UnderBarrelAttachment[];
    grips?: GripAttachment[];
};
