import { whiteBackground } from "../../img.js";
export class AttachmentInfo {
    name;
    images;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class SightAttachmentInfo extends AttachmentInfo {
}
export class BarrelAttachmentInfo extends AttachmentInfo {
}
export class UnderBarrelAttachmentInfo extends AttachmentInfo {
}
export class GripAttachmentInfo extends AttachmentInfo {
}
export class Attachment {
    name;
    image;
    constructor(info = {}) {
        let item = info["name"];
        if (item !== undefined) {
            this.name = item;
        }
        item = info["image"];
        if (item !== undefined) {
            this.image = item;
        }
    }
}
export class SightAttachment extends Attachment {
}
export class BarrelAttachment extends Attachment {
}
export class UnderBarrelAttachment extends Attachment {
}
export class GripAttachment extends Attachment {
}
//#endregion
//# sourceMappingURL=attachment.js.map