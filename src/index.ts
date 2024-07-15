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

function main() {
    for (const key in GROUPS) {
        const group = GROUPS[key];
    }
}

// async function SetAllOPS() {}
function randomize(type: string) {}
main();
//#endregion
