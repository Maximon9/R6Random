const ATTACKER_BUTTON = document.getElementById("attack-op");
const DEFENDER_BUTTON = document.getElementById("defend-op");
async function main() {
    await SetAllOPS();
}

async function SetAllOPS() {
    console.log(document.plugins);
}

function randomize(type: RandomizerType) {}

function loadJSON(path: string, success: Function, error: (data: any) => any) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            } else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

main();
