//#region Main
import type { GroupParameters } from "../types/group.js";
import { url } from "./img.js";

export class Group {
    icon: HTMLImageElement;

    constructor(info: GroupParameters = {}) {
        this.icon = url(info["icon"]);
    }
}
//#endregion
