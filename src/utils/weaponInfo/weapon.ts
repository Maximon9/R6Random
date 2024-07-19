//#region Main
import type {
    WeaponAttackments,
    WeaponAttackmentsInfo,
    WeaponInfoParameters,
    WeaponParameters,
} from "../../types/weapon.js";
import { whiteBackground } from "../img.js";

export class WeaponInfo<Name extends string = string> {
    name: Name;
    images: string[];
    attachments: WeaponAttackmentsInfo;
    constructor(info: WeaponInfoParameters<Name> = {}) {
        this.name = info["name"] ?? ("" as Name);
        this.images = info["images"] ?? [whiteBackground];
        this.attachments = info["attachments"] ?? {};
    }
}
export class Weapon<Name extends string = string> {
    name?: Name;
    image?: string;
    attachments?: WeaponAttackments;
    constructor(info: WeaponParameters<Name> = {}) {
        let item: any = info["name"];
        if (item !== undefined) {
            this.name = item;
        }
        item = info["image"];
        if (item !== undefined) {
            this.image = item;
        }
        item = info["attachments"];
        if (item !== undefined) {
            this.attachments = item;
        }
    }
}
//#endregion
