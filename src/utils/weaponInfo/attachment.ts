export abstract class Attachment {
    name: string;
    image: HTMLImageElement;
    constructor(name: string, image: HTMLImageElement) {
        this.name = name;
        this.image = image;
    }
}

export class SightAttachment extends Attachment {}
export class BarrelAttachment extends Attachment {}
export class UnderBarrelAttachment extends Attachment {}
export class GripAttachment extends Attachment {}
