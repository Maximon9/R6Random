//#region Main
import type { AllOPNames } from "./ops.js";
import { GROUPS } from "./ops.js";
import { whiteBackground } from "./utils/img.js";
import Options, { CategoryOptions, CategoryOptionsRev } from "./utils/options.js";
import IDKButImHardRN from "./utils/time.js";
function isScrollable(element: HTMLElement, dir: "vertical" | "horizontal"): boolean {
    if (dir === "vertical") {
        return element.scrollHeight > element.clientHeight;
    } else {
        return element.scrollWidth > element.clientWidth;
    }
}

function main() {
    document.body.oncontextmenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
        event.stopImmediatePropagation();
        return false;
    };
    createGroupButtons();
    createOptions();
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

function createOptions() {
    const optionsModal = document.createElement("section");
    optionsModal.className = "options-modal";

    const optionsLabel = document.createElement("h1");
    optionsLabel.innerHTML = "Options";

    const optionsModalContent = document.createElement("div");
    optionsModalContent.className = "options-modal-content";

    const optionsModalContentScrollWrapper = document.createElement("div");
    optionsModalContentScrollWrapper.className = "options-modal-content-scroll-wrapper";

    const table = document.createElement("table");

    const tableBody = document.createElement("tbody");
    optionsModal.appendChild(optionsLabel);
    createOptionsNavBar(optionsModalContentScrollWrapper, optionsModal, tableBody);

    table.appendChild(tableBody);
    optionsModal.appendChild(optionsModalContent);
    optionsModalContentScrollWrapper.appendChild(table);
    optionsModalContent.appendChild(optionsModalContentScrollWrapper);
    document.body.insertBefore(optionsModal, document.body.childNodes[3]);

    window.addEventListener("resize", () => {
        if (isScrollable(optionsModalContentScrollWrapper, "horizontal")) {
            let pre_left: number | null = null;
            while (optionsModalContentScrollWrapper.scrollLeft !== pre_left) {
                optionsModalContentScrollWrapper.scrollTo({
                    left: optionsModalContentScrollWrapper.scrollLeft + 10000,
                });
                pre_left = optionsModalContentScrollWrapper.scrollLeft;
            }
            optionsModalContentScrollWrapper.scrollTo({
                left: optionsModalContentScrollWrapper.scrollLeft / 2,
            });
            optionsModalContentScrollWrapper.style.overflowX = "scroll";
        } else {
            optionsModalContentScrollWrapper.style.overflowX = "hidden";
        }
        if (isScrollable(optionsModalContentScrollWrapper, "vertical")) {
            optionsModalContentScrollWrapper.style.overflowY = "scroll";
        } else {
            optionsModalContentScrollWrapper.style.overflowY = "hidden";
        }
    });
}

