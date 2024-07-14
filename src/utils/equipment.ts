//#region Main
import type {
    EquipmentInfoParameters,
    EquipmentParameters,
} from "../types/equipment.js";
import { whiteBackground } from "./img.js";

export class EquipmentInfo {
    name: string;
    images: string[];

    constructor(info: EquipmentInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class Equipment {
    name: string;
    image: string;

    constructor(info: EquipmentParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
    }
}
//# sourceMappingURL=equipment.js.map
//#endregion
