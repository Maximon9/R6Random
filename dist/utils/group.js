import { whiteBackground } from "./img.js";
export class GroupInfo {
    icons;
    ops;
    constructor(info = {}) {
        this.icons = info["icons"] ?? [whiteBackground];
        this.ops = info["ops"] ?? [];
    }
    fetch_html_images() {
        const hoverIcons = [];
        const normalIcons = this.icons.filter((icon) => {
            if (icon.toLowerCase().includes("hover")) {
                hoverIcons.push(icon);
                return false;
            }
            else {
                return true;
            }
        });
        return {
            normalIcon: hoverIcons.length > 0
                ? normalIcons[Math.floor(Math.random() * normalIcons.length)]
                : undefined,
            hoverIcon: hoverIcons.length > 0
                ? hoverIcons[Math.floor(Math.random() * hoverIcons.length)]
                : undefined,
        };
    }
}
//#endregion
//# sourceMappingURL=group.js.map