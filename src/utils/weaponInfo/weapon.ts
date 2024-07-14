//#region Main
import type {
    WeaponAttackments,
    WeaponAttackmentsInfo,
    WeaponInfoParameters,
    WeaponParameters,
} from "../../types/weapon.js";
import { url } from "../img.js";

export class WeaponInfo {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttackmentsInfo;
    constructor(info: WeaponInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = url(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttackments;
    constructor(info: WeaponParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = url(info["image"]);
        this.attachments = info["attachments"] ?? {};
    }
}
//#endregion
