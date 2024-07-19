import { whiteBackground } from "../img.js";
export class WeaponInfo {
    name;
    images;
    attachments;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon {
    name;
    image;
    attachments;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
        this.attachments = info["attachments"] ?? {};
    }
}
//#endregion
//# sourceMappingURL=weapon.js.map