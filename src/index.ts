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

function main() {}

// async function SetAllOPS() {}
function randomize(type: string) {}
main();
//#endregion
