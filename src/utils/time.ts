export default class IDKButImHardRN {
    #timeout;
    #func: (...args: any[]) => any;
    #ms: number;
    constructor(
        func: (...args: any[]) => any,
        ms: number,
        autoStart: boolean = false,
        ...args: any[]
    ) {
        this.#func = func;
        this.#ms = ms;
        if (autoStart) {
            this.#timeout = setTimeout(this.#func, this.#ms);
        } else {
            this.#timeout = setTimeout(() => {}, 0);
        }
    }

    run(...args: any[]) {
        clearTimeout(this.#timeout);
        this.#timeout = setTimeout(this.#func, this.#ms, ...args);
    }
}
