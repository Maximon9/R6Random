//#region Main
const ATTACKER_BUTTON = document.getElementById("attack-op");
const DEFENDER_BUTTON = document.getElementById("defend-op");
function main() {
    ATTACKER_BUTTON.addEventListener("click", onAttackerButton);
    DEFENDER_BUTTON.addEventListener("click", onDefenderButton);
}
function onAttackerButton(event) {
    console.log(event);
}
function onDefenderButton(event) {
    console.log(event);
}
// async function SetAllOPS() {}
function randomize(type) { }
main();
export {};
//#endregion
//# sourceMappingURL=index.js.map