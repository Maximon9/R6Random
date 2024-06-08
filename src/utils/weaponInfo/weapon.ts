import {WeaponAttatchments, WeaponAttatchmentsInfo} from "../../types/attachment.js";

export class WeaponInfo {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttatchmentsInfo;

    constructor(name: string, image: HTMLImageElement, attachments: WeaponAttatchmentsInfo) {
        this.name = name;
        this.image = image;
        this.attachments = attachments;
    }
}
export class Weapon {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttatchments;

    constructor(name: string, image: HTMLImageElement, attachments: WeaponAttatchments) {
        this.name = name;
        this.image = image;
        this.attachments = attachments;
    }
}
