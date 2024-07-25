import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import Options, { AvoidOptionsRev } from "./utils/options.js";
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
    createGroupButtons();
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
        htmlGroup.style.color = "white";
        htmlGroup.style.fontSize = "2vmax";
        htmlGroup.style.textAlign = "center";
        htmlGroup.style.transition = "transform 0.13s ease-in-out";
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
        giveHoverAnimation(htmlGroup, new HoverOptions({
            imgInfo: {
                element: htmlGroupImg,
                enterImg: htmlImages.hoverIcon ?? whiteBackground,
                leaveImg: htmlImages.normalIcon ?? whiteBackground,
            },
            click: false,
            animateOnTouch: true,
            scale: 100,
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
function createOptions() {
    const optionsModal = document.createElement("section");
    optionsModal.className = "options-modal";
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    const optionsLabel = document.createElement("h1");
    optionsLabel.innerHTML = "Options";
    const avoidSection = document.createElement("section");
    const avoidContent = document.createElement("div");
    const avoidLabel = document.createElement("h2");
    avoidLabel.innerHTML = "Try Avoid";
    tableData.appendChild(optionsLabel);
    tableData.appendChild(avoidSection);
    avoidContent.appendChild(avoidLabel);
    avoidSection.appendChild(avoidContent);
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    optionsModal.appendChild(table);
    document.body.insertBefore(optionsModal, document.body.childNodes[3]);
    const avoidTable = document.createElement("table");
    const avoidTableBody = document.createElement("tbody");
    const avoidTableRow = document.createElement("tr");
    const keys = Object.keys(AvoidOptionsRev);
    const half = Math.ceil(keys.length / 2);
    // const allTableDatas: HTMLTableCellElement[] = [];
    const avoidTableData = document.createElement("td");
    for (let i = 0; i < keys.length; i++) {
        // if (i < half) {
        //     if (allTableDatas[0] === undefined) {
        //         allTableDatas[0] = document.createElement("td");
        //     }
        //     tableData = allTableDatas[0];
        // } else {
        //     if (allTableDatas[1] === undefined) {
        //         allTableDatas[1] = document.createElement("td");
        //     }
        //     tableData = allTableDatas[1];
        // }
        const parseKey = keys[i];
        const optionButton = document.createElement("div");
        const key = AvoidOptionsRev[parseKey];
        optionButton.innerHTML = key;
        if (Options.optionTrue(key)) {
            optionButton.style.color = "#ffffff";
            giveHoverAnimation(optionButton);
        }
        else {
            optionButton.style.color = "#999999";
            giveHoverAnimation(optionButton, new HoverOptions({ scale: 70 }));
        }
        optionButton.addEventListener("click", () => {
            if (Options.optionTrue(key)) {
                Options.setOption(key, false);
                optionButton.style.color = "#999999";
                giveHoverAnimation(optionButton, new HoverOptions({ click: true, scale: 70 }));
            }
            else {
                Options.removeOption(key);
                optionButton.style.color = "#ffffff";
                giveHoverAnimation(optionButton, new HoverOptions({ click: true }));
            }
        });
        avoidTableData.appendChild(optionButton);
        avoidContent.appendChild(avoidTableData);
    }
    avoidTableBody.appendChild(avoidTableRow);
    avoidTable.appendChild(avoidTableBody);
    const filterTableRow = document.createElement("tr");
    tableBody.appendChild(filterTableRow);
    createFilter(filterTableRow);
}
function createFilter(optionsModal) {
    const filterModal = document.createElement("section");
    filterModal.className = "filter-modal";
    optionsModal.appendChild(filterModal);
    const filterModalContent = document.createElement("div");
    filterModalContent.className = "filter-modal-content";
    filterModal.appendChild(filterModalContent);
    const FILTER_HEADER = document.createElement("h1");
    FILTER_HEADER.innerHTML = "Filter";
    filterModalContent.appendChild(FILTER_HEADER);
    const filterSelectAllContainer = document.createElement("div");
    filterModalContent.appendChild(filterSelectAllContainer);
    const filterSelectAll = document.createElement("button");
    if (Options.Filter.AllTrue) {
        filterSelectAll.innerHTML = "Deselect All";
    }
    else {
        filterSelectAll.innerHTML = "Select All";
    }
    filterSelectAllContainer.appendChild(filterSelectAll);
    const filterTable = document.createElement("table");
    filterModalContent.appendChild(filterTable);
    const filterTableBody = document.createElement("tbody");
    filterTable.appendChild(filterTableBody);
    const filterSelectGroup = document.createElement("tr");
    filterTableBody.appendChild(filterSelectGroup);
    const filterSelectOPs = document.createElement("tr");
    filterTableBody.appendChild(filterSelectOPs);
    const htmlSelectGroupButtons = [];
    const htmlSelectOpButtons = {};
    for (const nKey in GROUPS) {
        const key = nKey;
        const group = GROUPS[key];
        const groupSelectButton = document.createElement("td");
        groupSelectButton.className = "group-select";
        if (Options.Filter.GroupTrue(key)) {
            groupSelectButton.innerHTML = "Deselect All " + key;
        }
        else {
            groupSelectButton.innerHTML = "Select All " + key;
        }
        let makeGroupSelectButton = true;
        if (group.ops.length > 0) {
            htmlSelectOpButtons[key] = [];
            const item = htmlSelectOpButtons[key];
            const column1 = document.createElement("td");
            let column2 = null;
            if (group.ops.length > 1) {
                column2 = document.createElement("td");
                groupSelectButton.colSpan = 2;
            }
            else if (group.ops.length === 1) {
                groupSelectButton.colSpan = 1;
            }
            else {
                makeGroupSelectButton = false;
            }
            const halfLength = Math.ceil(group.ops.length / 2);
            for (let i = 0; i < group.ops.length; i++) {
                const op = group.ops[i];
                const opButton = document.createElement("div");
                const opImage = document.createElement("img");
                opImage.draggable = false;
                opImage.src = op.icons[0];
                opImage.alt = op.name;
                opButton.appendChild(opImage);
                opButton.innerHTML += op.name;
                if (Options.Filter.OPTrue(key, op.name)) {
                    opButton.children.item(0).style.filter = "";
                    giveHoverAnimation(opButton);
                }
                else {
                    opButton.children.item(0).style.filter =
                        "grayscale(100%)";
                    giveHoverAnimation(opButton, new HoverOptions({ scale: 70 }));
                }
                opButton.addEventListener("click", () => {
                    if (Options.Filter.OPTrue(key, op.name)) {
                        Options.Filter.deselectOP(key, op.name);
                        opButton.children.item(0).style.filter =
                            "grayscale(100%)";
                        giveHoverAnimation(opButton, new HoverOptions({ click: true, scale: 70 }));
                    }
                    else {
                        Options.Filter.selectOP(key, op.name);
                        opButton.children.item(0).style.filter = "";
                        giveHoverAnimation(opButton, new HoverOptions({ click: true }));
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
                        filterSelectAll.innerHTML = "Deselect All";
                    }
                    else {
                        filterSelectAll.innerHTML = "Select All";
                    }
                });
                item.push([op.name, opButton]);
                if (column2 == null) {
                    column1.appendChild(opButton);
                }
                else {
                    if (i < halfLength) {
                        column1.appendChild(opButton);
                    }
                    else {
                        column2.appendChild(opButton);
                    }
                }
            }
            filterSelectOPs.appendChild(column1);
            if (column2 !== null) {
                filterSelectOPs.appendChild(column2);
            }
        }
        if (makeGroupSelectButton) {
            giveHoverAnimation(groupSelectButton);
            groupSelectButton.addEventListener("click", () => {
                if (Options.Filter.GroupTrue(key)) {
                    Options.Filter.delectGroup(key);
                    groupSelectButton.innerHTML = "Select All " + key;
                }
                else {
                    Options.Filter.selectGroup(key);
                    groupSelectButton.innerHTML = "Deselect All " + key;
                }
                if (Options.Filter.AllTrue) {
                    filterSelectAll.innerHTML = "Deselect All";
                }
                else {
                    filterSelectAll.innerHTML = "Select All";
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
                            button.children.item(0).style.filter =
                                "grayscale(100%)";
                            giveHoverAnimation(button, new HoverOptions({ scale: 70 }));
                        }
                    }
                }
            });
            htmlSelectGroupButtons.push([key, groupSelectButton]);
            filterSelectGroup.appendChild(groupSelectButton);
        }
    }
    if (htmlSelectGroupButtons.length > 0) {
        filterSelectAll.addEventListener("click", () => {
            if (Options.Filter.AllTrue) {
                Options.Filter.deselectAll();
                filterSelectAll.innerHTML = "Select All";
            }
            else {
                Options.Filter.selectAll();
                filterSelectAll.innerHTML = "Deselect All";
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
                            button.children.item(0).style.filter =
                                "grayscale(100%)";
                            giveHoverAnimation(button, new HoverOptions({ scale: 70 }));
                        }
                    }
                }
            }
        });
        giveHoverAnimation(filterSelectAll);
    }
    else {
        filterModalContent.removeChild(filterModalContent.childNodes[2]);
    }
    if (isScrollable(filterModalContent, "horizontal")) {
        let pre_left = null;
        while (filterModalContent.scrollLeft !== pre_left) {
            filterModalContent.scrollTo({
                left: filterModalContent.scrollLeft + 10000,
            });
            pre_left = filterModalContent.scrollLeft;
        }
        filterModalContent.scrollTo({
            left: filterModalContent.scrollLeft / 2,
        });
        filterModalContent.style.overflowX = "scroll";
    }
    else {
        filterModalContent.style.overflowX = "hidden";
    }
    if (isScrollable(filterModalContent, "vertical")) {
        filterModalContent.style.overflowY = "scroll";
    }
    else {
        filterModalContent.style.overflowY = "hidden";
    }
    window.addEventListener("resize", () => {
        if (isScrollable(filterModalContent, "horizontal")) {
            let pre_left = null;
            while (filterModalContent.scrollLeft !== pre_left) {
                filterModalContent.scrollTo({
                    left: filterModalContent.scrollLeft + 10000,
                });
                pre_left = filterModalContent.scrollLeft;
            }
            filterModalContent.scrollTo({
                left: filterModalContent.scrollLeft / 2,
            });
            filterModalContent.style.overflowX = "scroll";
        }
        else {
            filterModalContent.style.overflowX = "hidden";
        }
        if (isScrollable(filterModalContent, "vertical")) {
            filterModalContent.style.overflowY = "scroll";
        }
        else {
            filterModalContent.style.overflowY = "hidden";
        }
    });
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
        this.imageElement = options.imgInfo ? options.imgInfo.element : undefined;
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
                setNormalScale = false;
            }
        }
        else {
            element.style.transition = `transform ${options.transitionSec}s ease-in-out`;
            element.style.transform = `scale(${options.scale + 10}%)`;
            setNormalScale = false;
        }
    }
    if (setNormalScale) {
        element.style.transition = `transform ${options.transitionSec}s ease-in-out`;
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
    localStorage.setItem("roll", "1");
}
async function changeLink(link) {
    window.location = link;
}
main();
//#endregion
//# sourceMappingURL=index.js.map