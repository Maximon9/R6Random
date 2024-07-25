//#region Main
import type { AttachmentInfoParameters, AttachmentParameters } from "../../types/attachment.js";
import { whiteBackground } from "../img.js";

export class AttachmentInfo<Name extends string = string> {
    name: Name;
    images: string[];
    constructor(info: AttachmentInfoParameters<Name> = {}) {
        this.name = info["name"] ?? ("" as Name);
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class SightAttachmentInfo<Name extends string = string> extends AttachmentInfo<Name> {}
export class BarrelAttachmentInfo<Name extends string = string> extends AttachmentInfo<Name> {}
export class UnderBarrelAttachmentInfo<Name extends string = string> extends AttachmentInfo<Name> {}
export class GripAttachmentInfo<Name extends string = string> extends AttachmentInfo<Name> {}

export class Attachment<Name extends string = string> {
    name: Name;
    image: string;
    constructor(info: AttachmentParameters<Name> = {}) {
        this.name = info["name"] ?? ("" as Name);
        this.image = info["image"] ?? whiteBackground;
    }
}
export class SightAttachment<Name extends string = string> extends Attachment<Name> {}
export class BarrelAttachment<Name extends string = string> extends Attachment<Name> {}
export class UnderBarrelAttachment<Name extends string = string> extends Attachment<Name> {}
export class GripAttachment<Name extends string = string> extends Attachment<Name> {}
//#endregion
