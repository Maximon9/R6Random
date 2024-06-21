import type {EquipmentParameters} from "../types/parameters.js";
import {img, whiteBackground} from "./img.js";

export class Equipment {
    name: string;
    image: HTMLImageElement;

    constructor(info: EquipmentParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
    }
}
//# sourceMappingURL=equipment.js.map
