import {Compression, Compressionator} from "./c_utils/compress.js";
import type {RandomizerType} from "./types/radomize.js";

// const ATTACKER_BUTTON = document.getElementById("attack-op");
// const DEFENDER_BUTTON = document.getElementById("defend-op");
function main() {
    Compressionator.workspaceFolders = ["C:/Users/aamax/Desktop/Programming/Projects/R6Random"];
    Compressionator.configs = {
        siegeNames: ["Siege-Rando-Images"],
        siegePaths: [],
        ignore: [".git", ".vscode"],
        groupNames: ["Attackers", "Defenders"],
        equipmentNames: ["Equipment"],
        weaponNames: ["PrimaryWeapons", "SecondaryWeapons"],
        attachmentNames: ["SightAttachments", "BarrelAttachments", "UnderBarrelAttatchments", "GripAttatchments"],
        imageExtensions: [".png", ".jpg", ".webp", ".svg", ".gif", ".tiff", ".tif"],
    };
    Compressionator.requestManager.request(Compression.DECOMPRESS);
}

// async function SetAllOPS() {}

function randomize(type: RandomizerType) {}

main();
