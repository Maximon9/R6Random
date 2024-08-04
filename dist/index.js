//#region Main
import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import InputSystem from "./utils/input.js";
import { ElementAnimator } from "./utils/animation/animation.js";
import { createFooter } from "./utils/Siege/footer.js";
import { changeLink, groupButtonClicked } from "./utils/html.js";
InputSystem.start();
const mainContentWrapper = document
    .getElementsByClassName("main-content-wrapper")
    .item(0);
function main() {
    document.body.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        event.stopImmediatePropagation();
        return false;
    };
    createGroupButtons();
    if (mainContentWrapper !== null) {
        createOptions(mainContentWrapper, 4, false);
        createFooter(mainContentWrapper);
    }
}
function createGroupButtons() {
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
        htmlGroupDiv.style.width = "20vmax";
        htmlGroupDiv.style.height = "20vmax";
        const htmlGroupImg = document.createElement("img");
        htmlGroupImg.draggable = false;
        htmlGroupImg.className = "group-button";
        const htmlImages = group.fetch_html_images();
        const animator = new ElementAnimator(htmlGroup, {
            options: {
                duration: 150,
                fill: "both",
                easing: "ease-in-out",
            },
        });
        htmlGroup.addEventListener("mouseenter", () => {
            if (!Options.usingTouchScreen) {
                htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "100%" }]);
                animator.play();
            }
        });
        htmlGroup.addEventListener("mouseleave", () => {
            if (!Options.usingTouchScreen) {
                htmlGroupImg.src = htmlImages.normalIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "90%" }]);
                animator.play();
            }
        });
        htmlGroups.push({ animator, key, htmlGroup, htmlImg: htmlGroupImg, htmlImages });
        const first_icon = htmlImages.normalIcon ?? htmlImages.hoverIcon;
        if (first_icon != undefined) {
            htmlGroupImg.src = first_icon;
        }
        htmlGroupImg.alt = key + " Icon";
        htmlGroupDiv.appendChild(htmlGroupImg);
        htmlGroup.appendChild(htmlGroupDiv);
        groupModalRow.appendChild(htmlGroup);
    }
    const unsetHTMLGroups = (name) => {
        for (let i = 0; i < htmlGroups.length; i++) {
            const { animator, key, htmlImg, htmlImages } = htmlGroups[i];
            if (name !== key) {
                htmlImg.src = htmlImages.normalIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "90%" }]);
                animator.play();
            }
        }
    };
    for (let i = 0; i < htmlGroups.length; i++) {
        const { animator, key, htmlGroup, htmlImg, htmlImages } = htmlGroups[i];
        htmlGroup.addEventListener("pointerup", (event) => {
            if (event.button === 0) {
                unsetHTMLGroups(key);
                htmlImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator.setKeyFrames([{ scale: "100%" }]);
                animator.play()?.addEventListener("finish", () => {
                    groupButtonClicked(key);
                    changeLink("op.html");
                });
            }
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
    mainContentWrapper?.appendChild(groupModal);
}
main();
//#endregion
//# sourceMappingURL=index.js.map