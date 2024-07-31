export default class IDKButImHardRN {
    #timeout;
    #func;
    #ms;
    constructor(func, info = {}) {
        this.#func = func;
        this.#ms = info.ms ?? 0;
        if (info.autoStart !== undefined && info.autoStart === false) {
            this.#timeout = setTimeout(this.#func, this.#ms);
        }
        else {
            this.#timeout = setTimeout(() => { }, 0);
        }
    }
    run(...args) {
        clearTimeout(this.#timeout);
        this.#timeout = setTimeout(this.#func, this.#ms, ...args);
    }
    changeTime(ms) {
        this.#ms = ms;
    }
}
//# sourceMappingURL=time.js.map