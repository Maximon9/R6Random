//#region Main
import type { GroupParameters } from "../types/group.js";
import { img } from "./img.js";

export class Group {
    icon: HTMLImageElement;

    constructor(info: GroupParameters = {}) {
        this.icon = img(info["icon"]);
    }
}
//#endregion
