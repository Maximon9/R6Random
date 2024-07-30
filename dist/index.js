//#region Main
import { GROUPS } from "./ops.js";
import { giveElementAnimation, runAnimation } from "./utils/html.js";
import { whiteBackground } from "./utils/img.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import IDKButImHardRN from "./utils/animation/time.js";
import InputSystem from "./input.js";
import Animator, { AnimationCurves } from "./utils/animation/animation.js";
import { lerp } from "./utils/math.js";
InputSystem.start();
function main() {
    document.body.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        event.stopImmediatePropagation();
        return false;
    };
    createGroupButtons();
    createOptions(3, false);
}
function createGroupButtons() {
    let switcher;
    if (Options.isTouchScreen) {
        switcher = new IDKButImHardRN(changeLink, 300);
    }
    else {
        switcher = new IDKButImHardRN(changeLink, 0);
    }
    const groupModal = document.createElement("section");
    groupModal.className = "group-modal";
    const groupModalTable = document.createElement("table");
    const groupModalTBody = document.createElement("tbody");
    const groupModalTitleRow = document.createElement("tr");
    const groupModalRow = document.createElement("tr");
    const grouKeys = Object.keys(GROUPS);
    const htmlGroups = [];
    for (let i = 0; i < grouKeys.length; i++) {
        const key = grouKeys[i];
        const group = GROUPS[key];
        const htmlGroup = document.createElement("td");
        htmlGroup.style.color = "white";
        htmlGroup.style.fontSize = "2vmax";
        htmlGroup.style.textAlign = "center";
        htmlGroup.style.cursor = "pointer";
        htmlGroup.style.scale = "90%";
        htmlGroup.innerHTML += key;
        const htmlGroupDiv = document.createElement("div");
        htmlGroupDiv.style.marginLeft = "auto";
        htmlGroupDiv.style.marginRight = "auto";
        htmlGroupDiv.style.width = "50%";
        htmlGroupDiv.style.height = "50%";
        const htmlGroupImg = document.createElement("img");
        htmlGroupImg.draggable = false;
        htmlGroupImg.className = "group-button";
        const htmlImages = group.fetch_html_images();
        const animationKey = `-button-hover`;
        giveElementAnimation(animationKey, htmlGroup, new Animator({
            time: 0.15,
            animate: (t, start) => {
                if (start === "start") {
                    htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
                }
                else {
                    htmlGroupImg.src = htmlImages.normalIcon ?? whiteBackground;
                }
                const value = lerp(t, 90, 100);
                htmlGroup.style.scale = `${value}%`;
            },
            animationCurve: AnimationCurves.easeInOut,
        }));
        htmlGroups.push([animationKey, key, htmlGroup]);
        const first_icon = htmlImages.normalIcon ?? htmlImages.hoverIcon;
        if (first_icon != undefined) {
            htmlGroupImg.src = first_icon;
        }
        htmlGroupImg.alt = key + " Icon";
        htmlGroupDiv.appendChild(htmlGroupImg);
        htmlGroup.appendChild(htmlGroupDiv);
        groupModalRow.appendChild(htmlGroup);
    }
    for (let i = 0; i < htmlGroups.length; i++) {
        const [animationKey, key, htmlGroup] = htmlGroups[i];
        htmlGroup.addEventListener("click", () => {
            groupButtonClicked(key);
            runAnimation(animationKey);
            for (let i = 0; i < htmlGroups.length; i++) {
                const [animationKey1, key1, _] = htmlGroups[i];
                if (key1 !== key) {
                    runAnimation(animationKey1, "end");
                }
            }
            switcher.run("op.html");
        });
    }
    if (htmlGroups.length > 0) {
        const groupModalTitleData = document.createElement("td");
        groupModalTitleData.colSpan = htmlGroups.length;
        groupModalTitleData.innerHTML = "Roll Here";
        groupModalTitleData.style.fontSize = "4vmax";
        groupModalTitleRow.appendChild(groupModalTitleData);
        groupModalTBody.appendChild(groupModalTitleRow);
    }
    groupModalTBody.appendChild(groupModalRow);
    groupModalTable.appendChild(groupModalTBody);
    groupModal.appendChild(groupModalTable);
    document.body.insertBefore(groupModal, document.body.childNodes[2]);
}
function groupButtonClicked(key) {
    sessionStorage.setItem("group", key);
    sessionStorage.setItem("roll", "1");
}
async function changeLink(link) {
    window.location = link;
}
main();
//#endregion
//# sourceMappingURL=index.js.map