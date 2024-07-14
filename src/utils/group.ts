//#region Main
import type { GroupParameters } from "../types/group.js";
import { whiteBackground } from "./img.js";

export class GroupInfo {
    icons: string[];

    constructor(info: GroupParameters = {}) {
        this.icons = info["icons"] ?? [whiteBackground];
    }
}
//#endregion
