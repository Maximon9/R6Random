export default class IDKButImHardRN {
    #timeout;
    #func: (...args: any[]) => any;
    #ms: number;
    constructor(
        func: (...args: any[]) => any,
        info: {
            ms?: number;
            autoStart?: boolean;
            args?: any[];
        } = {}
    ) {
        this.#func = func;
        this.#ms = info.ms ?? 0;
        if (info.autoStart !== undefined && info.autoStart === false) {
            this.#timeout = setTimeout(this.#func, this.#ms);
        } else {
            this.#timeout = setTimeout(() => {}, 0);
        }
    }

    run(...args: any[]) {
        clearTimeout(this.#timeout);
        this.#timeout = setTimeout(this.#func, this.#ms, ...args);
    }

    changeTime(ms: number) {
        this.#ms = ms;
    }
}
