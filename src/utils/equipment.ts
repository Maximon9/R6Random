//#region Main
import type { EquipmentParameters } from "../types/equipment.js";
import { url } from "./img.js";

export class Equipment {
    name: string;
    image: HTMLImageElement;

    constructor(info: EquipmentParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = url(info["image"]);
    }
}
//# sourceMappingURL=equipment.js.map
//#endregion
