import { GROUPS, GroupParseKeys, GroupParseKeysRev, OPParseKeys } from "../ops.js";
export const AvoidOptions = {
    "OP Dupes": "0",
    "Equipment Dupes": "1",
    "Primary Weapon Dupes": "2",
    "Secondary Weapon Dupes": "3",
    "Primary Attachment Dupes": "4",
    "Secondary Attachment Dupes": "5",
};
export const AvoidOptionsRev = {
    "0": "OP Dupes",
    "1": "Equipment Dupes",
    "2": "Primary Weapon Dupes",
    "3": "Secondary Weapon Dupes",
    "4": "Primary Attachment Dupes",
    "5": "Secondary Attachment Dupes",
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
            document.cookie = options;
        }
        else if (options !== "" && filter !== "") {
            document.cookie = filter + "$" + options;
        }
        else {
            document.cookie = "Null";
        }
        console.log(document.cookie);
    }
    static optionTrue(key) {
        if (this.options[AvoidOptions[key]] === undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    static setOption(key, value) {
        this.options[AvoidOptions[key]] = value;
        this.#setCookie();
    }
    static removeOption(key) {
        const nKey = AvoidOptions[key];
        if (this.options[nKey] !== undefined) {
            delete this.options[nKey];
        }
        this.#setCookie();
    }
    static parseCookie() {
        const cookies = document.cookie.split("$");
        if (cookies.length > 0) {
            this.Filter.parseFilterCookie(cookies[0]);
            if (cookies.length > 1) {
                this.Filter.parseFilterCookie(cookies[0]);
                const vars = cookies[1].split("|");
                for (let i = 0; i < vars.length; i++) {
                    const v = vars[i];
                    const [key, value] = v.split(":");
                    if (key !== undefined && value !== undefined) {
                        this.options[key] = Boolean(Number(value));
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
            if (i < keys.length - 1) {
                str += `${key}:${value ? 1 : 0}|`;
            }
            else {
                str += `${key}:${value ? 1 : 0}`;
            }
        }
        return str;
    }
}
Options.parseCookie();
//#endregion
//# sourceMappingURL=options.js.map