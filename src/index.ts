const ALL_OPS: OPInfo[] = [];
const ATTACKER_BUTTON = document.getElementById("attack-op");
const DEFENDER_BUTTON = document.getElementById("defend-op");
async function main() {
    await SetAllOPS();
}

async function SetAllOPS() {
    console.log(document.plugins);
}

function randomize(type: RandomizerType) {}
main();
