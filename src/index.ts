//#region Main
import { GROUPS } from "./ops.js";
import { giveHoverAnimation, HoverOptions } from "./utils/html.js";
import { whiteBackground } from "./utils/img.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import IDKButImHardRN from "./utils/animation/time.js";
import InputSystem from "./input.js";

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
        switcher = new IDKButImHardRN(changeLink, 300);
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
        HTMLTableCellElement,
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
        htmlGroup.style.transition = "transform 0.13s ease-in-out";
        htmlGroup.style.cursor = "pointer";
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
        giveHoverAnimation(
            htmlGroup,
            new HoverOptions({
                imgInfo: {
                    element: htmlGroupImg,
                    enterImg: htmlImages.hoverIcon ?? whiteBackground,
                    leaveImg: htmlImages.normalIcon ?? whiteBackground,
                },
                click: false,
                animateOnTouch: true,
                scale: 100,
            })
        );
        htmlGroups.push([key, htmlGroup, htmlImages]);

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
        const [key, htmlGroup, htmlImages] = htmlGroups[i];
        htmlGroup.addEventListener("click", () => {
            const imgElement = htmlGroup.children.item(0)?.children[0] as
                | HTMLImageElement
                | undefined;
            groupButtonClicked(key);
            if (imgElement !== undefined) {
                giveHoverAnimation(
                    htmlGroup,
                    new HoverOptions({
                        imgInfo: {
                            element: imgElement,
                            enterImg: htmlImages.hoverIcon ?? whiteBackground,
                            leaveImg: htmlImages.normalIcon ?? whiteBackground,
                        },
                        click: true,
                        animateOnTouch: true,
                        scale: 100,
                    })
                );
            }
            for (let i = 0; i < htmlGroups.length; i++) {
                const [key1, htmlGroup1, htmlImages1] = htmlGroups[i];
                const imgElement1 = htmlGroup1.children.item(0)?.children[0] as
                    | HTMLImageElement
                    | undefined;
                if (key1 !== key && imgElement1 !== undefined) {
                    htmlGroup1.style.transition = `transform 0.13s ease-in-out`;
                    htmlGroup1.style.transform = `scale(100%)`;
                    imgElement1.src = htmlImages1.normalIcon ?? whiteBackground;
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
