//#region Main
import type { AttachmentParameters } from "../../types/attachment.js";
import { img } from "../img.js";

export class Attachment {
    name: string;
    image: HTMLImageElement;
    constructor(info: AttachmentParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
    }
}
export class SightAttachment extends Attachment {}
export class BarrelAttachment extends Attachment {}
export class UnderBarrelAttachment extends Attachment {}
export class GripAttachment extends Attachment {}
//#endregion
