import {Equipment} from "./equipment.js";
import {Weapon, WeaponInfo} from "./weaponInfo/weapon.js";

export class OPInfo {
    name: string;
    image: HTMLImageElement;
    icon: HTMLImageElement;
    equipment: Equipment[];
    primaryWeapons: WeaponInfo[];
    secondaryWeapons: WeaponInfo[];

    constructor(
        name: string,
        image: HTMLImageElement,
        icon: HTMLImageElement,
        equipment: Equipment[],
        primaryWeapons: WeaponInfo[],
        secondaryWeapons: WeaponInfo[]
    ) {
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.equipment = equipment;
        this.primaryWeapons = primaryWeapons;
        this.secondaryWeapons = secondaryWeapons;
    }
}

export class OP {
    equipment: Equipment;
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;

    constructor(equipment: Equipment, primaryWeapon: Weapon, secondaryWeapon: Weapon) {
        this.equipment = equipment;
        this.primaryWeapon = primaryWeapon;
        this.secondaryWeapon = secondaryWeapon;
    }
}
