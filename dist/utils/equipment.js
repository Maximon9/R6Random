import { img } from "./img.js";
export class Equipment {
    name;
    image;
    constructor(info = {}) {
        this.name = info["name"] ?? "";
        this.image = img(info["image"]);
    }
}
//# sourceMappingURL=equipment.js.map
//# sourceMappingURL=equipment.js.map