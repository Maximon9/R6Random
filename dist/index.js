Object.defineProperty(String.prototype, "domURL", {
    get() {
        return `url(${this})`;
    },
});
import { whiteBackground } from "./utils/img.js";
const ATTACKER_BUTTON = document.getElementById("attack-op");
const DEFENDER_BUTTON = document.getElementById("defend-op");
function main() {
    ATTACKER_BUTTON.addEventListener("click", onAttackerButton);
    DEFENDER_BUTTON.addEventListener("click", onDefenderButton);
    ATTACKER_BUTTON.addEventListener("mouseenter", onAttackerButtonEnter);
    ATTACKER_BUTTON.addEventListener("mouseleave", onAttackerButtonExit);
    DEFENDER_BUTTON.addEventListener("mouseenter", onDefenderButtonEnter);
    DEFENDER_BUTTON.addEventListener("mouseleave", onDefenderButtonExit);
}
function onAttackerButtonEnter(event) {
    ATTACKER_BUTTON.style.backgroundImage = whiteBackground.domURL;
}
function onAttackerButtonExit(event) {
    ATTACKER_BUTTON.style.backgroundImage =
        "assets/Siege-Rando-Images/GroupIcons/Attackers_Icon.svg".domURL;
}
function onDefenderButtonEnter(event) {
    DEFENDER_BUTTON.style.backgroundImage = whiteBackground.domURL;
}
function onDefenderButtonExit(event) {
    DEFENDER_BUTTON.style.backgroundImage =
        "assets/Siege-Rando-Images/GroupIcons/Defenders_Icon.svg".domURL;
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
//#endregion
//# sourceMappingURL=index.js.map