const optionNames = { Filter: false, "Try Avoid Dupes": false };
function createOptionsNavBar(
    optionsModalContentScrollWrapper: HTMLDivElement,
    optionsModal: HTMLElement,
    tableBody: HTMLTableSectionElement
) {
    const navBar = document.createElement("div");
    navBar.className = "nav-bar";
    const navButtons: [keyof typeof optionNames, HTMLButtonElement][] = [];
    for (const n in optionNames) {
        const name = n as keyof typeof optionNames;
        const navButton = document.createElement("button");
        navButton.innerHTML = name;
        navButton.style.background = "transparent";
        if (!Options.isTouchScreen) {
            navButton.addEventListener("mouseenter", () => {
                if (!optionNames[name]) {
                    navButton.style.transition = "background-color 0.3s ease-in-out";
                    navButton.style.backgroundColor = "#333333";
                }
            });
            navButton.addEventListener("mouseleave", () => {
                if (!optionNames[name]) {
                    navButton.style.transition = "background-color 0.3s ease-in-out";
                    navButton.style.backgroundColor = "transparent";
                }
            });
        }
        navButtons.push([name, navButton]);
        navBar.appendChild(navButton);
    }

    for (let i = 0; i < navButtons.length; i++) {
        const [name, navButton] = navButtons[i];
        navButton.addEventListener("click", () => {
            optionNames[name] = !optionNames[name];
            for (let i = 0; i < navButtons.length; i++) {
                const [key, navButton1] = navButtons[i];
                if (key !== name) {
                    optionNames[key as keyof typeof optionNames] = false;
                    navButton1.style.transition = "background-color 0.3s ease-in-out";
                    navButton1.style.backgroundColor = "transparent";
                }
            }
            const selectAllContainers = [
                ...document.getElementsByClassName("select-all-button-container"),
                ...document.getElementsByClassName("avoid-select-all-button-container"),
            ];
            for (let i = 0; i < selectAllContainers.length; i++) {
                const container = selectAllContainers[i];
                container.remove();
            }
            for (let i = 0; i < tableBody.childNodes.length; i++) {
                tableBody.removeChild(tableBody.childNodes[i]);
            }
            switch (name) {
                case "Filter":
                    createFilter(optionsModalContentScrollWrapper, tableBody);
                    break;
                default:
                    createTryAvoidOptions(optionsModalContentScrollWrapper, tableBody);
                    break;
            }
            navButton.style.transition = "background-color 0.3s ease-in-out";
            navButton.style.backgroundColor = "#222222";
            setTimeout(() => {
                if (isScrollable(optionsModalContentScrollWrapper, "horizontal")) {
                    let pre_left: number | null = null;
                    while (optionsModalContentScrollWrapper.scrollLeft !== pre_left) {
                        optionsModalContentScrollWrapper.scrollTo({
                            left: optionsModalContentScrollWrapper.scrollLeft + 10000,
                        });
                        pre_left = optionsModalContentScrollWrapper.scrollLeft;
                    }
                    optionsModalContentScrollWrapper.scrollTo({
                        left: optionsModalContentScrollWrapper.scrollLeft / 2,
                    });
                    optionsModalContentScrollWrapper.style.overflowX = "scroll";
                } else {
                    optionsModalContentScrollWrapper.style.overflowX = "hidden";
                }
                if (isScrollable(optionsModalContentScrollWrapper, "vertical")) {
                    optionsModalContentScrollWrapper.style.overflowY = "scroll";
                } else {
                    optionsModalContentScrollWrapper.style.overflowY = "hidden";
                }
            }, 100);
        });
    }

    optionsModal.appendChild(navBar);
    const firstButton = navBar.children[0] as HTMLButtonElement;
    firstButton.click();
}

function createTryAvoidOptions(
    optionsModalContentScrollWrapper: HTMLDivElement,
    tableBody: HTMLTableSectionElement
) {
    const categoryName = "Try Avoid Dupes";
    const selectAllButtonContainer = document.createElement("div");
    selectAllButtonContainer.className = "avoid-select-all-button-container";
    selectAllButtonContainer.style.display = "flex";
    selectAllButtonContainer.style.alignItems = "flex-start";
    selectAllButtonContainer.style.justifyContent = "center";
    selectAllButtonContainer.style.borderColor = "transparent";
    selectAllButtonContainer.style.borderStyle = "none";

    const selectAllButton = document.createElement("div");
    selectAllButton.className = "avoid-select-all-button";
    if (Options.categoryTrue(categoryName)) {
        selectAllButton.innerHTML = "Deselect All";
    } else {
        selectAllButton.innerHTML = "Select All";
    }
    giveHoverAnimation(selectAllButton);
    selectAllButtonContainer.appendChild(selectAllButton);
    optionsModalContentScrollWrapper.insertBefore(
        selectAllButtonContainer,
        optionsModalContentScrollWrapper.childNodes[0]
    );

    const avoidModal = document.createElement("section");
    avoidModal.className = "avoid-modal";

    const avoidContent = document.createElement("div");

    const tableRow = document.createElement("tr");

    const tableData = document.createElement("td");

    tableData.appendChild(avoidModal);
    avoidModal.appendChild(avoidContent);
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);

    const optionButtons: [keyof (typeof CategoryOptions)["0"], HTMLDivElement][] = [];
    for (const parseKey in CategoryOptionsRev["0"]) {
        const optionButton = document.createElement("div");
        const key = CategoryOptionsRev["0"][parseKey as keyof (typeof CategoryOptionsRev)["0"]];
        optionButton.innerHTML = key;
        if (Options.optionTrue(categoryName, key)) {
            optionButton.style.color = "#ffffff";
            giveHoverAnimation(optionButton);
        } else {
            optionButton.style.color = "#999999";
            giveHoverAnimation(optionButton, new HoverOptions({ scale: 70 }));
        }
        optionButton.addEventListener("click", () => {
            if (Options.optionTrue(categoryName, key)) {
                Options.disableOption(categoryName, key);
                optionButton.style.color = "#999999";
                giveHoverAnimation(optionButton, new HoverOptions({ click: true, scale: 70 }));
            } else {
                Options.enableOption(categoryName, key);
                optionButton.style.color = "#ffffff";
                giveHoverAnimation(optionButton, new HoverOptions({ click: true }));
            }
        });
        optionButtons.push([key, optionButton]);
        avoidContent.appendChild(optionButton);
    }

    selectAllButton.addEventListener("click", () => {
        if (Options.categoryTrue(categoryName)) {
            Options.disableCategory(categoryName);
            selectAllButton.innerHTML = "Select All";
        } else {
            Options.enableCategory(categoryName);
            selectAllButton.innerHTML = "Deselect All";
        }
        for (let i = 0; i < optionButtons.length; i++) {
            const [key, optionButton] = optionButtons[i];
            if (Options.optionTrue(categoryName, key)) {
                optionButton.style.color = "#ffffff";
                giveHoverAnimation(optionButton);
            } else {
                optionButton.style.color = "#999999";
                giveHoverAnimation(optionButton, new HoverOptions({ scale: 70 }));
            }
        }
    });
}

