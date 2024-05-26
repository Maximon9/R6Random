abstract class Attachment {
    name: string;
    type: AttachmentType;
    image: HTMLImageElement;
    constructor(name: string, type: AttachmentType, image: HTMLImageElement) {
        this.name = name;
        this.type = type;
        this.image = image;
    }
}
