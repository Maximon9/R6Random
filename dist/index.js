import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import IDKButImHardRN from "./utils/animation/time.js";
import InputSystem from "./input.js";
import { HTMLAnimator } from "./utils/animation/animation.js";
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
    let switcher = new IDKButImHardRN(changeLink);
    if (Options.isTouchScreen) {
        switcher.changeTime(700);
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
        const animator = new HTMLAnimator(htmlGroup, {
            options: {
                duration: 150,
                fill: "both",
                easing: "ease-in-out",
            },
        });
        if (!Options.isTouchScreen) {
            htmlGroup.addEventListener("mouseenter", () => {
                htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "100%" }]);
                animator.play();
            });
            htmlGroup.addEventListener("mouseleave", () => {
                htmlGroupImg.src = htmlImages.normalIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "90%" }]);
                animator.play();
            });
        }
        new HTMLAnimator(document.createElement("td"));
        htmlGroups.push([animator, key, htmlGroup, htmlGroupImg, htmlImages]);
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
        const [animator, key, htmlGroup, htmlGroupImg, htmlImages] = htmlGroups[i];
        htmlGroup.addEventListener("click", () => {
            htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
            groupButtonClicked(key);
            for (let i = 0; i < htmlGroups.length; i++) {
                const [animator1, key1, _, htmlGroupImg, htmlImages1] = htmlGroups[i];
                if (key1 !== key) {
                    htmlGroupImg.src = htmlImages1.normalIcon ?? whiteBackground;
                    animator1.setKeyFrames([{ scale: "90%" }]);
                    animator1.play();
                }
            }
            animator.setKeyFrames([{ scale: "100%" }]);
            animator.play();
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