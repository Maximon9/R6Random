import { Weapon } from "./weaponInfo/weapon.js";
import { whiteBackground } from "./img.js";
export class OPInfo {
    name;
    images;
    icons;
    equipmentNum;
    equipment;
    primaryWeapons;
    secondaryWeapons;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.images = info["images"] ?? [whiteBackground];
        this.icons = info["icons"] ?? [whiteBackground];
        this.equipmentNum = info["equipmentNum"] ?? 1;
        this.equipment = info["equipment"] ?? [];
        this.primaryWeapons = info["primaryWeapons"] ?? [];
        this.secondaryWeapons = info["secondaryWeapons"] ?? [];
    }
}
export class OP {
    name;
    image;
    icon;
    equipment;
    primaryWeapon;
    secondaryWeapon;
    constructor(info) {
        this.name = info["name"] ?? "";
        this.image = info["image"] ?? whiteBackground;
        this.icon = info["icon"] ?? whiteBackground;
        this.equipment = info["equipment"] ?? [];
        this.primaryWeapon = info["primaryWeapon"] ?? new Weapon();
        this.secondaryWeapon = info["secondaryWeapon"] ?? new Weapon();
    }
}
//# sourceMappingURL=op.js.map
//#endregion
//# sourceMappingURL=op.js.map