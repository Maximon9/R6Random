abstract class Weapon {
    name: string;
    image: HTMLImageElement;
    attachments: WeaponAttatchments;

    constructor(name: string, image: HTMLImageElement, attachments: WeaponAttatchments) {
        this.name = name;
        this.image = image;
        this.attachments = attachments;
    }
}
