//#region Main
import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import { createOptions } from "./utils/Siege/options.js";
import InputSystem from "./utils/input.js";
import { AnimationCurves, Animator } from "./utils/animation/animation.js";
import { createFooter } from "./utils/Siege/footer.js";
import { changeLink, createElement, disableContextMenu, groupButtonClicked } from "./utils/html.js";
import { lerp } from "./utils/math.js";
InputSystem.start();
const mainContentWrapper = document
    .getElementsByClassName("main-content-wrapper")
    .item(0);
function main() {
    if (mainContentWrapper !== null) {
        disableContextMenu(document.body, mainContentWrapper);
        createGroupButtons();
        createOptions(mainContentWrapper, 4, false);
        createFooter(mainContentWrapper);
    }
}
function createGroupButtons() {
    const groupModal = createElement("html", "section");
    groupModal.className = "group-modal";
    const groupModalTable = createElement("html", "table");
    const groupModalTBody = createElement("html", "tbody");
    const groupModalTitleRow = createElement("html", "tr");
    const groupModalRow = createElement("html", "tr");
    const grouKeys = Object.keys(GROUPS);
    const htmlGroups = [];
    for (let i = 0; i < grouKeys.length; i++) {
        const key = grouKeys[i];
        const group = GROUPS[key];
        const htmlGroup = createElement("html", "td");
        htmlGroup.style.color = "white";
        htmlGroup.style.fontSize = "2vmax";
        htmlGroup.style.textAlign = "center";
        htmlGroup.style.cursor = "pointer";
        htmlGroup.style.scale = "90%";
        htmlGroup.innerHTML += key;
        const htmlGroupDiv = createElement("html", "div");
        htmlGroupDiv.style.marginLeft = "auto";
        htmlGroupDiv.style.marginRight = "auto";
        htmlGroupDiv.style.width = "20vmax";
        htmlGroupDiv.style.height = "20vmax";
        const htmlGroupImg = createElement("html", "img");
        htmlGroupImg.draggable = false;
        htmlGroupImg.className = "group-button";
        const htmlImages = group.fetch_html_images();
        const animator = new Animator((t, button) => {
            const p = lerp(t, 90, 100);
            button.style.scale = `${p}%`;
        }, {
            duration: 0.15,
            fill: true,
            animationCurve: AnimationCurves.easeInOut,
            args: [htmlGroup],
        });
        htmlGroup.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                htmlGroupImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator.play("start");
            }
        });
        htmlGroup.addEventListener("pointerleave", (event) => {
            if (event.pointerType !== "touch") {
                animator.play("end")?.addEventListener("finish", () => {
                    htmlGroupImg.src = htmlImages.normalIcon ?? whiteBackground;
                });
            }
        });
        htmlGroups.push({
            animator,
            key,
            htmlGroup,
            htmlImg: htmlGroupImg,
            htmlImages,
        });
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
                animator?.play("end").addEventListener("finish", () => {
                    htmlImg.src = htmlImages.normalIcon ?? whiteBackground;
                });
            }
        }
    };
    for (let i = 0; i < htmlGroups.length; i++) {
        const { animator, key, htmlGroup, htmlImg, htmlImages } = htmlGroups[i];
        htmlGroup.addEventListener("pointerup", (event) => {
            if (event.button === 0) {
                unsetHTMLGroups(key);
                htmlImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator?.play("start")?.addEventListener("finish", () => {
                    animator?.play("end", { duration: 0.06 }).addEventListener("finish", () => {
                        htmlImg.src = htmlImages.normalIcon ?? whiteBackground;
                        groupButtonClicked(key);
                        changeLink("./op");
                    });
                });
            }
        });
    }
    if (htmlGroups.length > 0) {
        const groupModalTitleData = createElement("html", "td");
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