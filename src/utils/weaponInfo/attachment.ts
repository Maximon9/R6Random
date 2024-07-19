//#region Main
import type {
    AttachmentInfoParameters,
    AttachmentParameters,
} from "../../types/attachment.js";
import { whiteBackground } from "../img.js";

export class AttachmentInfo {
    name: string;
    images: string[];
    constructor(info: AttachmentInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class SightAttachmentInfo extends AttachmentInfo {}
export class BarrelAttachmentInfo extends AttachmentInfo {}
export class UnderBarrelAttachmentInfo extends AttachmentInfo {}
export class GripAttachmentInfo extends AttachmentInfo {}

export class Attachment {
    name: string;
    image: string;
    constructor(info: AttachmentParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
    }
}
export class SightAttachment extends Attachment {}
export class BarrelAttachment extends Attachment {}
export class UnderBarrelAttachment extends Attachment {}
export class GripAttachment extends Attachment {}
//#endregion
