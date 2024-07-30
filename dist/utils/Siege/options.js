import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../../ops.js";
import Animator, { AnimationCurves } from "../animation/animation.js";
import { giveElementAnimation, runAnimation } from "../html.js";
import { lerp } from "../math.js";
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
    static get isTouchScreen() {
        return window.matchMedia("(pointer: coarse)").matches;
    }
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
export function createOptions(insert, makePopup = true) {
    const optionsModal = document.createElement("section");
    const htmls = [];
    if (makePopup) {
        /* <span aria-hidden="true">&times;</span> */
        const exitContainer = document.createElement("div");
        exitContainer.className = "exit-options-container";
        const exitButton = document.createElement("div");
        exitButton.className = "exit-options";
        exitButton.innerHTML += "&times;";
        const animationKey = "exit-option-hover";
        giveElementAnimation(animationKey, exitButton, new Animator({
            time: 0.15,
            animate: (t) => {
                const value = lerp(t, 100, 110);
                exitButton.style.scale = `${value}%`;
            },
            animationCurve: AnimationCurves.easeInOut,
        }));
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
        htmls.push([optionsModal, ""], [exitButton, "flex"]);
    }
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
    document.body.insertBefore(optionsModal, document.body.childNodes[insert]);
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
                const [element, display] = optionsInfo.htmls[0];
                element.style.display = display;
                optionsInfo.on = true;
            }
        }
    }
    else {
        if (optionsInfo !== undefined) {
            document.body.style.overflow = "auto";
            for (let i = 0; i < optionsInfo.htmls.length; i++) {
                const [element, _] = optionsInfo.htmls[0];
                element.style.display = "none";
                optionsInfo.on = false;
            }
        }
    }
}
export let optionInfos = undefined;
export function createOptionsNavBar(optionsModal, makePopup) {
    if (optionInfos !== undefined) {
        const navBar = document.createElement("div");
        navBar.className = "nav-bar";
        const navButtons = [];
        for (const n in optionInfos) {
            const name = n;
            const navButton = document.createElement("button");
            if (makePopup) {
                navButton.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
            }
            navButton.innerHTML = name;
            navButton.style.background = "transparent";
            if (!Options.isTouchScreen) {
                navButton.addEventListener("mouseenter", () => {
                    if (!optionInfos[name].on) {
                        navButton.style.transition = "background-color 0.3s ease-in-out";
                        if (makePopup) {
                            navButton.style.backgroundColor = "rgba(51, 51, 51, 0.8)";
                        }
                        else {
                            navButton.style.backgroundColor = "rgba(51, 51, 51, 1)";
                        }
                    }
                });
                navButton.addEventListener("mouseleave", () => {
                    if (!optionInfos[name].on) {
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
                const optionInfo = optionInfos[name];
                optionInfo.on = true;
                for (let i = 0; i < navButtons.length; i++) {
                    const [key, navButton1] = navButtons[i];
                    if (key !== name) {
                        const optionInfo1 = optionInfos[key];
                        optionInfo1.on = false;
                        navButton1.style.transition = "background-color 0.3s ease-in-out";
                        navButton1.style.backgroundColor = "transparent";
                        for (let i = 0; i < optionInfo1.htmls.length; i++) {
                            const [element, _] = optionInfo1.htmls[i];
                            element.style.display = "none";
                        }
                    }
                }
                for (let i = 0; i < optionInfo.htmls.length; i++) {
                    const [element, display] = optionInfo.htmls[i];
                    element.style.display = display;
                }
                navButton.style.transition = "background-color 0.3s ease-in-out";
                if (makePopup) {
                    navButton.style.backgroundColor = "rgba(34, 34, 34, 0.9)";
                }
                else {
                    navButton.style.backgroundColor = "rgba(34, 34, 34, 1)";
                }
            });
        }
        optionsModal.appendChild(navBar);
        const firstButton = navBar.children[0];
        firstButton.click();
    }
}
export function createTryAvoidOptions(optionsModalContentScrollWrapper, tableBody) {
    const categoryName = "Try Avoid Dupes";
    const selectAllButtonContainer = document.createElement("div");
    selectAllButtonContainer.className = "avoid-select-all-button-container";
    selectAllButtonContainer.style.display = "none";
    selectAllButtonContainer.style.alignItems = "flex-start";
    selectAllButtonContainer.style.justifyContent = "center";
    selectAllButtonContainer.style.borderColor = "transparent";
    selectAllButtonContainer.style.borderStyle = "none";
    const selectAllButton = document.createElement("div");
    selectAllButton.className = "avoid-select-all-button";
    selectAllButton.style.scale = "90%";
    if (Options.categoryTrue(categoryName)) {
        selectAllButton.innerHTML = "Deselect All";
    }
    else {
        selectAllButton.innerHTML = "Select All";
    }
    const animationKey = "avoid-select-all-hover";
    giveElementAnimation(animationKey, selectAllButton, new Animator({
        time: 0.15,
        animate: (t) => {
            const value = lerp(t, 90, 100);
            selectAllButton.style.scale = `${value}%`;
        },
        animationCurve: AnimationCurves.easeInOut,
    }));
    selectAllButtonContainer.appendChild(selectAllButton);
    optionsModalContentScrollWrapper.appendChild(selectAllButtonContainer);
    const avoidModal = document.createElement("section");
    avoidModal.className = "avoid-modal";
    const avoidContent = document.createElement("div");
    const tableRow = document.createElement("tr");
    tableRow.style.display = "none";
    const tableData = document.createElement("td");
    tableData.appendChild(avoidModal);
    avoidModal.appendChild(avoidContent);
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
    const optionButtons = [];
    for (const parseKey in CategoryOptionsRev["0"]) {
        const optionButton = document.createElement("div");
        const key = CategoryOptionsRev["0"][parseKey];
        optionButton.innerHTML = key;
        if (Options.optionTrue(categoryName, key)) {
            optionButton.style.color = "#ffffff";
            optionButton.style.scale = "90%";
        }
        else {
            optionButton.style.color = "#999999";
            optionButton.style.scale = "70%";
        }
        const clickHoverAnimationKey = `${key}-hover-click`;
        const clockHoverAnimator = new Animator({
            time: 0.15,
            animate: (t, _, click) => {
                let value;
                if (Options.optionTrue(categoryName, key)) {
                    optionButton.style.color = "#ffffff";
                }
                else {
                    optionButton.style.color = "#999999";
                }
                if (click) {
                    value = lerp(t, 100, 80);
                }
                else {
                    if (Options.optionTrue(categoryName, key)) {
                        value = lerp(t, 90, 100);
                    }
                    else {
                        value = lerp(t, 70, 80);
                    }
                }
                selectAllButton.style.scale = `${value}%`;
            },
            animationCurve: AnimationCurves.easeInOut,
        });
        giveElementAnimation(clickHoverAnimationKey, selectAllButton, clockHoverAnimator);
        optionButton.addEventListener("click", () => {
            clockHoverAnimator.setArgs(true);
            let start;
            if (Options.optionTrue(categoryName, key)) {
                Options.disableOption(categoryName, key);
                optionButton.style.color = "#999999";
                start = "end";
            }
            else {
                Options.enableOption(categoryName, key);
                optionButton.style.color = "#ffffff";
                start = "start";
            }
            runAnimation(clickHoverAnimationKey, start);
        });
        optionButton.addEventListener("mouseenter", () => {
            clockHoverAnimator.setArgs(false);
            runAnimation(clickHoverAnimationKey, "start");
        });
        optionButton.addEventListener("mouseenter", () => {
            clockHoverAnimator.setArgs(false);
            runAnimation(clickHoverAnimationKey, "end");
        });
        optionButtons.push([clickHoverAnimationKey, key, optionButton]);
        avoidContent.appendChild(optionButton);
    }
    selectAllButton.addEventListener("click", () => {
        if (Options.categoryTrue(categoryName)) {
            Options.disableCategory(categoryName);
            selectAllButton.innerHTML = "Select All";
        }
        else {
            Options.enableCategory(categoryName);
            selectAllButton.innerHTML = "Deselect All";
        }
        for (let i = 0; i < optionButtons.length; i++) {
            const [animationKey, key, optionButton] = optionButtons[i];
            runAnimation(animationKey, "end");
        }
    });
    return [
        [tableRow, ""],
        [selectAllButtonContainer, "flex"],
    ];
}
export function exitOptions() {
    changeOptionsDisplay("hide");
}
export function createFilter(optionsModalContentScrollWrapper, tableBody) {
    const filterTableRow = document.createElement("tr");
    filterTableRow.style.display = "none";
    const filterTableData = document.createElement("td");
    const filterModal = document.createElement("section");
    filterModal.className = "filter-modal";
    const filterModalContent = document.createElement("div");
    filterModalContent.className = "filter-modal-content";
    const filterSelectAllContainer = document.createElement("div");
    filterSelectAllContainer.style.display = "none";
    filterSelectAllContainer.className = "select-all-button-container";
    const filterSelectAll = document.createElement("div");
    filterSelectAll.className = "select-all-button";
    if (Options.Filter.AllTrue) {
        filterSelectAll.innerHTML = "Deselect All";
    }
    else {
        filterSelectAll.innerHTML = "Select All";
    }
    filterSelectAllContainer.appendChild(filterSelectAll);
    optionsModalContentScrollWrapper.appendChild(filterSelectAllContainer);
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
    const htmlSelectGroupButtons = [];
    const htmlSelectOpButtons = {};
    for (const nKey in GROUPS) {
        const key = nKey;
        const group = GROUPS[key];
        const groupSelectdata = document.createElement("td");
        const groupSelectContainer = document.createElement("div");
        groupSelectContainer.className = "group-select-container";
        const groupSelectButton = document.createElement("div");
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
                const opButton = document.createElement("div");
                opButton.className = "filter-button";
                const opIcon = document.createElement("img");
                opIcon.draggable = false;
                opIcon.src = op.icons[0];
                opIcon.alt = op.name;
                opButton.appendChild(opIcon);
                opButton.innerHTML += op.name;
                if (Options.Filter.OPTrue(key, op.name)) {
                    opIcon.style.filter = "";
                    opIcon.style.scale = "90%";
                }
                else {
                    opIcon.style.filter = "grayscale(100%)";
                    opIcon.style.scale = "70%";
                }
                const animationKey = `${op.name}-hover-click`;
                const animator = new Animator({
                    time: 0.15,
                    animate: (t, _, click) => {
                        let value;
                        if (Options.Filter.OPTrue(key, op.name)) {
                            opIcon.style.filter = "";
                        }
                        else {
                            opIcon.style.filter = "grayscale(100%)";
                        }
                        if (click) {
                            value = lerp(t, 100, 80);
                        }
                        else {
                            if (Options.Filter.OPTrue(key, op.name)) {
                                value = lerp(t, 90, 100);
                            }
                            else {
                                value = lerp(t, 70, 80);
                            }
                        }
                        opButton.style.scale = `${value}%`;
                    },
                    animationCurve: AnimationCurves.easeInOut,
                });
                giveElementAnimation(animationKey, opButton, animator);
                opButton.addEventListener("click", () => {
                    animator.setArgs(true);
                    if (Options.Filter.OPTrue(key, op.name)) {
                        Options.Filter.deselectOP(key, op.name);
                        opButton.children.item(0).style.filter =
                            "grayscale(100%)";
                    }
                    else {
                        Options.Filter.selectOP(key, op.name);
                        opButton.children.item(0).style.filter = "";
                    }
                    runAnimation(animationKey);
                    for (let i = 0; i < htmlSelectGroupButtons.length; i++) {
                        const [_, key, element] = htmlSelectGroupButtons[i];
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
                item.push([animationKey, op.name, opButton]);
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
            const groupAnimationKey = key + "-click";
            giveElementAnimation(groupAnimationKey, groupSelectButton, new Animator({
                time: 0.15,
                animate: () => { },
                animationCurve: AnimationCurves.easeInOut,
            }));
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
                        const [animationKey, name, _] = item[i];
                        let scale;
                        if (Options.Filter.OPTrue(key, name)) {
                            scale = 90;
                        }
                        else {
                            scale = 70;
                        }
                        runAnimation(animationKey);
                    }
                }
            });
            htmlSelectGroupButtons.push([groupAnimationKey, key, groupSelectButton]);
            groupSelectContainer.appendChild(groupSelectButton);
            groupSelectdata.appendChild(groupSelectContainer);
            filterSelectGroup.appendChild(groupSelectdata);
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
                const [_, key, element] = htmlSelectGroupButtons[i];
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
                        const [animationKey, name, _] = item[i];
                        let scale;
                        if (Options.Filter.OPTrue(key, name)) {
                            scale = 90;
                        }
                        else {
                            scale = 70;
                        }
                        runAnimation(animationKey);
                    }
                }
            }
        });
        // filterSelectAll;
        const filterAnimationKey = "filter-select-all-hover";
        const filterHoverAnimator = new Animator({
            time: 0.15,
            animate: (t) => {
                const value = lerp(t, 90, 100);
                filterSelectAll.style.scale = `${value}%`;
            },
            animationCurve: AnimationCurves.easeInOut,
        });
        giveElementAnimation(filterAnimationKey, filterSelectAll, filterHoverAnimator);
    }
    else {
        filterModalContent.removeChild(filterModalContent.childNodes[2]);
    }
    return [
        [filterTableRow, ""],
        [filterSelectAllContainer, ""],
    ];
}
Options.parseCookie();
//#endregion
//# sourceMappingURL=options.js.map