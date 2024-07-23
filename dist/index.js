import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import Options, { OptionsParse } from "./utils/options.js";
import IDKButImHardRN from "./utils/time.js";
function isScrollable(element, dir) {
    const new_dir = dir === "vertical" ? "scrollTop" : "scrollLeft";
    let res = !!element[new_dir];
    if (!res) {
        element[new_dir] = 1;
        res = !!element[new_dir];
        element[new_dir] = 0;
    }
    return res;
}
function main() {
    document.body.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        event.stopImmediatePropagation();
        return false;
    };
    localStorage.removeItem("op");
    createGroupButtons();
    createFilter();
    createOptions();
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
    const groupModalRow = document.createElement("tr");
    const grouKeys = Object.keys(GROUPS);
    const htmlGroups = [];
    for (let i = 0; i < grouKeys.length; i++) {
        const key = grouKeys[i];
        const group = GROUPS[key];
        const htmlGroup = document.createElement("td");
        htmlGroup.innerHTML += key;
        const htmlGroupDiv = document.createElement("div");
        const htmlGroupImg = document.createElement("img");
        htmlGroupImg.draggable = false;
        htmlGroupImg.className = "group-button";
        const htmlImages = group.fetch_html_images();
        giveHoverAnimation(htmlGroup, new HoverOptions({
            imgInfo: {
                element: htmlGroupImg,
                enterImg: htmlImages.hoverIcon ?? whiteBackground,
                leaveImg: htmlImages.normalIcon ?? whiteBackground,
            },
            click: false,
            animateOnTouch: true,
            scale: 90,
        }));
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
            const imgElement = htmlGroup.children.item(0)?.children[0];
            groupButtonClicked(key);
            if (imgElement !== undefined) {
                giveHoverAnimation(htmlGroup, new HoverOptions({
                    imgInfo: {
                        element: imgElement,
                        enterImg: htmlImages.hoverIcon ?? whiteBackground,
                        leaveImg: htmlImages.normalIcon ?? whiteBackground,
                    },
                    click: true,
                    animateOnTouch: true,
                    scale: 100,
                }));
            }
            for (let i = 0; i < htmlGroups.length; i++) {
                const [key1, htmlGroup1, htmlImages1] = htmlGroups[i];
                const imgElement1 = htmlGroup1.children.item(0)?.children[0];
                if (key1 !== key && imgElement1 !== undefined) {
                    htmlGroup1.style.transition = `transform 0.13s ease-in-out`;
                    htmlGroup1.style.transform = `scale(100%)`;
                    imgElement1.src = htmlImages1.normalIcon ?? whiteBackground;
                }
            }
            switcher.run("op.html");
        });
    }
    groupModalTBody.appendChild(groupModalRow);
    groupModalTable.appendChild(groupModalTBody);
    groupModal.appendChild(groupModalTable);
    document.body.insertBefore(groupModal, document.body.childNodes[2]);
}
async function changeLink(link) {
    window.location = link;
}
function createFilter() {
    const MAIN = document.createElement("section");
    MAIN.style.background = "#444444";
    document.body.insertBefore(MAIN, document.body.childNodes[3]);
    const FILTER_MODAL = document.createElement("section");
    FILTER_MODAL.className = "filter-modal";
    MAIN.appendChild(FILTER_MODAL);
    const FILTER_MODAL_CONTENT = document.createElement("div");
    FILTER_MODAL_CONTENT.className = "filter-modal-content";
    FILTER_MODAL.appendChild(FILTER_MODAL_CONTENT);
    const FILTER_HEADER = document.createElement("h1");
    FILTER_HEADER.innerHTML = "Filter";
    FILTER_MODAL_CONTENT.appendChild(FILTER_HEADER);
    const FILTER_SELECT_ALL_CONTAINER = document.createElement("div");
    FILTER_MODAL_CONTENT.appendChild(FILTER_SELECT_ALL_CONTAINER);
    const FILTER_SELECT_ALL = document.createElement("button");
    if (Options.Filter.AllTrue) {
        FILTER_SELECT_ALL.innerHTML = "Deselect All";
    }
    else {
        FILTER_SELECT_ALL.innerHTML = "Select All";
    }
    FILTER_SELECT_ALL_CONTAINER.appendChild(FILTER_SELECT_ALL);
    const FILTER_TABLE = document.createElement("table");
    FILTER_MODAL_CONTENT.appendChild(FILTER_TABLE);
    const FILTER_TABLE_BODY = document.createElement("tbody");
    FILTER_TABLE.appendChild(FILTER_TABLE_BODY);
    const FILTER_SELECT_GROUP = document.createElement("tr");
    FILTER_TABLE_BODY.appendChild(FILTER_SELECT_GROUP);
    const FILTER_SELECT_OPS = document.createElement("tr");
    FILTER_TABLE_BODY.appendChild(FILTER_SELECT_OPS);
    const htmlSelectGroupButtons = [];
    const htmlSelectOpButtons = {};
    for (const nKey in GROUPS) {
        const key = nKey;
        const group = GROUPS[key];
        const GROUP_SELECT_BUTTON = document.createElement("td");
        GROUP_SELECT_BUTTON.className = "group-select";
        if (Options.Filter.GroupTrue(key)) {
            GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + key;
        }
        else {
            GROUP_SELECT_BUTTON.innerHTML = "Select All " + key;
        }
        let makeGroupSelectButton = true;
        if (group.ops.length > 0) {
            htmlSelectOpButtons[key] = [];
            const item = htmlSelectOpButtons[key];
            const column1 = document.createElement("td");
            let column2 = null;
            if (group.ops.length > 1) {
                column2 = document.createElement("td");
                GROUP_SELECT_BUTTON.colSpan = 2;
            }
            else if (group.ops.length === 1) {
                GROUP_SELECT_BUTTON.colSpan = 1;
            }
            else {
                makeGroupSelectButton = false;
            }
            const halfLength = Math.ceil(group.ops.length / 2);
            for (let i = 0; i < group.ops.length; i++) {
                const op = group.ops[i];
                const OP_BUTTON = document.createElement("div");
                const OP_IMAGE = document.createElement("img");
                OP_IMAGE.draggable = false;
                OP_IMAGE.src = op.icons[0];
                OP_IMAGE.alt = op.name;
                OP_BUTTON.appendChild(OP_IMAGE);
                OP_BUTTON.innerHTML += op.name;
                if (Options.Filter.OPTrue(key, op.name)) {
                    OP_BUTTON.children.item(0).style.filter = "";
                    giveHoverAnimation(OP_BUTTON);
                }
                else {
                    OP_BUTTON.children.item(0).style.filter = "grayscale(100%)";
                    giveHoverAnimation(OP_BUTTON, new HoverOptions({ scale: 70 }));
                }
                OP_BUTTON.addEventListener("click", () => {
                    if (Options.Filter.OPTrue(key, op.name)) {
                        Options.Filter.deselectOP(key, op.name);
                        OP_BUTTON.children.item(0).style.filter = "grayscale(100%)";
                        giveHoverAnimation(OP_BUTTON, new HoverOptions({ click: true, scale: 70 }));
                    }
                    else {
                        Options.Filter.selectOP(key, op.name);
                        OP_BUTTON.children.item(0).style.filter = "";
                        giveHoverAnimation(OP_BUTTON, new HoverOptions({ click: true }));
                    }
                    for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                        const [key, element] = htmlSelectGroupButtons[i];
                        if (Options.Filter.GroupTrue(key)) {
                            element.innerHTML = "Deselect All " + key;
                        }
                        else {
                            element.innerHTML = "Select All " + key;
                        }
                    }
                    if (Options.Filter.AllTrue) {
                        FILTER_SELECT_ALL.innerHTML = "Deselect All";
                    }
                    else {
                        FILTER_SELECT_ALL.innerHTML = "Select All";
                    }
                });
                item.push([op.name, OP_BUTTON]);
                if (column2 == null) {
                    column1.appendChild(OP_BUTTON);
                }
                else {
                    if (i < halfLength) {
                        column1.appendChild(OP_BUTTON);
                    }
                    else {
                        column2.appendChild(OP_BUTTON);
                    }
                }
            }
            FILTER_SELECT_OPS.appendChild(column1);
            if (column2 !== null) {
                FILTER_SELECT_OPS.appendChild(column2);
            }
        }
        if (makeGroupSelectButton) {
            giveHoverAnimation(GROUP_SELECT_BUTTON);
            GROUP_SELECT_BUTTON.addEventListener("click", () => {
                if (Options.Filter.GroupTrue(key)) {
                    Options.Filter.delectGroup(key);
                    GROUP_SELECT_BUTTON.innerHTML = "Select All " + key;
                }
                else {
                    Options.Filter.selectGroup(key);
                    GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + key;
                }
                if (Options.Filter.AllTrue) {
                    FILTER_SELECT_ALL.innerHTML = "Deselect All";
                }
                else {
                    FILTER_SELECT_ALL.innerHTML = "Select All";
                }
                const item = htmlSelectOpButtons[key];
                if (item !== undefined) {
                    for (let i = 0; i < item.length; i++) {
                        const [name, button] = item[i];
                        if (Options.Filter.OPTrue(key, name)) {
                            button.children.item(0).style.filter = "";
                            giveHoverAnimation(button);
                        }
                        else {
                            button.children.item(0).style.filter = "grayscale(100%)";
                            giveHoverAnimation(button, new HoverOptions({ scale: 70 }));
                        }
                    }
                }
            });
            htmlSelectGroupButtons.push([key, GROUP_SELECT_BUTTON]);
            FILTER_SELECT_GROUP.appendChild(GROUP_SELECT_BUTTON);
        }
    }
    if (htmlSelectGroupButtons.length > 0) {
        FILTER_SELECT_ALL.addEventListener("click", () => {
            if (Options.Filter.AllTrue) {
                Options.Filter.deselectAll();
                FILTER_SELECT_ALL.innerHTML = "Select All";
            }
            else {
                Options.Filter.selectAll();
                FILTER_SELECT_ALL.innerHTML = "Deselect All";
            }
            for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                const [key, element] = htmlSelectGroupButtons[i];
                if (Options.Filter.GroupTrue(key)) {
                    element.innerHTML = "Deselect All " + key;
                }
                else {
                    element.innerHTML = "Select All " + key;
                }
            }
            for (const nKey in htmlSelectOpButtons) {
                const key = nKey;
                const item = htmlSelectOpButtons[key];
                if (item !== undefined) {
                    for (let i = 0; i < item.length; i++) {
                        const [name, button] = item[i];
                        if (Options.Filter.OPTrue(key, name)) {
                            button.children.item(0).style.filter = "";
                            giveHoverAnimation(button);
                        }
                        else {
                            button.children.item(0).style.filter = "grayscale(100%)";
                            giveHoverAnimation(button, new HoverOptions({ scale: 70 }));
                        }
                    }
                }
            }
        });
        giveHoverAnimation(FILTER_SELECT_ALL);
    }
    else {
        FILTER_MODAL_CONTENT.removeChild(FILTER_MODAL_CONTENT.childNodes[2]);
    }
    if (isScrollable(FILTER_MODAL_CONTENT, "horizontal")) {
        let pre_left = null;
        while (FILTER_MODAL_CONTENT.scrollLeft !== pre_left) {
            FILTER_MODAL_CONTENT.scrollTo({
                left: FILTER_MODAL_CONTENT.scrollLeft + 10000,
            });
            pre_left = FILTER_MODAL_CONTENT.scrollLeft;
        }
        FILTER_MODAL_CONTENT.scrollTo({
            left: FILTER_MODAL_CONTENT.scrollLeft / 2,
        });
        FILTER_MODAL_CONTENT.style.overflowX = "scroll";
    }
    else {
        FILTER_MODAL_CONTENT.style.overflowX = "hidden";
    }
    if (isScrollable(FILTER_MODAL_CONTENT, "vertical")) {
        FILTER_MODAL_CONTENT.style.overflowY = "scroll";
    }
    else {
        FILTER_MODAL_CONTENT.style.overflowY = "hidden";
    }
    window.addEventListener("resize", () => {
        if (isScrollable(FILTER_MODAL_CONTENT, "horizontal")) {
            let pre_left = null;
            while (FILTER_MODAL_CONTENT.scrollLeft !== pre_left) {
                FILTER_MODAL_CONTENT.scrollTo({
                    left: FILTER_MODAL_CONTENT.scrollLeft + 10000,
                });
                pre_left = FILTER_MODAL_CONTENT.scrollLeft;
            }
            FILTER_MODAL_CONTENT.scrollTo({
                left: FILTER_MODAL_CONTENT.scrollLeft / 2,
            });
            FILTER_MODAL_CONTENT.style.overflowX = "scroll";
        }
        else {
            FILTER_MODAL_CONTENT.style.overflowX = "hidden";
        }
        if (isScrollable(FILTER_MODAL_CONTENT, "vertical")) {
            FILTER_MODAL_CONTENT.style.overflowY = "scroll";
        }
        else {
            FILTER_MODAL_CONTENT.style.overflowY = "hidden";
        }
    });
}
function createOptions() {
    const OPTIONS_MODAL = document.createElement("section");
    OPTIONS_MODAL.className = "options-modal";
    const TABLE = document.createElement("table");
    const TABLE_BODY = document.createElement("tbody");
    const TABLE_ROW_1 = document.createElement("tr");
    const TABLE_DATA_1 = document.createElement("h1");
    TABLE_DATA_1.innerHTML = "Options";
    const TABLE_ROW_2 = document.createElement("tr");
    const TABLE_DATA_2 = document.createElement("td");
    const key = "Avoid Dupes";
    TABLE_DATA_2.innerHTML = key;
    if (Options.options[OptionsParse[key]] === undefined) {
        TABLE_DATA_2.style.color = "#ffffff";
        giveHoverAnimation(TABLE_DATA_2);
    }
    else {
        TABLE_DATA_2.style.color = "#999999";
        giveHoverAnimation(TABLE_DATA_2, new HoverOptions({ scale: 70 }));
    }
    TABLE_DATA_2.addEventListener("click", () => {
        if (Options.options[OptionsParse[key]] === undefined) {
            Options.setOption(OptionsParse[key], false);
            TABLE_DATA_2.style.color = "#999999";
            giveHoverAnimation(TABLE_DATA_2, new HoverOptions({ click: true, scale: 70 }));
        }
        else {
            Options.removeOption(OptionsParse[key]);
            TABLE_DATA_2.style.color = "#ffffff";
            giveHoverAnimation(TABLE_DATA_2, new HoverOptions({ click: true }));
        }
    });
    TABLE_ROW_1.appendChild(TABLE_DATA_1);
    TABLE_ROW_2.appendChild(TABLE_DATA_2);
    TABLE_BODY.appendChild(TABLE_ROW_1);
    TABLE_BODY.appendChild(TABLE_ROW_2);
    TABLE.appendChild(TABLE_BODY);
    OPTIONS_MODAL.appendChild(TABLE);
    document.body.insertBefore(OPTIONS_MODAL, document.body.childNodes[3]);
}
class HoverOptions {
    imageElement;
    enterImg;
    leaveImg;
    transitionSec;
    click;
    animateOnTouch;
    scale;
    constructor(options = {
        transitionSec: 0.13,
        animateOnTouch: false,
        click: false,
        scale: 90,
    }) {
        this.imageElement = options.imgInfo
            ? options.imgInfo.element
            : undefined;
        this.enterImg = options.imgInfo ? options.imgInfo.enterImg : undefined;
        this.leaveImg = options.imgInfo ? options.imgInfo.leaveImg : undefined;
        this.transitionSec = options.transitionSec ?? 0.13;
        this.animateOnTouch = options.animateOnTouch ?? false;
        this.click = options.click ?? false;
        this.scale = options.scale ?? 90;
    }
}
function giveHoverAnimation(element, options = new HoverOptions()) {
    const isTouchScreen = Options.isTouchScreen;
    let setNormalScale = true;
    if (options.click) {
        if (isTouchScreen) {
            if (options.animateOnTouch) {
                const enterImg = options["enterImg"];
                if (options.imageElement !== undefined) {
                    if (enterImg !== undefined) {
                        options.imageElement.src = enterImg;
                    }
                }
                element.style.transition = `transform ${options.transitionSec}s ease-in-out`;
                element.style.transform = `scale(${options.scale + 10}%)`;
            }
        }
        else {
            element.style.transform = `scale(${options.scale + 10}%)`;
            setNormalScale = false;
        }
    }
    if (setNormalScale) {
        element.style.transform = `scale(${options.scale}%)`;
    }
    if (!isTouchScreen) {
        const mouseEnter = () => {
            const enterImg = options["enterImg"];
            if (options.imageElement !== undefined) {
                if (enterImg !== undefined) {
                    options.imageElement.src = enterImg;
                }
            }
            element.style.transition = `transform ${options.transitionSec}s ease-in-out`;
            element.style.transform = `scale(${options.scale + 10}%)`;
        };
        const mouseLeave = () => {
            const leaveImg = options["leaveImg"];
            if (options.imageElement !== undefined) {
                if (leaveImg !== undefined) {
                    options.imageElement.src = leaveImg;
                }
            }
            element.style.transition = `transform ${options.transitionSec}s ease-in-out`;
            element.style.transform = `scale(${options.scale}%)`;
        };
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
        element.addEventListener("mouseenter", mouseEnter);
        element.addEventListener("mouseleave", mouseLeave);
    }
}
function groupButtonClicked(key) {
    localStorage.setItem("group", key);
}
main();
//#endregion
//# sourceMappingURL=index.js.map