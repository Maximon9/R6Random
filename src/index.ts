import { GROUPS } from "./ops.js";
import { GroupInfo } from "./utils/group.js";

/*
<div class="container">
    Attackers
    <img
        class="group-button"
        draggable="false"
        src="assets/Siege-Rando-Images/GroupIcons/Attackers_Icon.svg"
        alt="Attacker Icon"
    ></img>
</div>
<div class="container">
    Defenders
    <img
        class="group-button"
        draggable="false"
        src="assets/Siege-Rando-Images/GroupIcons/Defenders_Icon.svg"
        alt="Defenders Icon"
    ></img>
</div>
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

const GROUP_CONTAINER = document.getElementById(
    "group-container"
) as HTMLDivElement;
function main() {
    const group_keys = Object.keys(GROUPS);
    for (let i = 0; i < group_keys.length; i++) {
        const key = group_keys[i];
        const group = GROUPS[key];
        const html_countainer = document.createElement<"div">("div");
        html_countainer.className = "container";
        html_countainer.innerHTML += key;
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
        html_group.addEventListener("click", () => {
            groupButtonClicked(key, group, html_group);
        });
        if (!(i >= group_keys.length - 1)) {
            html_countainer.style.marginRight = "10%";
        }
        const first_icon = html_images.normalIcon ?? html_images.hoverIcon;
        if (first_icon != undefined) {
            html_group.src = first_icon;
        }
        html_group.alt = key + " Icon";
        const html_options = document.createElement<"a">("a");
        html_options.href = "options.html";
        html_options.appendChild(html_group);
        html_countainer.appendChild(html_options);
        GROUP_CONTAINER.appendChild(html_countainer);
    }
}

function groupButtonClicked(
    key: string,
    group: GroupInfo,
    html_group: HTMLImageElement
) {
    console.log(key);
}

// async function SetAllOPS() {}
function randomize(type: string) {}
main();
//#endregion
