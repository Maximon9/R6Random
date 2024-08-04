import { whiteBackground } from "../../img.js";
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
        let item = info["name"];
        if (item !== undefined) {
            this.name = item;
        }
        item = info["image"];
        if (item !== undefined) {
            this.image = item;
        }
        item = info["attachments"];
        if (item !== undefined) {
            this.attachments = item;
        }
    }
}
//#endregion
//# sourceMappingURL=weapon.js.map