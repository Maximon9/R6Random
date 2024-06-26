import { img } from "../img.js";
export class WeaponInfo {
    name;
    image;
    attachments;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon {
    name;
    image;
    attachments;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
//#endregion
//# sourceMappingURL=weapon.js.map