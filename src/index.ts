import { GROUPS } from "./ops.js";

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

const GROUP_CONTAINER = document
    .getElementsByClassName("group-modal-content")
    .item(0) as HTMLDivElement;
function main() {
    createFilter();
    const group_keys = Object.keys(GROUPS);
    for (let i = 0; i < group_keys.length; i++) {
        const key = group_keys[i];
        const group = GROUPS[key];

        const html_countainer = document.createElement<"div">("div");
        html_countainer.className = "container";
        html_countainer.innerHTML += key;

        const html_options = document.createElement<"a">("a");
        html_options.href = "options.html";

        const html_group = document.createElement<"img">("img");
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
        GROUP_CONTAINER.appendChild(html_countainer);
    }
}

function createFilter() {
    const FILTER_MODAL_CONTENT = document
        .getElementsByClassName("filter-modal-content")
        .item(0) as HTMLDivElement;
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

function groupButtonClicked(key: string) {
    localStorage.setItem("group", key);
}

main();
//#endregion
