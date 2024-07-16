//#region Main
import type { OPInfoParameters, OPParameters } from "../types/op.js";
import type { Equipment, EquipmentInfo } from "./equipment.js";
import type { WeaponInfo } from "./weaponInfo/weapon.js";
import { Weapon } from "./weaponInfo/weapon.js";
import { whiteBackground } from "./img.js";

export class OPInfo {
    name: string;
    images: string[];
    icons: string[];
    equipment: EquipmentInfo[];
    primaryWeapons: WeaponInfo[];
    secondaryWeapons: WeaponInfo[];

    constructor(info: OPInfoParameters = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
        this.icons = info["icons"] ?? [whiteBackground];
        this.equipment = info["equipment"] ?? [];
        this.primaryWeapons = info["primaryWeapons"] ?? [];
        this.secondaryWeapons = info["secondaryWeapons"] ?? [];
    }
}
export class OP {
    name: string;
    image: string;
    icon: string;
    equipment: Equipment[];
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;
    constructor(info: OPParameters) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
        this.icon = info["icon"] ?? whiteBackground;
        this.equipment = [];
        this.primaryWeapon = new Weapon();
        this.secondaryWeapon = new Weapon();
    }
}
//# sourceMappingURL=op.js.map
//#endregion
