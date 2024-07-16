import { GROUPS } from "../ops.js";

export default class Options {
    static options: { [k: string]: boolean } = {};
    static Filter = class {
        static filter: { [k: string]: { [k: string]: boolean } } = {};

        static startFilter(cookie: string) {
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
                            this.filter[g_key][key] = Boolean(Number(value));
                        }
                    }
                }
            }
            for (const key in GROUPS) {
                const group = GROUPS[key];
                if (this.filter[key] === undefined) {
                    this.filter[key] = {};
                }
                for (let i = 0; i < group.ops.length; i++) {
                    const op = group.ops[i];
                    if (this.filter[key][op.name] === undefined) {
                        this.filter[key][op.name] = true;
                    }
                }
            }
        }
        static toString(): string {
            let str = "";
            const keys = Object.keys(this.filter);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = this.filter[key];
                const op_keys = Object.keys(value);
                str += `${key}#`;
                for (let i1 = 0; i1 < op_keys.length; i1++) {
                    const op_key = op_keys[i1];
                    const op_value = value[op_key];
                    if (i < op_keys.length - 1) {
                        str += `${op_key}:${op_value ? 1 : 0}|`;
                    } else {
                        str += `${op_key}:${op_value ? 1 : 0}`;
                    }
                }
                if (i < op_keys.length - 1) str += `%`;
            }
            return str;
        }

        static get AllTrue(): boolean {
            for (const key in this.filter) {
                const value = this.filter[key];
                for (const op_key in value) {
                    if (value[op_key] === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        static GroupTrue(key: string): boolean {
            const value = this.filter[key];
            if (value === undefined) {
                throw Error(`${key} isn't a real group`);
            } else {
                for (const op_key in value) {
                    if (value[op_key] === false) {
                        return false;
                    }
                }
            }
            return true;
        }
        static OPTrue(groupKey: string, key: string): boolean {
            const value = this.filter[groupKey];
            if (value === undefined) {
                throw Error(`${groupKey} isn't a real Group`);
            } else {
                if (value[key] === undefined) {
                    throw Error(`${key} isn't a real OP`);
                } else {
                    return value[key];
                }
            }
        }

        static #changeAllFilterValues(v: boolean) {
            for (const key in this.filter) {
                const value = this.filter[key];
                for (const op_key in value) {
                    value[op_key] = v;
                }
            }
            Options.#setCookie();
        }
        static #changeAGroup(key: string, v: boolean) {
            const value = this.filter[key];
            if (value === undefined) {
                throw Error(`${key} isn't a real group`);
            } else {
                for (const op_key in value) {
                    value[op_key] = v;
                }
                Options.#setCookie();
            }
        }
        static #changeOP(groupKey: string, key: string, v: boolean) {
            const value = this.filter[groupKey];
            if (value === undefined) {
                throw Error(`${groupKey} isn't a real Group`);
            } else {
                if (value[key] === undefined) {
                    throw Error(`${key} isn't a real OP`);
                } else {
                    value[key] = v;
                    Options.#setCookie();
                }
            }
        }

        static selectOP(groupKey: string, key: string) {
            this.#changeOP(groupKey, key, true);
        }
        static deselectOP(groupKey: string, key: string) {
            this.#changeOP(groupKey, key, false);
        }

        static selectAll() {
            this.#changeAllFilterValues(true);
        }
        static deselectAll() {
            this.#changeAllFilterValues(false);
        }

        static selectGroup(key: string) {
            this.#changeAGroup(key, true);
        }
        static delectGroup(key: string) {
            this.#changeAGroup(key, false);
        }
    };
    static #setCookie() {
        document.cookie = this.Filter.toString() + "$" + this.toString();
    }
    static setOption(key: string, value: boolean) {
        this.options[key] = value;
        this.#setCookie();
    }
    static removeOption(key: string) {
        if (this.options[key] !== undefined) {
            delete this.options[key];
        }
        this.#setCookie();
    }
    static parseCookie() {
        const cookies = document.cookie.split("$");
        if (cookies.length > 0) {
            this.Filter.startFilter(cookies[0]);
            if (cookies.length > 1) {
                this.Filter.startFilter(cookies[0]);
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
    static toString(): string {
        let str = "";
        const keys = Object.keys(this.options);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = this.options[key];
            if (i < keys.length - 1) {
                str += `${key}:${value ? 1 : 0}|`;
            } else {
                str += `${key}:${value ? 1 : 0}`;
            }
        }
        return str;
    }
}

Options.parseCookie();
