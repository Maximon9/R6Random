abstract class Weapon {}
class PrimaryWeapon extends Weapon {
    name: String;
    image: File;

    constructor(name: String, image: File) {
        this.name = name;
        this.image = image;
    }
}
class SecondaryWeapon extends Weapon {
    name: String;
    image: File;

    constructor(name: String, image: File) {
        this.name = name;
        this.image = image;
    }
}
