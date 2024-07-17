import { GROUPS } from "./ops.js";
import Options, { OptionsParse } from "./utils/options.js";

declare global {
    interface String {
        get domURL(): string;
    }
}
Object.defineProperty(String.prototype, "domURL", {
    get() {
        return `url(${this})`;
    },
});
function isScrollable(
    element: HTMLElement,
    dir: "vertical" | "horizontal"
): boolean {
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
    createGroupButtons();
    createFilter();
    createOptions();
}

function createGroupButtons() {
    const GROUP_MODAL = document.createElement("section");
    GROUP_MODAL.className = "group-modal";
    const GROUP_MODAL_CONTENT = document.createElement("div");
    GROUP_MODAL_CONTENT.className = "group-modal-content";
    const group_keys = Object.keys(GROUPS);
    for (let i = 0; i < group_keys.length; i++) {
        const key = group_keys[i];
        const group = GROUPS[key];

        const html_countainer = document.createElement("div");
        html_countainer.className = "container";
        html_countainer.innerHTML += key;

        const html_op = document.createElement("a");
        html_op.draggable = false;
        html_op.href = "op.html";

        const html_group = document.createElement("img");
        html_group.className = "group-button";
        html_group.draggable = false;
        const html_images = group.fetch_html_images();
        if (
            html_images.normalIcon !== undefined &&
            html_images.hoverIcon !== undefined
        ) {
            html_group.addEventListener("mouseenter", () => {
                html_group.src = html_images.hoverIcon!;
            });
            html_group.addEventListener("mouseleave", () => {
                html_group.src = html_images.normalIcon!;
            });
        }
        html_op.addEventListener("click", () => {
            groupButtonClicked(key);
        });
        if (!(i >= group_keys.length - 1)) {
            html_countainer.style.marginRight = "10%";
        }
        const first_icon = html_images.normalIcon ?? html_images.hoverIcon;
        if (first_icon != undefined) {
            html_group.src = first_icon;
        }
        html_group.alt = key + " Icon";
        html_op.appendChild(html_group);
        html_countainer.appendChild(html_op);
        GROUP_MODAL_CONTENT.appendChild(html_countainer);
    }
    GROUP_MODAL.appendChild(GROUP_MODAL_CONTENT);
    document.body.insertBefore(GROUP_MODAL, document.body.childNodes[2]);
}

