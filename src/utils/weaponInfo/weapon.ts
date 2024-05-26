abstract class Weapon {
    name: string;
    image: File;
    attachments: WeaponAttatchments;

    constructor(name: string, image: File, attachments: WeaponAttatchments) {
        this.name = name;
        this.image = image;
        this.attachments = attachments;
    }
}
