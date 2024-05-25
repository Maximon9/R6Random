class OPInfo {
    equipment: Equipment[];
    primaryWeapons: Weapon[];
    secondaryWeapons: Weapon[];

    constructor(equipment: Equipment[], primaryWeapons: Weapon[], secondaryWeapons: Weapon[]) {
        this.equipment = equipment;
        this.primaryWeapons = primaryWeapons;
        this.secondaryWeapons = secondaryWeapons;
    }
}
