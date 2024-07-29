//#region Main
import type {
    BarrelAttachment,
    BarrelAttachmentInfo,
    GripAttachment,
    GripAttachmentInfo,
    SightAttachment,
    SightAttachmentInfo,
    UnderBarrelAttachment,
    UnderBarrelAttachmentInfo,
} from "../utils/Siege/weaponInfo/attachment.js";

export type WeaponAttackmentsInfo = {
    sights?: SightAttachmentInfo[];
    barrels?: BarrelAttachmentInfo[];
    grips?: GripAttachmentInfo[];
    underBarrels?: UnderBarrelAttachmentInfo[];
};
export type WeaponAttackments = {
    sight?: SightAttachment;
    barrel?: BarrelAttachment;
    grip?: GripAttachment;
    underBarrel?: UnderBarrelAttachment;
};

export type WeaponInfoParameters<Name extends string> = {
    name?: Name;
    images?: string[];
    attachments?: WeaponAttackmentsInfo;
};
export type WeaponParameters<Name extends string> = {
    name?: Name;
    image?: string;
    attachments?: WeaponAttackments;
};
//#endregion
