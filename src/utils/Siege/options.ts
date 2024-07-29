//#region Main
import type { OptionInfosType, OptionInfoType } from "../../types/options.js";
import type {
    AllOPNames,
    ALLOPParsedValues,
    CombinedOPParseKeys,
    ParsedGroupKeys,
    ParsedGroupKeysRev,
} from "../../ops.js";
import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../../ops.js";
import { giveHoverAnimation, HoverOptions } from "../html.js";

export const OptionCategories = {
    "Try Avoid Dupes": "0" as const,
};
export const OptionCategoriesRev = {
    "0": "Try Avoid Dupes" as const,
};

export const CategoryOptions = {
    "0": {
        OPs: "0" as const,
        Equipment: "1" as const,
        "Primary Weapons": "2" as const,
        "Primary Sights": "3" as const,
        "Primary Grips": "4" as const,
        "Primary Barrels": "5" as const,
        "Primary UnderBarrels": "6" as const,
        "Secondary Weapons": "7" as const,
        "Secondary Sights": "8" as const,
        "Secondary Grips": "9" as const,
        "Secondary Barrels": "10" as const,
        "Secondary UnderBarrels": "11" as const,
    },
};
export const CategoryOptionsRev = {
    "0": {
        "0": "OPs" as const,
        "1": "Equipment" as const,
        "2": "Primary Weapons" as const,
        "3": "Primary Sights" as const,
        "4": "Primary Grips" as const,
        "5": "Primary Barrels" as const,
        "6": "Primary UnderBarrels" as const,
        "7": "Secondary Weapons" as const,
        "8": "Secondary Sights" as const,
        "9": "Secondary Grips" as const,
        "10": "Secondary Barrels" as const,
        "11": "Secondary UnderBarrels" as const,
    },
};

export type CategoryNames = keyof typeof OptionCategories;
export type CategoryValues = keyof typeof OptionCategoriesRev;
export type OptionNames = keyof (typeof CategoryOptions)["0"];
export type OptionValues = keyof (typeof CategoryOptionsRev)["0"];

