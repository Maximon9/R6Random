class OPInfo {
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
