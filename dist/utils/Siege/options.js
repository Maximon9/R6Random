import { ElementAnimator } from "../animation/animation.js";
import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../../ops.js";
import { createElement } from "../html.js";
// import { tryGiveHoverAnimation } from "../html.js";
export const OptionCategories = {
    "Try Avoid Dupes": "0",
};
export const OptionCategoriesRev = {
    "0": "Try Avoid Dupes",
};
export const CategoryOptions = {
    "0": {
        OPs: "0",
        Equipment: "1",
        "Primary Weapons": "2",
        "Primary Sights": "3",
        "Primary Grips": "4",
        "Primary Barrels": "5",
        "Primary UnderBarrels": "6",
        "Secondary Weapons": "7",
        "Secondary Sights": "8",
        "Secondary Grips": "9",
        "Secondary Barrels": "10",
        "Secondary UnderBarrels": "11",
    },
};
export const CategoryOptionsRev = {
    "0": {
        "0": "OPs",
        "1": "Equipment",
        "2": "Primary Weapons",
        "3": "Primary Sights",
        "4": "Primary Grips",
        "5": "Primary Barrels",
        "6": "Primary UnderBarrels",
        "7": "Secondary Weapons",
        "8": "Secondary Sights",
        "9": "Secondary Grips",
        "10": "Secondary Barrels",
        "11": "Secondary UnderBarrels",
    },
};
export default class Options {
    /* static #IsUsingTouchScreen?: boolean;
    static get usingTouchScreen(): boolean {
        if (this.#IsUsingTouchScreen === undefined) {
            window.addEventListener("touchstart", () => {
                if (this.#IsUsingTouchScreen !== true) {
                    this.#IsUsingTouchScreen = true;
                }
            });
            window.addEventListener("mousemove", () => {
                if (this.#IsUsingTouchScreen !== false) {
                    this.#IsUsingTouchScreen = false;
                }
            });
            window.addEventListener("mousedown", () => {
                if (this.#IsUsingTouchScreen !== false) {
                    this.#IsUsingTouchScreen = false;
                }
            });
            window.addEventListener("mouseup", () => {
                if (this.#IsUsingTouchScreen !== false) {
                    this.#IsUsingTouchScreen = false;
                }
            });
            if (this.#IsUsingTouchScreen === undefined) {
                return window.matchMedia("(pointer: coarse)").matches;
            } else {
                return this.#IsUsingTouchScreen;
            }
        } else {
            return this.#IsUsingTouchScreen;
        }
    } */
    static options = {};
    static Filter = class {
        static filter = {};
        static parseFilterCookie(cookie) {
            const group_vars = cookie.split("%");
            for (let i = 0; i < group_vars.length; i++) {
                const g_v = group_vars[i];
                const [g_key, g_value] = g_v.split("#");
                if (g_key !== undefined && g_value !== undefined) {
                    if (this.filter[g_key] === undefined) {
                        this.filter[g_key] = {};
                    }
                    const vars = g_value.split("|");
                    for (let i = 0; i < vars.length; i++) {
                        const v = vars[i];
                        const [key, value] = v.split(":");
                        if (key !== undefined && value !== undefined) {
                            let group = this.filter[g_key];
                            if (group === undefined) {
                                group = this.filter[g_key] = {};
                            }
                            group[key] = Boolean(Number(value));
                        }
                    }
                }
            }
        }
        static toString() {
            let str = "";
            const keys = Object.keys(this.filter);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = this.filter[key];
                if (value !== undefined) {
                    const op_keys = Object.keys(value);
                    str += `${key}#`;
                    for (let i1 = 0; i1 < op_keys.length; i1++) {
                        const op_key = op_keys[i1];
                        const op_value = value[op_key];
                        if (i1 < op_keys.length - 1) {
                            str += `${op_key}:${op_value ? 1 : 0}|`;
                        }
                        else {
                            str += `${op_key}:${op_value ? 1 : 0}`;
                        }
                    }
                    if (i < keys.length - 1)
                        str += `%`;
                }
            }
            return str;
        }
        static get AllTrue() {
            let key;
            for (key in this.filter) {
                const value = this.filter[key];
                if (value !== undefined) {
                    let op_key;
                    for (op_key in value) {
                        if (value[op_key] === false) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        static GroupTrue(key) {
            const value = this.filter[GroupParseKeys[key]];
            if (value === undefined) {
                return true;
            }
            else {
                let op_key;
                for (op_key in value) {
                    if (value[op_key] === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        static GroupFalse(key) {
            const og_key = key;
            const nKey = GroupParseKeys[key];
            const value = this.filter[nKey];
            if (value === undefined) {
                return false;
            }
            else {
                const group = GROUPS[og_key];
                for (let i = 0; i < group.ops.length; i++) {
                    const op = group.ops[i];
                    if (value[OPParseKeys[nKey][op.name]] === undefined) {
                        return false;
                    }
                }
            }
            return true;
        }
        static OPTrue(groupKey, key) {
            const nGroupKey = GroupParseKeys[groupKey];
            const value = this.filter[nGroupKey];
            if (value === undefined) {
                return true;
            }
            else {
                const nKey = OPParseKeys[nGroupKey][key];
                let item = value[nKey];
                if (item === undefined) {
                    return true;
                }
                else {
                    return item;
                }
            }
        }
        static #changeAllFilterValues(select) {
            if (select) {
                for (const key in this.filter) {
                    this.#changeAGroup(key, select, false);
                }
            }
            else {
                let key;
                for (key in GROUPS) {
                    this.#changeAGroup(GroupParseKeys[key], select, false);
                }
            }
            Options.#setCookie();
        }
        static #changeAGroup(key, select, setCookie = true) {
            let value = this.filter[key];
            let changeOPs = true;
            if (select) {
                if (value === undefined) {
                    changeOPs = false;
                }
            }
            else {
                if (value === undefined) {
                    value = this.filter[key] = {};
                }
            }
            if (changeOPs) {
                if (select) {
                    for (const op_key in value) {
                        this.#changeOP(key, op_key, select, false);
                    }
                }
                else {
                    const group = GROUPS[GroupParseKeysRev[key]];
                    for (let i = 0; i < group.ops.length; i++) {
                        const op = group.ops[i];
                        this.#changeOP(key, OPParseKeys[key][op.name], select, false);
                    }
                }
            }
            if (setCookie) {
                Options.#setCookie();
            }
        }
        static #changeOP(groupKey, key, select, setCookie = true) {
            let value = this.filter[groupKey];
            if (select) {
                if (value !== undefined) {
                    if (value[key] !== undefined) {
                        delete value[key];
                        if (Object.keys(value).length <= 0) {
                            delete this.filter[groupKey];
                        }
                    }
                }
            }
            else {
                if (value === undefined) {
                    value = this.filter[groupKey] = {};
                }
                value[key] = select;
            }
            if (setCookie) {
                Options.#setCookie();
            }
        }
        static selectOP(groupKey, key) {
            const nGroupKey = GroupParseKeys[groupKey];
            this.#changeOP(nGroupKey, OPParseKeys[nGroupKey][key], true);
        }
        static deselectOP(groupKey, key) {
            const nGroupKey = GroupParseKeys[groupKey];
            this.#changeOP(nGroupKey, OPParseKeys[nGroupKey][key], false);
        }
        static selectAll() {
            this.#changeAllFilterValues(true);
        }
        static deselectAll() {
            this.#changeAllFilterValues(false);
        }
        static selectGroup(key) {
            this.#changeAGroup(GroupParseKeys[key], true);
        }
        static delectGroup(key) {
            this.#changeAGroup(GroupParseKeys[key], false);
        }
    };
    static #setCookie() {
        const filter = this.Filter.toString();
        const options = this.toString();
        if (options === "" && filter !== "") {
            document.cookie = filter;
        }
        else if (options !== "" && filter === "") {
            document.cookie = "$" + options;
        }
        else if (options !== "" && filter !== "") {
            document.cookie = filter + "$" + options;
        }
        else {
            document.cookie = "Null";
        }
        console.log(document.cookie);
    }
    static optionTrue(categoryName, key) {
        const nCategoryName = OptionCategories[categoryName];
        const category = this.options[nCategoryName];
        if (category === undefined || category[CategoryOptions[nCategoryName][key]] === undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    static categoryTrue(categoryName) {
        const category = this.options[OptionCategories[categoryName]];
        if (category === undefined) {
            return true;
        }
        else {
            let key;
            for (key in category) {
                if (category[key] === false) {
                    return false;
                }
            }
        }
        return true;
    }
    static #changeCategory(categoryName, enable, setCookie = true) {
        let category = this.options[categoryName];
        let changeOptions = true;
        if (enable) {
            if (category === undefined) {
                changeOptions = false;
            }
        }
        else {
            if (category === undefined) {
                category = this.options[categoryName] = {};
            }
        }
        if (changeOptions) {
            if (enable) {
                for (const key in category) {
                    this.#changeOption(categoryName, key, enable, false);
                }
            }
            else {
                for (const key in CategoryOptionsRev[categoryName]) {
                    this.#changeOption(categoryName, key, enable, false);
                }
            }
        }
        if (setCookie) {
            Options.#setCookie();
        }
    }
    static #changeOption(categoryName, key, enable, setCookie = true) {
        let category = this.options[categoryName];
        if (enable) {
            if (category !== undefined) {
                if (category[key] !== undefined) {
                    delete category[key];
                    if (Object.keys(category).length <= 0) {
                        delete this.options[categoryName];
                    }
                }
            }
        }
        else {
            if (category === undefined) {
                category = this.options[categoryName] = {};
            }
            category[key] = enable;
        }
        if (setCookie) {
            Options.#setCookie();
        }
    }
    static enableCategory(categoryName) {
        const nCategoryName = OptionCategories[categoryName];
        this.#changeCategory(nCategoryName, true);
    }
    static disableCategory(categoryName) {
        const nCategoryName = OptionCategories[categoryName];
        this.#changeCategory(nCategoryName, false);
    }
    static enableOption(categoryName, key) {
        const nCategoryName = OptionCategories[categoryName];
        const nKey = CategoryOptions[nCategoryName][key];
        this.#changeOption(nCategoryName, nKey, true);
    }
    static disableOption(categoryName, key) {
        const nCategoryName = OptionCategories[categoryName];
        const nKey = CategoryOptions[nCategoryName][key];
        this.#changeOption(nCategoryName, nKey, false);
    }
    static parseCookie() {
        const cookies = document.cookie.split("$");
        if (cookies.length > 0) {
            this.Filter.parseFilterCookie(cookies[0]);
            if (cookies.length > 1) {
                const categories = cookies[1].split("%");
                for (let i = 0; i < categories.length; i++) {
                    const categoryString = categories[i];
                    const [key, value] = categoryString.split("#");
                    if (key !== undefined && value !== undefined) {
                        const vars = value.split("|");
                        for (let i1 = 0; i1 < vars.length; i1++) {
                            const [vKey, vValue] = vars[i1].split(":");
                            if (vKey !== undefined && vValue !== undefined) {
                                let category = this.options[key];
                                if (category === undefined) {
                                    category = this.options[key] = {};
                                }
                                category[vKey] = Boolean(Number(vValue));
                            }
                        }
                    }
                }
            }
        }
    }
    static toString() {
        let str = "";
        const keys = Object.keys(this.options);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = this.options[key];
            if (value !== undefined) {
                str += `${key}#`;
                const vKeys = Object.keys(value);
                for (let i1 = 0; i1 < vKeys.length; i1++) {
                    const vKey = vKeys[i1];
                    const vValue = value[vKey];
                    if (vValue !== undefined) {
                        if (i1 < vKeys.length - 1) {
                            str += `${vKey}:${vValue ? 1 : 0}|`;
                        }
                        else {
                            str += `${vKey}:${vValue ? 1 : 0}`;
                        }
                    }
                }
                if (i < keys.length - 1) {
                    str += `%`;
                }
            }
        }
        return str;
    }
}
export function isScrollable(element, dir) {
    if (dir === "vertical") {
        return element.scrollHeight > element.clientHeight;
    }
    else {
        return element.scrollWidth > element.clientWidth;
    }
}
export function createOptions(parentElement, insert, makePopup = true) {
    const optionsModal = createElement("html", "section");
    const htmls = [];
    if (makePopup) {
        /* <span aria-hidden="true">&times;</span> */
        const exitContainer = createElement("html", "div");
        exitContainer.className = "exit-options-container";
        const exitButton = createElement("html", "div");
        exitButton.className = "exit-options";
        exitButton.innerHTML += "&times;";
        const animator = new ElementAnimator(exitButton, {
            duration: 150,
            fill: "both",
            easing: "ease-in-out",
        });
        exitButton.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                animator.setKeyFrames([{ scale: "110%" }]);
                animator.play();
            }
        });
        exitButton.addEventListener("pointerleave", (event) => {
            if (event.pointerType !== "touch") {
                animator.setKeyFrames([{ scale: "100%" }]);
                animator.play();
            }
        });
        optionsModal.style.display = "none";
        optionsModal.style.zIndex = "5";
        optionsModal.style.position = "fixed";
        optionsModal.style.top = "0";
        optionsModal.style.bottom = "0";
        optionsModal.style.left = "0";
        optionsModal.style.right = "0";
        optionsModal.style.width = "100%";
        optionsModal.style.height = "100%";
        optionsModal.style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        optionsModal.style.overflow = "auto";
        exitContainer.appendChild(exitButton);
        optionsModal.appendChild(exitContainer);
        htmls.push({ element: optionsModal }, {
            element: exitButton,
            display: "flex",
            animator: animator,
        });
    }
    optionsModal.className = "options-modal";
    const optionsLabel = createElement("html", "h1");
    optionsLabel.innerHTML = "Options";
    const optionsFooter = createElement("html", "p");
    optionsFooter.innerHTML = "Options are saved in cookies";
    const optionsModalContent = createElement("html", "div");
    optionsModalContent.className = "options-modal-content";
    const optionsModalContentScrollWrapper = createElement("html", "div");
    optionsModalContentScrollWrapper.className = "options-modal-content-scroll-wrapper";
    const table = createElement("html", "table");
    const tableBody = createElement("html", "tbody");
    optionsLabel.appendChild(optionsFooter);
    optionsModal.appendChild(optionsLabel);
    optionInfos = {
        Filter: { htmls: createFilter(optionsModalContentScrollWrapper, tableBody), on: false },
        "Try Avoid Dupes": {
            htmls: createTryAvoidOptions(optionsModalContentScrollWrapper, tableBody),
            on: false,
        },
    };
    createOptionsNavBar(optionsModal, makePopup);
    table.appendChild(tableBody);
    optionsModal.appendChild(optionsModalContent);
    optionsModalContentScrollWrapper.appendChild(table);
    optionsModalContent.appendChild(optionsModalContentScrollWrapper);
    parentElement.insertBefore(optionsModal, parentElement.childNodes[insert]);
    if (isScrollable(optionsModalContentScrollWrapper, "horizontal")) {
        let pre_left = null;
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
    }
    else {
        optionsModalContentScrollWrapper.style.overflowX = "hidden";
    }
    if (isScrollable(optionsModalContentScrollWrapper, "vertical")) {
        optionsModalContentScrollWrapper.style.overflowY = "scroll";
    }
    else {
        optionsModalContentScrollWrapper.style.overflowY = "hidden";
    }
    window.addEventListener("resize", () => {
        if (isScrollable(optionsModalContentScrollWrapper, "horizontal")) {
            let pre_left = null;
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
        }
        else {
            optionsModalContentScrollWrapper.style.overflowX = "hidden";
        }
        if (isScrollable(optionsModalContentScrollWrapper, "vertical")) {
            optionsModalContentScrollWrapper.style.overflowY = "scroll";
        }
        else {
            optionsModalContentScrollWrapper.style.overflowY = "hidden";
        }
    });
    return htmls;
}
export let optionsInfo = {};
export function changeOptionsDisplay(type) {
    if (type === "show") {
        if (optionsInfo !== undefined) {
            document.body.style.overflow = "hidden";
            for (let i = 0; i < optionsInfo.htmls.length; i++) {
                const { element, display } = optionsInfo.htmls[0];
                element.style.display = display ?? "";
                optionsInfo.on = true;
            }
        }
    }
    else {
        if (optionsInfo !== undefined) {
            document.body.style.overflow = "auto";
            for (let i = 0; i < optionsInfo.htmls.length; i++) {
                const { element } = optionsInfo.htmls[0];
                element.style.display = "none";
                optionsInfo.on = false;
            }
        }
    }
}
export let optionInfos = undefined;
export function createOptionsNavBar(optionsModal, makePopup) {
    if (optionInfos !== undefined) {
        const navBar = createElement("html", "div");
        navBar.className = "nav-bar";
        const navButtons = [];
        for (const n in optionInfos) {
            const name = n;
            const navButton = createElement("html", "button");
            if (makePopup) {
                navButton.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
            }
            navButton.innerHTML = name;
            navButton.style.background = "transparent";
            const animator = new ElementAnimator(navButton, {
                duration: 300,
                fill: "both",
                easing: "ease-in-out",
            });
            navButton.addEventListener("pointerenter", (event) => {
                if (event.pointerType !== "touch") {
                    if (!optionInfos[name].on) {
                        if (makePopup) {
                            animator.setKeyFrames([{ background: "rgba(51, 51, 51, 0.8)" }]);
                        }
                        else {
                            animator.setKeyFrames([{ background: "rgba(51, 51, 51, 1)" }]);
                        }
                    }
                    animator.play();
                }
            });
            navButton.addEventListener("pointerleave", (event) => {
                if (event.pointerType !== "touch") {
                    if (!optionInfos[name].on) {
                        animator.setKeyFrames([{ background: "transparent" }]);
                        animator.play();
                    }
                }
            });
            navButtons.push([name, animator, navButton]);
            navBar.appendChild(navButton);
        }
        for (let i = 0; i < navButtons.length; i++) {
            const [name, animator, navButton] = navButtons[i];
            navButton.addEventListener("pointerup", (event) => {
                if (event.button === 0) {
                    const optionInfo = optionInfos[name];
                    optionInfo.on = true;
                    for (let i = 0; i < navButtons.length; i++) {
                        const [key, animator1, _] = navButtons[i];
                        if (key !== name) {
                            const optionInfo1 = optionInfos[key];
                            optionInfo1.on = false;
                            for (let i = 0; i < optionInfo1.htmls.length; i++) {
                                const { element } = optionInfo1.htmls[i];
                                element.style.display = "none";
                            }
                            animator1.setKeyFrames([{ background: "transparent" }]);
                            animator1.play();
                        }
                    }
                    for (let i = 0; i < optionInfo.htmls.length; i++) {
                        const { element, display } = optionInfo.htmls[i];
                        element.style.display = display ?? "";
                    }
                    if (makePopup) {
                        animator.setKeyFrames([{ background: "rgba(34, 34, 34, 0.8)" }]);
                    }
                    else {
                        animator.setKeyFrames([{ background: "rgba(34, 34, 34, 1)" }]);
                    }
                    animator.play();
                }
            });
        }
        optionsModal.appendChild(navBar);
        for (let i = 0; i < navButtons.length; i++) {
            if (i === 0) {
                const [name, animator] = navButtons[i];
                const optionInfo = optionInfos[name];
                optionInfo.on = true;
                for (let i = 0; i < navButtons.length; i++) {
                    const [key, animator1, _] = navButtons[i];
                    if (key !== name) {
                        const optionInfo1 = optionInfos[key];
                        optionInfo1.on = false;
                        for (let i = 0; i < optionInfo1.htmls.length; i++) {
                            const { element } = optionInfo1.htmls[i];
                            element.style.display = "none";
                        }
                        animator1.setKeyFrames([{ background: "transparent" }]);
                        animator1.play();
                    }
                }
                for (let i = 0; i < optionInfo.htmls.length; i++) {
                    const { element, display } = optionInfo.htmls[i];
                    element.style.display = display ?? "";
                }
                if (makePopup) {
                    animator.setKeyFrames([{ background: "rgba(34, 34, 34, 0.8)" }]);
                }
                else {
                    animator.setKeyFrames([{ background: "rgba(34, 34, 34, 1)" }]);
                }
                animator.play();
            }
        }
    }
}
export function createTryAvoidOptions(optionsModalContentScrollWrapper, tableBody) {
    const categoryName = "Try Avoid Dupes";
    const selectAllButtonContainer = createElement("html", "div");
    selectAllButtonContainer.className = "avoid-select-all-button-container";
    selectAllButtonContainer.style.display = "none";
    selectAllButtonContainer.style.alignItems = "flex-start";
    selectAllButtonContainer.style.justifyContent = "center";
    selectAllButtonContainer.style.borderColor = "transparent";
    selectAllButtonContainer.style.borderStyle = "none";
    const selectAllButton = createElement("html", "div");
    selectAllButton.className = "avoid-select-all-button";
    selectAllButton.style.scale = "90%";
    if (Options.categoryTrue(categoryName)) {
        selectAllButton.innerHTML = "Deselect All";
    }
    else {
        selectAllButton.innerHTML = "Select All";
    }
    const selectAnimator = new ElementAnimator(selectAllButton);
    const selectScalerInfo = { scaler: 90 };
    selectAllButton.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") {
            selectScalerInfo.scaler = 100;
            selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
            selectAnimator.setOptions({ duration: 25, fill: "both" });
            selectAnimator.play();
        }
    });
    selectAllButton.addEventListener("pointerleave", (event) => {
        if (event.pointerType !== "touch") {
            selectScalerInfo.scaler = 90;
            selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
            selectAnimator.setOptions({ duration: 125, fill: "both" });
            selectAnimator.play();
        }
    });
    selectAllButtonContainer.appendChild(selectAllButton);
    optionsModalContentScrollWrapper.appendChild(selectAllButtonContainer);
    const avoidModal = createElement("html", "section");
    avoidModal.className = "avoid-modal";
    const avoidContent = createElement("html", "div");
    const tableRow = createElement("html", "tr");
    tableRow.style.display = "none";
    const tableData = createElement("html", "td");
    tableData.appendChild(avoidModal);
    avoidModal.appendChild(avoidContent);
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
    const optionButtons = [];
    for (const parseKey in CategoryOptionsRev["0"]) {
        const optionButton = createElement("html", "div");
        const key = CategoryOptionsRev["0"][parseKey];
        optionButton.innerHTML = key;
        const animator = new ElementAnimator(optionButton);
        const scalerInfo = { scaler: 90 };
        if (Options.optionTrue(categoryName, key)) {
            optionButton.style.color = "#ffffff";
        }
        else {
            scalerInfo.scaler = 70;
            optionButton.style.color = "#999999";
        }
        optionButton.style.scale = `${scalerInfo.scaler}%`;
        optionButton.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                animator.setKeyFrames([{ scale: `${scalerInfo.scaler + 10}%` }]);
                animator.setOptions({ duration: 25, fill: "both" });
                animator.play();
            }
        });
        optionButton.addEventListener("pointerleave", (event) => {
            if (event.pointerType !== "touch") {
                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                animator.setOptions({ duration: 125, fill: "both" });
                animator.play();
            }
        });
        optionButton.addEventListener("pointerup", (event) => {
            if (event.button === 0) {
                if (Options.optionTrue(categoryName, key)) {
                    Options.disableOption(categoryName, key);
                    optionButton.style.color = "#999999";
                    optionButton.style.scale;
                    scalerInfo.scaler = 70;
                }
                else {
                    Options.enableOption(categoryName, key);
                    optionButton.style.color = "#ffffff";
                    optionButton.style.scale;
                    scalerInfo.scaler = 90;
                }
                if (event.pointerType === "touch") {
                    animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                }
                else {
                    animator.setKeyFrames([{ scale: `${scalerInfo.scaler + 10}%` }]);
                }
                animator.setOptions({ duration: 150, fill: "both" });
                animator.play();
            }
        });
        optionButtons.push([animator, key, optionButton, scalerInfo]);
        avoidContent.appendChild(optionButton);
    }
    selectAllButton.addEventListener("pointerup", (event) => {
        if (event.button === 0) {
            if (Options.categoryTrue(categoryName)) {
                Options.disableCategory(categoryName);
            }
            else {
                Options.enableCategory(categoryName);
            }
            for (let i = 0; i < optionButtons.length; i++) {
                const [animator, key, optionButton, scalerInfo] = optionButtons[i];
                if (Options.optionTrue(categoryName, key)) {
                    optionButton.style.color = "#ffffff";
                    optionButton.style.scale;
                    scalerInfo.scaler = 90;
                }
                else {
                    optionButton.style.color = "#999999";
                    optionButton.style.scale;
                    scalerInfo.scaler = 70;
                }
                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                animator.setOptions({ duration: 150, fill: "both" });
                animator.play();
            }
            selectAnimator.setKeyFrames([{ scale: `110%` }]);
            selectAnimator.setOptions({ duration: 25, fill: "both" });
            selectAnimator.play()?.addEventListener("finish", () => {
                if (Options.categoryTrue(categoryName)) {
                    selectAllButton.innerHTML = "Deselect All";
                }
                else {
                    selectAllButton.innerHTML = "Select All";
                }
                selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
                selectAnimator.setOptions({ duration: 125, fill: "both" });
                selectAnimator.play();
            });
        }
    });
    return [{ element: tableRow }, { element: selectAllButtonContainer, display: "flex" }];
}
export const exitOptions = () => {
    changeOptionsDisplay("hide");
};
export function createFilter(optionsModalContentScrollWrapper, tableBody) {
    const filterTableRow = createElement("html", "tr");
    filterTableRow.style.display = "none";
    const filterTableData = createElement("html", "td");
    const filterModal = createElement("html", "section");
    filterModal.className = "filter-modal";
    const filterModalContent = createElement("html", "div");
    filterModalContent.className = "filter-modal-content";
    const filterSelectAllContainer = createElement("html", "div");
    filterSelectAllContainer.style.display = "none";
    filterSelectAllContainer.className = "select-all-button-container";
    const selectAllButton = createElement("html", "div");
    selectAllButton.className = "select-all-button";
    selectAllButton.style.scale = "90%";
    if (Options.Filter.AllTrue) {
        selectAllButton.innerHTML = "Deselect All";
    }
    else {
        selectAllButton.innerHTML = "Select All";
    }
    const selectAnimator = new ElementAnimator(selectAllButton);
    const selectScalerInfo = { scaler: 90 };
    selectAllButton.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") {
            selectScalerInfo.scaler = 100;
            selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
            selectAnimator.setOptions({ duration: 25, fill: "both" });
            selectAnimator.play();
        }
    });
    selectAllButton.addEventListener("pointerleave", (event) => {
        if (event.pointerType !== "touch") {
            selectScalerInfo.scaler = 90;
            selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
            selectAnimator.setOptions({ duration: 125, fill: "both" });
            selectAnimator.play();
        }
    });
    filterSelectAllContainer.appendChild(selectAllButton);
    optionsModalContentScrollWrapper.appendChild(filterSelectAllContainer);
    filterModal.appendChild(filterModalContent);
    filterTableData.appendChild(filterModal);
    filterTableRow.appendChild(filterTableData);
    tableBody.appendChild(filterTableRow);
    const filterTable = createElement("html", "table");
    filterModalContent.appendChild(filterTable);
    const filterTableBody = createElement("html", "tbody");
    filterTable.appendChild(filterTableBody);
    const filterSelectGroup = createElement("html", "tr");
    filterTableBody.appendChild(filterSelectGroup);
    const filterSelectOPs = createElement("html", "tr");
    filterTableBody.appendChild(filterSelectOPs);
    const htmlSelectGroupButtons = [];
    const htmlSelectFiliterButtons = {};
    for (const nKey in GROUPS) {
        const key = nKey;
        const group = GROUPS[key];
        const groupSelectdata = createElement("html", "td");
        const groupSelectContainer = createElement("html", "div");
        groupSelectContainer.className = "group-select-container";
        const groupSelectButton = createElement("html", "div");
        groupSelectButton.className = "group-select";
        groupSelectButton.style.scale = "90%";
        if (Options.Filter.GroupTrue(key)) {
            groupSelectButton.innerHTML = "Deselect All " + key;
        }
        else {
            groupSelectButton.innerHTML = "Select All " + key;
        }
        const groupAnimator = new ElementAnimator(groupSelectButton);
        const groupScalerInfo = { scaler: 90 };
        groupSelectButton.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                groupScalerInfo.scaler = 100;
                groupAnimator.setKeyFrames([{ scale: `${groupScalerInfo.scaler}%` }]);
                groupAnimator.setOptions({ duration: 25, fill: "both" });
                groupAnimator.play();
            }
        });
        groupSelectButton.addEventListener("pointerleave", (event) => {
            if (event.pointerType !== "touch") {
                groupScalerInfo.scaler = 90;
                groupAnimator.setKeyFrames([{ scale: `${groupScalerInfo.scaler}%` }]);
                groupAnimator.setOptions({ duration: 125, fill: "both" });
                groupAnimator.play();
            }
        });
        let makeGroupSelectButton = true;
        if (group.ops.length > 0) {
            htmlSelectFiliterButtons[key] = [];
            const item = htmlSelectFiliterButtons[key];
            const column1 = createElement("html", "td");
            let column2 = null;
            if (group.ops.length > 1) {
                column2 = createElement("html", "td");
                groupSelectdata.colSpan = 2;
            }
            else if (group.ops.length === 1) {
                groupSelectdata.colSpan = 1;
            }
            else {
                makeGroupSelectButton = false;
            }
            const halfLength = Math.ceil(group.ops.length / 2);
            for (let i = 0; i < group.ops.length; i++) {
                const op = group.ops[i];
                const filterButton = createElement("html", "div");
                filterButton.className = "filter-button";
                const filterIcon = createElement("html", "img");
                filterIcon.draggable = false;
                filterIcon.src = op.icons[0];
                filterIcon.alt = op.name;
                if (Options.Filter.OPTrue(key, op.name)) {
                    filterIcon.style.filter = "";
                }
                else {
                    filterIcon.style.filter = "grayscale(100%)";
                }
                const animator = new ElementAnimator(filterButton);
                const scalerInfo = { scaler: 90 };
                if (Options.Filter.OPTrue(key, op.name)) {
                    filterIcon.style.filter = "";
                    animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                }
                else {
                    scalerInfo.scaler = 70;
                    filterIcon.style.filter = "grayscale(100%)";
                    animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                }
                filterButton.style.scale = `${scalerInfo.scaler}%`;
                filterButton.addEventListener("pointerenter", (event) => {
                    if (event.pointerType !== "touch") {
                        animator.setKeyFrames([{ scale: `${scalerInfo.scaler + 10}%` }]);
                        animator.setOptions({ duration: 25, fill: "both" });
                        animator.play();
                    }
                });
                filterButton.addEventListener("pointerleave", (event) => {
                    if (event.pointerType !== "touch") {
                        animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                        animator.setOptions({ duration: 125, fill: "both" });
                        animator.play();
                    }
                });
                filterButton.addEventListener("pointerup", (event) => {
                    if (event.button === 0) {
                        if (Options.Filter.OPTrue(key, op.name)) {
                            Options.Filter.deselectOP(key, op.name);
                            filterButton.children.item(0).style.filter =
                                "grayscale(100%)";
                            scalerInfo.scaler = 70;
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                        }
                        else {
                            Options.Filter.selectOP(key, op.name);
                            filterButton.children.item(0).style.filter = "";
                            scalerInfo.scaler = 90;
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                        }
                        if (Options.Filter.AllTrue) {
                            selectAllButton.innerHTML = "Deselect All";
                        }
                        else {
                            selectAllButton.innerHTML = "Select All";
                        }
                        if (Options.Filter.GroupTrue(key)) {
                            groupSelectButton.innerHTML = "Deselect All " + key;
                        }
                        else {
                            groupSelectButton.innerHTML = "Select All " + key;
                        }
                        if (event.pointerType === "touch") {
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                        }
                        else {
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler + 10}%` }]);
                        }
                        animator.setOptions({ duration: 150, fill: "both" });
                        animator.play();
                    }
                });
                filterButton.appendChild(filterIcon);
                filterButton.innerHTML += op.name;
                item.push([op.name, animator, scalerInfo, filterButton]);
                if (column2 == null) {
                    column1.appendChild(filterButton);
                }
                else {
                    if (i < halfLength) {
                        column1.appendChild(filterButton);
                    }
                    else {
                        column2.appendChild(filterButton);
                    }
                }
            }
            filterSelectOPs.appendChild(column1);
            if (column2 !== null) {
                filterSelectOPs.appendChild(column2);
            }
        }
        if (makeGroupSelectButton) {
            groupSelectButton.addEventListener("pointerup", (event) => {
                if (event.button === 0) {
                    groupAnimator.play();
                    if (Options.Filter.GroupTrue(key)) {
                        Options.Filter.delectGroup(key);
                    }
                    else {
                        Options.Filter.selectGroup(key);
                    }
                    if (Options.Filter.AllTrue) {
                        selectAllButton.innerHTML = "Deselect All";
                    }
                    else {
                        selectAllButton.innerHTML = "Select All";
                    }
                    const item = htmlSelectFiliterButtons[key];
                    if (item !== undefined) {
                        for (let i = 0; i < item.length; i++) {
                            const [name, animator, scalerInfo, element] = item[i];
                            if (Options.Filter.OPTrue(key, name)) {
                                element.children.item(0).style.filter = "";
                                scalerInfo.scaler = 90;
                                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            }
                            else {
                                element.children.item(0).style.filter =
                                    "grayscale(100%)";
                                scalerInfo.scaler = 70;
                                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            }
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            animator.setOptions({ duration: 150, fill: "both" });
                            animator.play();
                        }
                    }
                    groupAnimator.setKeyFrames([{ scale: `110%` }]);
                    groupAnimator.setOptions({ duration: 25, fill: "both" });
                    groupAnimator.play()?.addEventListener("finish", () => {
                        if (Options.Filter.GroupTrue(key)) {
                            groupSelectButton.innerHTML = "Deselect All " + key;
                        }
                        else {
                            groupSelectButton.innerHTML = "Select All " + key;
                        }
                        groupAnimator.setKeyFrames([{ scale: `${groupScalerInfo.scaler}%` }]);
                        groupAnimator.setOptions({ duration: 125, fill: "both" });
                        groupAnimator.play();
                    });
                }
            });
            htmlSelectGroupButtons.push([key, groupAnimator, groupScalerInfo, groupSelectButton]);
            groupSelectContainer.appendChild(groupSelectButton);
            groupSelectdata.appendChild(groupSelectContainer);
            filterSelectGroup.appendChild(groupSelectdata);
        }
    }
    if (htmlSelectGroupButtons.length > 0) {
        selectAllButton.addEventListener("pointerup", (event) => {
            if (event.button === 0) {
                if (Options.Filter.AllTrue) {
                    Options.Filter.deselectAll();
                }
                else {
                    Options.Filter.selectAll();
                }
                for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                    const [key, _, __, element] = htmlSelectGroupButtons[i];
                    if (Options.Filter.GroupTrue(key)) {
                        element.innerHTML = "Deselect All " + key;
                    }
                    else {
                        element.innerHTML = "Select All " + key;
                    }
                }
                for (const nKey in htmlSelectFiliterButtons) {
                    const key = nKey;
                    const item = htmlSelectFiliterButtons[key];
                    if (item !== undefined) {
                        for (let i = 0; i < item.length; i++) {
                            const [name, animator, scalerInfo, element] = item[i];
                            if (Options.Filter.OPTrue(key, name)) {
                                element.children.item(0).style.filter = "";
                                scalerInfo.scaler = 90;
                                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            }
                            else {
                                element.children.item(0).style.filter =
                                    "grayscale(100%)";
                                scalerInfo.scaler = 70;
                                animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            }
                            animator.setKeyFrames([{ scale: `${scalerInfo.scaler}%` }]);
                            animator.setOptions({ duration: 150, fill: "both" });
                            animator.play();
                        }
                    }
                }
                selectAnimator.setKeyFrames([{ scale: `110%` }]);
                selectAnimator.setOptions({ duration: 25, fill: "both" });
                selectAnimator.play()?.addEventListener("finish", () => {
                    if (Options.Filter.AllTrue) {
                        selectAllButton.innerHTML = "Deselect All";
                    }
                    else {
                        selectAllButton.innerHTML = "Select All";
                    }
                    selectAnimator.setKeyFrames([{ scale: `${selectScalerInfo.scaler}%` }]);
                    selectAnimator.setOptions({ duration: 125, fill: "both" });
                    selectAnimator.play();
                });
            }
        });
        // filterSelectAll;
    }
    else {
        filterModalContent.removeChild(filterModalContent.childNodes[2]);
    }
    return [
        { element: filterTableRow, display: "" },
        { element: filterSelectAllContainer, display: "" },
    ];
}
Options.parseCookie();
//#endregion
//# sourceMappingURL=options.js.map