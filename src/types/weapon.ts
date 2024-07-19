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
} from "../utils/weaponInfo/attachment.js";

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
