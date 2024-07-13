//#region Main

import { whiteBackground } from "./utils/img.js";

const ATTACKER_BUTTON = document.getElementById("attack-op")!;
const DEFENDER_BUTTON = document.getElementById("defend-op")!;
function main() {
    ATTACKER_BUTTON.addEventListener("click", onAttackerButton);
    DEFENDER_BUTTON.addEventListener("click", onDefenderButton);
}

function onAttackerButton(event: MouseEvent) {
    console.log(event);
}
function onDefenderButton(event: MouseEvent) {
    console.log(event);
}

// async function SetAllOPS() {}
function randomize(type: string) {}
main();
//#endregion