function createFilter(
    optionsModalContentScrollWrapper: HTMLDivElement,
    tableBody: HTMLTableSectionElement
) {
    const filterTableRow = document.createElement("tr");

    const filterTableData = document.createElement("td");

    const filterModal = document.createElement("section");
    filterModal.className = "filter-modal";

    const filterModalContent = document.createElement("div");
    filterModalContent.className = "filter-modal-content";

    const filterSelectAllContainer = document.createElement("div");
    filterSelectAllContainer.className = "select-all-button-container";

    const filterSelectAll = document.createElement("div");
    filterSelectAll.className = "select-all-button";
    if (Options.Filter.AllTrue) {
        filterSelectAll.innerHTML = "Deselect All";
    } else {
        filterSelectAll.innerHTML = "Select All";
    }
    filterSelectAllContainer.appendChild(filterSelectAll);
    optionsModalContentScrollWrapper.insertBefore(
        filterSelectAllContainer,
        optionsModalContentScrollWrapper.childNodes[0]
    );
    filterModal.appendChild(filterModalContent);
    filterTableData.appendChild(filterModal);
    filterTableRow.appendChild(filterTableData);
    tableBody.appendChild(filterTableRow);

    const filterTable = document.createElement("table");
    filterModalContent.appendChild(filterTable);

    const filterTableBody = document.createElement("tbody");
    filterTable.appendChild(filterTableBody);

    const filterSelectGroup = document.createElement("tr");
    filterTableBody.appendChild(filterSelectGroup);

    const filterSelectOPs = document.createElement("tr");
    filterTableBody.appendChild(filterSelectOPs);

    const htmlSelectGroupButtons: [keyof typeof GROUPS, HTMLTableCellElement][] = [];
    const htmlSelectOpButtons: {
        [k in keyof typeof GROUPS]?: [AllOPNames, HTMLDivElement][];
    } = {};
    for (const nKey in GROUPS) {
        const key = nKey as keyof typeof GROUPS;
        const group = GROUPS[key];
        const groupSelectButton = document.createElement("td");
        groupSelectButton.className = "group-select";

        if (Options.Filter.GroupTrue(key)) {
            groupSelectButton.innerHTML = "Deselect All " + key;
        } else {
            groupSelectButton.innerHTML = "Select All " + key;
        }

        let makeGroupSelectButton = true;
        if (group.ops.length > 0) {
            htmlSelectOpButtons[key] = [];
            const item = htmlSelectOpButtons[key]!;
            const column1 = document.createElement("td");
            let column2 = null;
            if (group.ops.length > 1) {
                column2 = document.createElement("td");
                groupSelectButton.colSpan = 2;
            } else if (group.ops.length === 1) {
                groupSelectButton.colSpan = 1;
            } else {
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
                    (opButton.children.item(0) as HTMLImageElement).style.filter = "";
                    giveHoverAnimation(opButton);
                } else {
                    (opButton.children.item(0) as HTMLImageElement).style.filter =
                        "grayscale(100%)";
                    giveHoverAnimation(opButton, new HoverOptions({ scale: 70 }));
                }
                opButton.addEventListener("click", () => {
                    if (Options.Filter.OPTrue(key, op.name)) {
                        Options.Filter.deselectOP(key, op.name);
                        (opButton.children.item(0) as HTMLImageElement).style.filter =
                            "grayscale(100%)";
                        giveHoverAnimation(opButton, new HoverOptions({ click: true, scale: 70 }));
                    } else {
                        Options.Filter.selectOP(key, op.name);
                        (opButton.children.item(0) as HTMLImageElement).style.filter = "";
                        giveHoverAnimation(opButton, new HoverOptions({ click: true }));
                    }
                    for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                        const [key, element] = htmlSelectGroupButtons[i];
                        if (Options.Filter.GroupTrue(key)) {
                            element.innerHTML = "Deselect All " + key;
                        } else {
                            element.innerHTML = "Select All " + key;
                        }
                    }
                    if (Options.Filter.AllTrue) {
                        filterSelectAll.innerHTML = "Deselect All";
                    } else {
                        filterSelectAll.innerHTML = "Select All";
                    }
                });
                item.push([op.name, opButton]);
                if (column2 == null) {
                    column1.appendChild(opButton);
                } else {
                    if (i < halfLength) {
                        column1.appendChild(opButton);
                    } else {
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
                } else {
                    Options.Filter.selectGroup(key);
                    groupSelectButton.innerHTML = "Deselect All " + key;
                }
                if (Options.Filter.AllTrue) {
                    filterSelectAll.innerHTML = "Deselect All";
                } else {
                    filterSelectAll.innerHTML = "Select All";
                }
                const item = htmlSelectOpButtons[key];
                if (item !== undefined) {
                    for (let i = 0; i < item.length; i++) {
                        const [name, button] = item[i];
                        if (Options.Filter.OPTrue(key, name)) {
                            (button.children.item(0) as HTMLImageElement).style.filter = "";
                            giveHoverAnimation(button);
                        } else {
                            (button.children.item(0) as HTMLImageElement).style.filter =
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
            } else {
                Options.Filter.selectAll();
                filterSelectAll.innerHTML = "Deselect All";
            }
            for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                const [key, element] = htmlSelectGroupButtons[i];
                if (Options.Filter.GroupTrue(key)) {
                    element.innerHTML = "Deselect All " + key;
                } else {
                    element.innerHTML = "Select All " + key;
                }
            }
            for (const nKey in htmlSelectOpButtons) {
                const key = nKey as keyof typeof htmlSelectOpButtons;
                const item = htmlSelectOpButtons[key];
                if (item !== undefined) {
                    for (let i = 0; i < item.length; i++) {
                        const [name, button] = item[i];
                        if (Options.Filter.OPTrue(key, name)) {
                            (button.children.item(0) as HTMLImageElement).style.filter = "";
                            giveHoverAnimation(button);
                        } else {
                            (button.children.item(0) as HTMLImageElement).style.filter =
                                "grayscale(100%)";
                            giveHoverAnimation(button, new HoverOptions({ scale: 70 }));
                        }
                    }
                }
            }
        });
        giveHoverAnimation(filterSelectAll);
    } else {
        filterModalContent.removeChild(filterModalContent.childNodes[2]);
    }
}

