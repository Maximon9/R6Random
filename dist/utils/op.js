export class OPInfo {
    name;
    image;
    icon;
    equipment;
    primaryWeapons;
    secondaryWeapons;
    constructor(name, image, icon, equipment, primaryWeapons, secondaryWeapons) {
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.equipment = equipment;
        this.primaryWeapons = primaryWeapons;
        this.secondaryWeapons = secondaryWeapons;
    }
}
export class OP {
    equipment;
    primaryWeapon;
    secondaryWeapon;
    constructor(equipment, primaryWeapon, secondaryWeapon) {
        this.equipment = equipment;
        this.primaryWeapon = primaryWeapon;
        this.secondaryWeapon = secondaryWeapon;
    }
}
//# sourceMappingURL=op.js.map