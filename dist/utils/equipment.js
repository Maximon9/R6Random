import { whiteBackground } from "./img.js";
export class EquipmentInfo {
    name;
    images;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class Equipment {
    name;
    image;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
    }
}
//# sourceMappingURL=equipment.js.map
//#endregion
//# sourceMappingURL=equipment.js.map