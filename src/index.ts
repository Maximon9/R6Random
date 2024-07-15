import { GROUPS } from "./ops.js";

//#region Main
declare global {
    interface String {
        get domURL(): string;
    }
}
Object.defineProperty(String.prototype, "domURL", {
    get() {
        return `url(${this})`;
    },
});

const GROUP_HTML_BUTTONS: { [k: string]: HTMLImageElement } = {};

function main() {
    for (const key in GROUPS) {
        const group = GROUPS[key];
        // GROUP_HTML_BUTTONS[key] = group
    }
}

// async function SetAllOPS() {}
function randomize(type: string) {}
main();
//#endregion
