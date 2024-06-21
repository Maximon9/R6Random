import type {
    WeaponAttackmentsInfo,
    WeaponAttackments,
    WeaponInfoParameters,
    WeaponParameters,
} from "../../types/parameters.js";
import {img} from "../img.js";

export class WeaponInfo {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttackmentsInfo;
    constructor(info: WeaponInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttackments;
    constructor(info: WeaponParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
//# sourceMappingURL=weapon.js.map
