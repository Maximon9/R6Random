//#region Main
import type { OPInfoParameters, OPParameters } from "../types/op.js";
import type { Equipment } from "./equipment.js";
import type { WeaponInfo } from "./weaponInfo/weapon.js";
import { Weapon } from "./weaponInfo/weapon.js";
import { url } from "./img.js";

export class OPInfo {
    name: string;
    image: HTMLImageElement[];
    icon: HTMLImageElement[];
    equipment: Equipment[];
    primaryWeapons: WeaponInfo[];
    secondaryWeapons: WeaponInfo[];
    constructor(info: OPInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.image = [url(info["image"])];
        this.icon = [url(info["icon"])];
        this.equipment = info["equipment"] ?? [];
        this.primaryWeapons = info["primaryWeapons"] ?? [];
        this.secondaryWeapons = info["secondaryWeapons"] ?? [];
    }
}
export class OP {
    name: string;
    image: HTMLImageElement;
    icon: HTMLImageElement;
    equipment: Equipment[];
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;
    constructor(info: OPParameters) {
        this.name = info["name"] ?? "";
        this.image = url(info["image"]);
        this.icon = url(info["icon"]);
        this.equipment = [];
        this.primaryWeapon = new Weapon();
        this.secondaryWeapon = new Weapon();
    }
}
//# sourceMappingURL=op.js.map
//#endregion
