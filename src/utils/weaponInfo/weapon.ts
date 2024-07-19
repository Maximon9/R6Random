//#region Main
import type {
    WeaponAttackments,
    WeaponAttackmentsInfo,
    WeaponInfoParameters,
    WeaponParameters,
} from "../../types/weapon.js";
import { whiteBackground } from "../img.js";

export class WeaponInfo {
    name: string;
    images: string[];
    attachments: WeaponAttackmentsInfo;
    constructor(info: WeaponInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon {
    name: string;
    image: string;
    attachments: WeaponAttackments;
    constructor(info: WeaponParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
        this.attachments = info["attachments"] ?? {};
    }
}
//#endregion
