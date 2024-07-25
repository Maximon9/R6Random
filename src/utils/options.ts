//#region Main
import type {
    AllOPNames,
    ALLOPParsedValues,
    CombinedOPParseKeys,
    ParsedGroupKeys,
    ParsedGroupKeysRev,
} from "../ops.js";
import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../ops.js";

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
        "Secondary Weapons": "3" as const,
        "Primary Attachments": "4" as const,
        "Secondary Attachments": "5" as const,
    },
};
export const CategoryOptionsRev = {
    "0": {
        "0": "OPs" as const,
        "1": "Equipment" as const,
        "2": "Primary Weapons" as const,
        "3": "Secondary Weapons" as const,
        "4": "Primary Attachments" as const,
        "5": "Secondary Attachments" as const,
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
            document.cookie = options;
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

Options.parseCookie();
//#endregion