class HoverOptions {
    imageElement?: HTMLImageElement;
    enterImg?: string;
    leaveImg?: string;
    transitionSec: number;
    click: boolean;
    animateOnTouch: boolean;
    scale: number;
    constructor(
        options: {
            imgInfo?: {
                element: HTMLImageElement;
                enterImg?: string;
                leaveImg?: string;
            };
            transitionSec?: number;
            click?: boolean;
            animateOnTouch?: boolean;
            scale?: number;
        } = {
            transitionSec: 0.13,
            animateOnTouch: false,
            click: false,
            scale: 90,
        }
    ) {
        this.imageElement = options.imgInfo ? options.imgInfo.element : undefined;
        this.enterImg = options.imgInfo ? options.imgInfo.enterImg : undefined;
        this.leaveImg = options.imgInfo ? options.imgInfo.leaveImg : undefined;
        this.transitionSec = options.transitionSec ?? 0.13;
        this.animateOnTouch = options.animateOnTouch ?? false;
        this.click = options.click ?? false;
        this.scale = options.scale ?? 90;
    }
}

function giveHoverAnimation(element: HTMLElement, options: HoverOptions = new HoverOptions()) {
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
        } else {
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

function groupButtonClicked(key: string) {
    sessionStorage.setItem("group", key);
    sessionStorage.setItem("roll", "1");
}

async function changeLink(link: string) {
    window.location = link as unknown as Location;
}

main();
//#endregion
