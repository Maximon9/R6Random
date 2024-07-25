//#region Main
import type { GroupParameters } from "../types/group.js";
import { whiteBackground } from "./img.js";
import { OPInfo } from "./op.js";

export class GroupInfo<Names extends string = string> {
    icons: string[];
    ops: OPInfo<Names>[];
    constructor(info: GroupParameters<Names> = {}) {
        this.icons = info["icons"] ?? [whiteBackground];
        this.ops = info["ops"] ?? [];
    }

    fetch_html_images(): { normalIcon?: string; hoverIcon?: string } {
        const hoverIcons: string[] = [];
        const normalIcons = this.icons.filter((icon: string) => {
            if (icon.toLowerCase().includes("hover")) {
                hoverIcons.push(icon);
                return false;
            } else {
                return true;
            }
        });

        return {
            normalIcon:
                hoverIcons.length > 0
                    ? normalIcons[Math.floor(Math.random() * normalIcons.length)]
                    : undefined,
            hoverIcon:
                hoverIcons.length > 0
                    ? hoverIcons[Math.floor(Math.random() * hoverIcons.length)]
                    : undefined,
        };
    }
}
//#endregion
