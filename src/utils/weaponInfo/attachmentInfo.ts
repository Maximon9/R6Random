abstract class Attachment {
    name: string;
    type: AttachmentType;
    image: File;
    constructor(name: string, type: AttachmentType, image: File) {
        this.name = name;
        this.type = type;
        this.image = image;
    }
}
