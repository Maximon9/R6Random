import { img } from "../img.js";
export class Attachment {
    name;
    image;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
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