//#region Main
import type {
    EquipmentInfoParameters,
    EquipmentParameters,
} from "../types/equipment.js";
import { whiteBackground } from "./img.js";

export class EquipmentInfo<Name extends string = string> {
    name: Name;
    images: string[];

    constructor(info: EquipmentInfoParameters<Name> = {}) {
        this.name = info["name"] ?? ("" as Name);
        this.images = info["images"] ?? [whiteBackground];
    }
}
export class Equipment<Name extends string = string> {
    name?: Name;
    image?: string;

    constructor(info: EquipmentParameters<Name> = {}) {
        let item: any = info["name"];
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
