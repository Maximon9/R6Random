abstract class Attachment {
    name: string;
    image: HTMLImageElement;
    constructor(name: string, image: HTMLImageElement) {
        this.name = name;
        this.image = image;
    }
}

class SightAttachment extends Attachment {}
class BarrelAttachment extends Attachment {}
class UnderBarrelAttachment extends Attachment {}
class GripAttachment extends Attachment {}