export default class Options {
    static get isTouchScreen(): boolean {
        return window.matchMedia("(pointer: coarse)").matches;
    }
    static options: { "0"?: { [k in OptionValues]?: boolean } } = {};
    static Filter = class {
        static filter: {
            [k in ParsedGroupKeysRev]?: { [k in ALLOPParsedValues]?: boolean };
        } = {};

        static parseFilterCookie(cookie: string) {
            const group_vars = cookie.split("%");
            for (let i = 0; i < group_vars.length; i++) {
                const g_v = group_vars[i];
                const [g_key, g_value] = g_v.split("#") as [ParsedGroupKeysRev, ALLOPParsedValues];
                if (g_key !== undefined && g_value !== undefined) {
                    if (this.filter[g_key] === undefined) {
                        this.filter[g_key] = {};
                    }
                    const vars = g_value.split("|");
                    for (let i = 0; i < vars.length; i++) {
                        const v = vars[i];
                        const [key, value] = v.split(":") as [ALLOPParsedValues, "0" | "1"];
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
        static toString(): string {
            let str = "";
            const keys = Object.keys(this.filter) as ParsedGroupKeysRev[];
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = this.filter[key];
                if (value !== undefined) {
                    const op_keys = Object.keys(value) as ALLOPParsedValues[];
                    str += `${key}#`;
                    for (let i1 = 0; i1 < op_keys.length; i1++) {
                        const op_key = op_keys[i1];
                        const op_value = value[op_key];
                        if (i1 < op_keys.length - 1) {
                            str += `${op_key}:${op_value ? 1 : 0}|`;
                        } else {
                            str += `${op_key}:${op_value ? 1 : 0}`;
                        }
                    }
                    if (i < keys.length - 1) str += `%`;
                }
            }
            return str;
        }

        static get AllTrue(): boolean {
            let key: ParsedGroupKeysRev;
            for (key in this.filter) {
                const value = this.filter[key];
                if (value !== undefined) {
                    let op_key: ALLOPParsedValues;
                    for (op_key in value) {
                        if (value[op_key] === false) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        static GroupTrue(key: ParsedGroupKeys): boolean {
            const value = this.filter[GroupParseKeys[key]];
            if (value === undefined) {
                return true;
            } else {
                let op_key: ALLOPParsedValues;
                for (op_key in value) {
                    if (value[op_key] === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        static GroupFalse(key: ParsedGroupKeys): boolean {
            const og_key = key;
            const nKey = GroupParseKeys[key];
            const value = this.filter[nKey];
            if (value === undefined) {
                return false;
            } else {
                const group = GROUPS[og_key];
                for (let i = 0; i < group.ops.length; i++) {
                    const op = group.ops[i];
                    if (value[(OPParseKeys[nKey] as CombinedOPParseKeys)[op.name]] === undefined) {
                        return false;
                    }
                }
            }
            return true;
        }
        static OPTrue(groupKey: ParsedGroupKeys, key: AllOPNames): boolean {
            const nGroupKey = GroupParseKeys[groupKey];
            const value = this.filter[nGroupKey];
            if (value === undefined) {
                return true;
            } else {
                const nKey = (OPParseKeys[nGroupKey] as CombinedOPParseKeys)[key];
                let item = value[nKey];
                if (item === undefined) {
                    return true;
                } else {
                    return item;
                }
            }
        }

        static #changeAllFilterValues(select: boolean) {
            if (select) {
                for (const key in this.filter) {
                    this.#changeAGroup(key as ParsedGroupKeysRev, select, false);
                }
            } else {
                let key: ParsedGroupKeys;
                for (key in GROUPS) {
                    this.#changeAGroup(GroupParseKeys[key], select, false);
                }
            }
            Options.#setCookie();
        }
        static #changeAGroup(key: ParsedGroupKeysRev, select: boolean, setCookie = true) {
            let value = this.filter[key];
            let changeOPs = true;
            if (select) {
                if (value === undefined) {
                    changeOPs = false;
                }
            } else {
                if (value === undefined) {
                    value = this.filter[key] = {};
                }
            }
            if (changeOPs) {
                if (select) {
                    for (const op_key in value) {
                        this.#changeOP(key, op_key as ALLOPParsedValues, select, false);
                    }
                } else {
                    const group = GROUPS[GroupParseKeysRev[key]];
                    for (let i = 0; i < group.ops.length; i++) {
                        const op = group.ops[i];
                        this.#changeOP(
                            key,
                            (OPParseKeys[key] as CombinedOPParseKeys)[op.name],
                            select,
                            false
                        );
                    }
                }
            }
            if (setCookie) {
                Options.#setCookie();
            }
        }
        static #changeOP(
            groupKey: ParsedGroupKeysRev,
            key: ALLOPParsedValues,
            select: boolean,
            setCookie = true
        ) {
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
            } else {
                if (value === undefined) {
                    value = this.filter[groupKey] = {};
                }
                value[key] = select;
            }
            if (setCookie) {
                Options.#setCookie();
            }
        }

        static selectOP(groupKey: ParsedGroupKeys, key: AllOPNames) {
            const nGroupKey = GroupParseKeys[groupKey];
            this.#changeOP(nGroupKey, (OPParseKeys[nGroupKey] as CombinedOPParseKeys)[key], true);
        }
        static deselectOP(groupKey: ParsedGroupKeys, key: AllOPNames) {
            const nGroupKey = GroupParseKeys[groupKey];
            this.#changeOP(nGroupKey, (OPParseKeys[nGroupKey] as CombinedOPParseKeys)[key], false);
        }

        static selectAll() {
            this.#changeAllFilterValues(true);
        }
        static deselectAll() {
            this.#changeAllFilterValues(false);
        }

        static selectGroup(key: ParsedGroupKeys) {
            this.#changeAGroup(GroupParseKeys[key], true);
        }
        static delectGroup(key: ParsedGroupKeys) {
            this.#changeAGroup(GroupParseKeys[key], false);
        }
    };
    static #setCookie() {
        const filter = this.Filter.toString();
        const options = this.toString();
        if (options === "" && filter !== "") {
            document.cookie = filter;
        } else if (options !== "" && filter === "") {
            document.cookie = "$" + options;
        } else if (options !== "" && filter !== "") {
            document.cookie = filter + "$" + options;
        } else {
            document.cookie = "Null";
        }
        console.log(document.cookie);
    }
    static optionTrue(categoryName: CategoryNames, key: OptionNames) {
        const nCategoryName = OptionCategories[categoryName];
        const category = this.options[nCategoryName];
        if (category === undefined || category[CategoryOptions[nCategoryName][key]] === undefined) {
            return true;
        } else {
            return false;
        }
    }
    static categoryTrue(categoryName: CategoryNames) {
        const category = this.options[OptionCategories[categoryName]];
        if (category === undefined) {
            return true;
        } else {
            let key: keyof typeof category;
            for (key in category) {
                if (category[key] === false) {
                    return false;
                }
            }
        }
        return true;
    }
    static #changeCategory(categoryName: CategoryValues, enable: boolean, setCookie = true) {
        let category = this.options[categoryName];
        let changeOptions = true;
        if (enable) {
            if (category === undefined) {
                changeOptions = false;
            }
        } else {
            if (category === undefined) {
                category = this.options[categoryName] = {};
            }
        }
        if (changeOptions) {
            if (enable) {
                for (const key in category) {
                    this.#changeOption(categoryName, key as keyof typeof category, enable, false);
                }
            } else {
                for (const key in CategoryOptionsRev[categoryName]) {
                    this.#changeOption(categoryName, key as OptionValues, enable, false);
                }
            }
        }
        if (setCookie) {
            Options.#setCookie();
        }
    }
    static #changeOption(
        categoryName: CategoryValues,
        key: OptionValues,
        enable: boolean,
        setCookie = true
    ) {
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
        } else {
            if (category === undefined) {
                category = this.options[categoryName] = {};
            }
            category[key] = enable;
        }
        if (setCookie) {
            Options.#setCookie();
        }
    }

    static enableCategory(categoryName: CategoryNames) {
        const nCategoryName = OptionCategories[categoryName];
        this.#changeCategory(nCategoryName, true);
    }
    static disableCategory(categoryName: CategoryNames) {
        const nCategoryName = OptionCategories[categoryName];
        this.#changeCategory(nCategoryName, false);
    }

    static enableOption(categoryName: CategoryNames, key: OptionNames) {
        const nCategoryName = OptionCategories[categoryName];
        const nKey = CategoryOptions[nCategoryName][key];
        this.#changeOption(nCategoryName, nKey, true);
    }
    static disableOption(categoryName: CategoryNames, key: OptionNames) {
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
                    const [key, value] = categoryString.split("#") as [
                        keyof typeof this.options,
                        string
                    ];
                    if (key !== undefined && value !== undefined) {
                        const vars = value.split("|");
                        for (let i1 = 0; i1 < vars.length; i1++) {
                            const [vKey, vValue] = vars[i1].split(":") as [OptionValues, string];
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
    static toString(): string {
        let str = "";
        const keys = Object.keys(this.options) as (keyof typeof this.options)[];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = this.options[key];
            if (value !== undefined) {
                str += `${key}#`;
                const vKeys = Object.keys(value) as OptionValues[];
                for (let i1 = 0; i1 < vKeys.length; i1++) {
                    const vKey = vKeys[i1];
                    const vValue = value[vKey];
                    if (vValue !== undefined) {
                        if (i1 < vKeys.length - 1) {
                            str += `${vKey}:${vValue ? 1 : 0}|`;
                        } else {
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

export function isScrollable(element: HTMLElement, dir: "vertical" | "horizontal"): boolean {
    if (dir === "vertical") {
        return element.scrollHeight > element.clientHeight;
    } else {
        return element.scrollWidth > element.clientWidth;
    }
}
export function createOptions(insert: number, makePopup: boolean = true): [HTMLElement, string][] {
    const optionsModal = document.createElement("section");
    const htmls: [HTMLElement, string][] = [];
    if (makePopup) {
        /* <span aria-hidden="true">&times;</span> */
        const exitContainer = document.createElement("div");
        exitContainer.className = "exit-options-container";

        const exitButton = document.createElement("div");
        exitButton.className = "exit-options";
        exitButton.innerHTML += "&times;";

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
    return htmls;
}
export let optionsInfo: OptionInfoType = {} as OptionInfoType;
export function changeOptionsDisplay(type: "show" | "hide") {
    if (type === "show") {
        if (optionsInfo !== undefined) {
            document.body.style.overflow = "hidden";
            for (let i = 0; i < optionsInfo.htmls.length; i++) {
                const [element, display] = optionsInfo.htmls[0];
                element.style.display = display;
                optionsInfo.on = true;
            }
        }
    } else {
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

export let optionInfos: OptionInfosType | undefined = undefined;
export function createOptionsNavBar(optionsModal: HTMLElement, makePopup: boolean) {
    if (optionInfos !== undefined) {
        const navBar = document.createElement("div");
        navBar.className = "nav-bar";
        const navButtons: [keyof typeof optionInfos, HTMLButtonElement][] = [];
        for (const n in optionInfos) {
            const name = n as keyof typeof optionInfos;
            const navButton = document.createElement("button");
            if (makePopup) {
                navButton.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
            }
            navButton.innerHTML = name;
            navButton.style.background = "transparent";
            if (!Options.isTouchScreen) {
                navButton.addEventListener("mouseenter", () => {
                    if (!optionInfos![name].on) {
                        navButton.style.transition = "background-color 0.3s ease-in-out";
                        if (makePopup) {
                            navButton.style.backgroundColor = "rgba(51, 51, 51, 0.8)";
                        } else {
                            navButton.style.backgroundColor = "rgba(51, 51, 51, 1)";
                        }
                    }
                });
                navButton.addEventListener("mouseleave", () => {
                    if (!optionInfos![name].on) {
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
                const optionInfo = optionInfos![name];
                optionInfo.on = true;
                for (let i = 0; i < navButtons.length; i++) {
                    const [key, navButton1] = navButtons[i];
                    if (key !== name) {
                        const optionInfo1 = optionInfos![
                            key as keyof typeof optionInfos
                        ] as OptionInfoType;
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
                } else {
                    navButton.style.backgroundColor = "rgba(34, 34, 34, 1)";
                }
            });
        }
        optionsModal.appendChild(navBar);
        const firstButton = navBar.children[0] as HTMLButtonElement;
        firstButton.click();
    }
}

export function createTryAvoidOptions(
    optionsModalContentScrollWrapper: HTMLDivElement,
    tableBody: HTMLTableSectionElement
): [HTMLElement, string][] {
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
    if (Options.categoryTrue(categoryName)) {
        selectAllButton.innerHTML = "Deselect All";
    } else {
        selectAllButton.innerHTML = "Select All";
    }
    giveHoverAnimation(selectAllButton);
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
    return [
        [tableRow, ""],
        [selectAllButtonContainer, "flex"],
    ];
}

export function createFilter(
    optionsModalContentScrollWrapper: HTMLDivElement,
    tableBody: HTMLTableSectionElement
): [HTMLElement, string][] {
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
    } else {
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

    const htmlSelectGroupButtons: [keyof typeof GROUPS, HTMLDivElement][] = [];
    const htmlSelectOpButtons: {
        [k in keyof typeof GROUPS]?: [AllOPNames, HTMLDivElement][];
    } = {};
    for (const nKey in GROUPS) {
        const key = nKey as keyof typeof GROUPS;
        const group = GROUPS[key];
        const groupSelectdata = document.createElement("td");
        const groupSelectContainer = document.createElement("div");
        groupSelectContainer.className = "group-select-container";
        const groupSelectButton = document.createElement("div");
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
                groupSelectdata.colSpan = 2;
            } else if (group.ops.length === 1) {
                groupSelectdata.colSpan = 1;
            } else {
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
    return [
        [filterTableRow, ""],
        [filterSelectAllContainer, ""],
    ];
}

Options.parseCookie();
//#endregion
