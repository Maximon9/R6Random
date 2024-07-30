//#region Main
import { GROUPS } from "./ops.js";
import { giveElementAnimation, runAnimation } from "./utils/html.js";
import { whiteBackground } from "./utils/img.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import IDKButImHardRN from "./utils/animation/time.js";
import InputSystem from "./input.js";
import Animator, { AnimationCurves } from "./utils/animation/animation.js";
import { lerp } from "./utils/math.js";
import { StartType } from "./types/animation.js";

InputSystem.start();

function main() {
    document.body.oncontextmenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        event.stopImmediatePropagation();
        return false;
    };
    createGroupButtons();
    createOptions(3, false);
}
function createGroupButtons() {
    let switcher: IDKButImHardRN;
    if (Options.isTouchScreen) {
        switcher = new IDKButImHardRN(changeLink, 700);
    } else {
        switcher = new IDKButImHardRN(changeLink, 0);
    }
    const groupModal = document.createElement("section");
    groupModal.className = "group-modal";
    const groupModalTable = document.createElement("table");
    const groupModalTBody = document.createElement("tbody");
    const groupModalTitleRow = document.createElement("tr");
    const groupModalRow = document.createElement("tr");
    const grouKeys = Object.keys(GROUPS) as (keyof typeof GROUPS)[];
    const htmlGroups: [
        string,
        string,
        HTMLTableCellElement,
        HTMLImageElement,
        {
            normalIcon?: string;
            hoverIcon?: string;
        }
    ][] = [];
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
        const animationKey = `${key}-button-hover`;
        const animator = new Animator({
            time: 0.15,
            animate: (t: number, start: StartType) => {
                const value = lerp(t, 90, 100);
                htmlGroup.style.scale = `${value}%`;
            },
            animationCurve: AnimationCurves.easeInOut,
        });
        giveElementAnimation(animationKey, htmlGroup, animator);
        if (!Options.isTouchScreen) {
            htmlGroup.addEventListener("mouseenter", () => {
                animator.setArgs(false);
                htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
                runAnimation(animationKey, "start");
            });
            htmlGroup.addEventListener("mouseleave", () => {
                animator.setArgs(false);
                htmlGroupImg.src = htmlImages.normalIcon ?? whiteBackground;
                runAnimation(animationKey, "end");
            });
        }
        htmlGroups.push([animationKey, key, htmlGroup, htmlGroupImg, htmlImages]);

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
        const [animationKey, key, htmlGroup, htmlGroupImg, htmlImages] = htmlGroups[i];
        htmlGroup.addEventListener("click", () => {
            htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
            groupButtonClicked(key);
            runAnimation(animationKey, "start");
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

function groupButtonClicked(key: string) {
    sessionStorage.setItem("group", key);
    sessionStorage.setItem("roll", "1");
}

async function changeLink(link: string) {
    window.location = link as unknown as Location;
}

main();
//#endregion
