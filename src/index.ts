import { GROUPS } from "./ops.js";
import Filter from "./utils/filter.js";
/*
<section class="filter-modal">
    <div class="filter-modal-content">
        <h1>Filter</h1>
        <p>Filters will be saved in a cookie</p>
        <button>Select All</button>
        <table>
            <tbody>
                <tr>
                    <td colspan="2">
                        <button>Select Attackers</button>
                    </td>
                    <td colspan="2">
                        <button>Select Defenders</button>
                    </td>
                </tr>
                <tr>
                    <td id="attackers-column-1">
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Ash_Icon.png"
                                alt="Ash"
                            />
                            Ash
                        </div>
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Ash_Icon.png"
                                alt="Ash"
                            />
                            Ash
                        </div>
                    </td>
                    <td id="attackers-column-2">
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Ash_Icon.png"
                                alt="Ash"
                            />
                            Ash
                        </div>
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Ash_Icon.png"
                                alt="Ash"
                            />
                            Ash
                        </div>
                    </td>
                    <td id="defenders-column-1">
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Alibi_Icon.webp"
                                alt="Ash"
                            />
                            Alibi
                        </div>
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Alibi_Icon.webp"
                                alt="Ash"
                            />
                            Alibi
                        </div>
                    </td>
                    <td id="defenders-column-2">
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Alibi_Icon.webp"
                                alt="Ash"
                            />
                            Alibi
                        </div>
                        <div id="ash">
                            <img
                                src="assets/Siege-Rando-Images/OPIcons/Alibi_Icon.webp"
                                alt="Ash"
                            />
                            Alibi
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
*/
//#region Main
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

        const html_options = document.createElement("a");
        html_options.href = "options.html";

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
        html_options.addEventListener("click", () => {
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
        html_options.appendChild(html_group);
        html_countainer.appendChild(html_options);
        GROUP_MODAL_CONTENT.appendChild(html_countainer);
    }
    GROUP_MODAL.appendChild(GROUP_MODAL_CONTENT);
    document.body.insertBefore(GROUP_MODAL, document.body.childNodes[2]);
}

function createFilter() {
    const FILTER_MODAL = document.createElement("section");
    FILTER_MODAL.className = "filter-modal";
    document.body.insertBefore(FILTER_MODAL, document.body.childNodes[2]);

    const FILTER_MODAL_CONTENT = document.createElement("div");
    FILTER_MODAL_CONTENT.className = "filter-modal-content";
    FILTER_MODAL.appendChild(FILTER_MODAL_CONTENT);

    const FILTER_HEADER = document.createElement("h1");
    FILTER_HEADER.innerHTML = "Filter";
    FILTER_MODAL_CONTENT.appendChild(FILTER_HEADER);

    const FILTER_P = document.createElement("p");
    FILTER_P.innerHTML = "Filters will be saved in a cookie";
    FILTER_MODAL_CONTENT.appendChild(FILTER_P);

    const FILTER_SELECT_ALL = document.createElement("button");
    if (Filter.AllTrue) {
        FILTER_SELECT_ALL.innerHTML = "Deselect All";
    } else {
        FILTER_SELECT_ALL.innerHTML = "Select All";
    }
    giveHoverAnimation(FILTER_SELECT_ALL);
    FILTER_MODAL_CONTENT.appendChild(FILTER_SELECT_ALL);

    const FILTER_TABLE = document.createElement("table");
    FILTER_MODAL_CONTENT.appendChild(FILTER_TABLE);

    const FILTER_TABLE_BODY = document.createElement("tbody");
    FILTER_TABLE.appendChild(FILTER_TABLE_BODY);

    const FILTER_SELECT_GROUP = document.createElement("tr");
    FILTER_TABLE_BODY.appendChild(FILTER_SELECT_GROUP);

    const FILTER_SELECT_OPS = document.createElement("tr");
    FILTER_TABLE_BODY.appendChild(FILTER_SELECT_OPS);

    const htmlSelectGroupButtons: [string, HTMLButtonElement][] = [];
    for (const g_key in GROUPS) {
        const group = GROUPS[g_key];
        const GROUP_SELECT = document.createElement("td");
        GROUP_SELECT.colSpan = 2;
        FILTER_SELECT_GROUP.appendChild(GROUP_SELECT);

        const GROUP_SELECT_BUTTON = document.createElement("button");
        if (Filter.GroupTrue(g_key)) {
            GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + g_key;
        } else {
            GROUP_SELECT_BUTTON.innerHTML = "Select All " + g_key;
        }
        giveHoverAnimation(GROUP_SELECT_BUTTON);
        GROUP_SELECT_BUTTON.addEventListener("click", () => {
            if (Filter.GroupTrue(g_key)) {
                Filter.delectGroup(g_key);
            } else {
                Filter.selectGroup(g_key);
            }
            if (Filter.GroupTrue(g_key)) {
                GROUP_SELECT_BUTTON.innerHTML = "Deselect All " + g_key;
            } else {
                GROUP_SELECT_BUTTON.innerHTML = "Select All " + g_key;
            }
            if (Filter.AllTrue) {
                FILTER_SELECT_ALL.innerHTML = "Deselect All";
            } else {
                FILTER_SELECT_ALL.innerHTML = "Select All";
            }
        });
        htmlSelectGroupButtons.push([g_key, GROUP_SELECT_BUTTON]);
        GROUP_SELECT.appendChild(GROUP_SELECT_BUTTON);
        const halfLength = Math.ceil(group.ops.length / 2);
        for (let i = 0; i < group.ops.length; i++) {
            const op = group.ops[i];
            if (i < halfLength) {
            }
        }
    }
    FILTER_SELECT_ALL.addEventListener("click", () => {
        if (Filter.AllTrue) {
            Filter.deselectAll();
        } else {
            Filter.selectAll();
        }
        if (Filter.AllTrue) {
            FILTER_SELECT_ALL.innerHTML = "Deselect All";
        } else {
            FILTER_SELECT_ALL.innerHTML = "Select All";
        }
        for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
            const [key, element] = htmlSelectGroupButtons[i];
            if (Filter.GroupTrue(key)) {
                element.innerHTML = "Deselect All " + key;
            } else {
                element.innerHTML = "Select All " + key;
            }
        }
    });

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

function giveHoverAnimation(element: HTMLElement) {
    element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.13s ease-in-out";
        element.style.transform = "scale(110%)";
    });
    element.addEventListener("mouseleave", () => {
        element.style.transition = "transform 0.13s ease-in-out";
        element.style.transform = "scale(100%)";
    });
}

function groupButtonClicked(key: string) {
    localStorage.setItem("group", key);
}

main();
//#endregion
