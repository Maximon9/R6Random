import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../ops.js";
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
Options.parseCookie();
//#endregion
//# sourceMappingURL=options.js.map