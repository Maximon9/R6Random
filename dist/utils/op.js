import { Weapon } from "./weaponInfo/weapon.js";
import { url } from "./img.js";
export class OPInfo {
    name;
    image;
    icon;
    equipment;
    primaryWeapons;
    secondaryWeapons;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = [url(info["image"])];
        this.icon = [url(info["icon"])];
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
        this.image = url(info["image"]);
        this.icon = url(info["icon"]);
        this.equipment = [];
        this.primaryWeapon = new Weapon();
        this.secondaryWeapon = new Weapon();
    }
}
//# sourceMappingURL=op.js.map
//#endregion
//# sourceMappingURL=op.js.map