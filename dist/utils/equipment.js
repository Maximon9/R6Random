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
//#endregion
//# sourceMappingURL=equipment.js.map