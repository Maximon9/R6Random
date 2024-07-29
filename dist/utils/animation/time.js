export default class IDKButImHardRN {
    #timeout;
    #func;
    #ms;
    constructor(func, ms, autoStart = false, ...args) {
        this.#func = func;
        this.#ms = ms;
        if (autoStart) {
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
}
//# sourceMappingURL=time.js.map