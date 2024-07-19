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
//# sourceMappingURL=equipment.js.map
//#endregion
//# sourceMappingURL=equipment.js.map