function createFilter() {
    const MAIN = document.createElement("section");
    MAIN.style.background = "#444444";

    document.body.insertBefore(MAIN, document.body.childNodes[2]);

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
    } else {
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

    const htmlSelectGroupButtons: [string, HTMLTableCellElement][] = [];
    const htmlSelectOpButtons: {
        [k: string]: [string, HTMLDivElement][];
    } = {};
    for (const key in GROUPS) {
        const group = GROUPS[key];
        const GROUP_SELECT_BUTTON = document.createElement("td");
        GROUP_SELECT_BUTTON.className = "group-select";

        if (Options.Filter.GroupTrue(key)) {
            GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + key;
        } else {
            GROUP_SELECT_BUTTON.innerHTML = "Select All " + key;
        }

        let makeGroupSelectButton = true;
        if (group.ops.length > 0) {
            htmlSelectOpButtons[key] = [];
            const column1 = document.createElement("td");
            let column2 = null;
            if (group.ops.length > 1) {
                column2 = document.createElement("td");
                GROUP_SELECT_BUTTON.colSpan = 2;
            } else if (group.ops.length === 1) {
                GROUP_SELECT_BUTTON.colSpan = 1;
            } else {
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
                    (
                        OP_BUTTON.children.item(0) as HTMLImageElement
                    ).style.filter = "";
                    giveHoverAnimation(OP_BUTTON);
                } else {
                    (
                        OP_BUTTON.children.item(0) as HTMLImageElement
                    ).style.filter = "grayscale(100%)";
                    giveHoverAnimation(OP_BUTTON, false, 70);
                }
                OP_BUTTON.addEventListener("click", () => {
                    if (Options.Filter.OPTrue(key, op.name)) {
                        Options.Filter.deselectOP(key, op.name);
                        (
                            OP_BUTTON.children.item(0) as HTMLImageElement
                        ).style.filter = "grayscale(100%)";
                        giveHoverAnimation(OP_BUTTON, true, 70);
                    } else {
                        Options.Filter.selectOP(key, op.name);
                        (
                            OP_BUTTON.children.item(0) as HTMLImageElement
                        ).style.filter = "";
                        giveHoverAnimation(OP_BUTTON, true);
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
                        FILTER_SELECT_ALL.innerHTML = "Deselect All";
                    } else {
                        FILTER_SELECT_ALL.innerHTML = "Select All";
                    }
                });
                htmlSelectOpButtons[key].push([op.name, OP_BUTTON]);
                if (column2 == null) {
                    column1.appendChild(OP_BUTTON);
                } else {
                    if (i < halfLength) {
                        column1.appendChild(OP_BUTTON);
                    } else {
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
                } else {
                    Options.Filter.selectGroup(key);
                    GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + key;
                }
                if (Options.Filter.AllTrue) {
                    FILTER_SELECT_ALL.innerHTML = "Deselect All";
                } else {
                    FILTER_SELECT_ALL.innerHTML = "Select All";
                }
                if (htmlSelectOpButtons[key] !== undefined) {
                    for (let i = 0; i < htmlSelectOpButtons[key].length; i++) {
                        const [name, button] = htmlSelectOpButtons[key][i];
                        if (Options.Filter.OPTrue(key, name)) {
                            (
                                button.children.item(0) as HTMLImageElement
                            ).style.filter = "";
                            giveHoverAnimation(button);
                        } else {
                            (
                                button.children.item(0) as HTMLImageElement
                            ).style.filter = "grayscale(100%)";
                            giveHoverAnimation(button, false, 70);
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
            } else {
                Options.Filter.selectAll();
                FILTER_SELECT_ALL.innerHTML = "Deselect All";
            }
            for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                const [key, element] = htmlSelectGroupButtons[i];
                if (Options.Filter.GroupTrue(key)) {
                    element.innerHTML = "Deselect All " + key;
                } else {
                    element.innerHTML = "Select All " + key;
                }
            }
            for (const key in htmlSelectOpButtons) {
                for (let i = 0; i < htmlSelectOpButtons[key].length; i++) {
                    const [name, button] = htmlSelectOpButtons[key][i];
                    if (Options.Filter.OPTrue(key, name)) {
                        (
                            button.children.item(0) as HTMLImageElement
                        ).style.filter = "";
                        giveHoverAnimation(button);
                    } else {
                        (
                            button.children.item(0) as HTMLImageElement
                        ).style.filter = "grayscale(100%)";
                        giveHoverAnimation(button, false, 70);
                    }
                }
            }
        });
        giveHoverAnimation(FILTER_SELECT_ALL);
    } else {
        FILTER_MODAL_CONTENT.removeChild(FILTER_MODAL_CONTENT.childNodes[2]);
    }

    if (isScrollable(FILTER_MODAL_CONTENT, "horizontal")) {
        let pre_left: number | null = null;
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
    } else {
        FILTER_MODAL_CONTENT.style.overflowX = "hidden";
    }
    if (isScrollable(FILTER_MODAL_CONTENT, "vertical")) {
        FILTER_MODAL_CONTENT.style.overflowY = "scroll";
    } else {
        FILTER_MODAL_CONTENT.style.overflowY = "hidden";
    }
    window.addEventListener("resize", () => {
        if (isScrollable(FILTER_MODAL_CONTENT, "horizontal")) {
            let pre_left: number | null = null;
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
        } else {
            FILTER_MODAL_CONTENT.style.overflowX = "hidden";
        }
        if (isScrollable(FILTER_MODAL_CONTENT, "vertical")) {
            FILTER_MODAL_CONTENT.style.overflowY = "scroll";
        } else {
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
    } else {
        TABLE_DATA_2.style.color = "#999999";
        giveHoverAnimation(TABLE_DATA_2, false, 70);
    }
    TABLE_DATA_2.addEventListener("click", () => {
        if (Options.options[OptionsParse[key]] === undefined) {
            Options.setOption(OptionsParse[key], false);
            TABLE_DATA_2.style.color = "#999999";
            giveHoverAnimation(TABLE_DATA_2, true, 70);
        } else {
            Options.removeOption(OptionsParse[key]);
            TABLE_DATA_2.style.color = "#ffffff";
            giveHoverAnimation(TABLE_DATA_2, true);
        }
    });

    TABLE_ROW_1.appendChild(TABLE_DATA_1);
    TABLE_ROW_2.appendChild(TABLE_DATA_2);
    TABLE_BODY.appendChild(TABLE_ROW_1);
    TABLE_BODY.appendChild(TABLE_ROW_2);
    TABLE.appendChild(TABLE_BODY);
    OPTIONS_MODAL.appendChild(TABLE);
    document.body.insertBefore(OPTIONS_MODAL, document.body.childNodes[2]);
}

function giveHoverAnimation(
    element: HTMLElement,
    click = false,
    scale: number = 90
) {
    if (click) {
        element.style.transform = `scale(${scale + 10}%)`;
    } else {
        element.style.transform = `scale(${scale}%)`;
    }
    element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.13s ease-in-out";
        element.style.transform = `scale(${scale + 10}%)`;
    });
    element.addEventListener("mouseleave", () => {
        element.style.transition = "transform 0.13s ease-in-out";
        element.style.transform = `scale(${scale}%)`;
    });
}

function groupButtonClicked(key: string) {
    localStorage.setItem("group", key);
}

main();
//#endregion
