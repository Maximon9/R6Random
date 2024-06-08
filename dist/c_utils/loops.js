const isCallback = (func) => typeof func === "function";
export class Interval {
    #timeout = setTimeout(() => { }, 0);
    #ms;
    #running = false;
    #return;
    get return() {
        return this.#return;
    }
    #func;
    #args;
    get func() {
        return this.#func;
    }
    get args() {
        return this.#args;
    }
    changeFunc(func, ...args) {
        this.#func = func;
        this.changeFuncArgs(args);
    }
    changeFuncArgs(args = []) {
        this.#args = args;
    }
    #runOnce;
    #runOnceArgs;
    get runOnce() {
        return this.#runOnce;
    }
    get runOnceArgs() {
        return this.#runOnceArgs;
    }
    changeRunOnce(func, ...args) {
        this.#runOnce = func;
        this.changeRunOnceArgs(args);
    }
    changeRunOnceArgs(args = []) {
        this.#runOnceArgs = args;
    }
    constructor(func, ms, args = [], autostart = true) {
        this.#running = false;
        this.#ms = ms; // interval in second
        this.#func = func; // the function to be run
        this.#return = undefined; // The returned data
        this.#args = args;
        this.#runOnce = undefined; // asociated with runOnce() method
        this.#runOnceArgs = undefined; // asociated with runOnce() method
        if (func !== undefined && ms !== undefined && autostart) {
            this.#running = true;
            if (!isCallback(func)) {
                throw Error("[TypeError] non-callable object is given");
            }
            if (typeof ms !== "number") {
                throw Error("[TypeError] A non-numeric object is given");
            }
            this.#timeout = setTimeout(this.#loop, this.#ms);
        }
    }
    changeInterval(ms) {
        if (typeof ms !== "number") {
            throw Error("[TypeError]: A non-numeric object is given");
        }
        // prevent error when providing interval to a blueprint
        if (this.running) {
            clearTimeout(this.#timeout);
        }
        this.#ms = ms;
        // prevent error when providing interval to a blueprint
        // if the function hasn't provided yet
        if (this.running) {
            this.#timeout = setTimeout(this.#loop, this.#ms);
        }
    }
    changeNextInterval(ms) {
        if (typeof ms !== "number") {
            throw Error("[TypeError]: A non-numeric object is given");
        }
        this.#ms = ms;
    }
    get running() {
        return this.#running;
    }
    start() {
        if (!this.#running) {
            if (!this.isValid()) {
                throw Error("[IntervalNotValid]: The function and/or the " + "interval hasn't provided or invalid.");
            }
            this.#running = true;
            this.#timeout = setTimeout(this.#loop, this.#ms);
        }
        else {
            throw Error("[AlreadyRunning]: Tried to run an already run interval");
        }
    }
    #loop = () => {
        if (this.#running) {
            const func = this.#func, args = this.#args;
            if (this.#runOnce !== undefined && this.#runOnceArgs !== undefined) {
                // someone has provide the runOnce
                const runOnce = this.#runOnce;
                this.#runOnce = undefined;
                const result = runOnce(...this.#runOnceArgs);
                this.#runOnceArgs = undefined;
                // if and only if the result is False. not accept "None"
                // nor zero.
                if (result === false) {
                    return;
                } // cancel the interval right now
            }
            if (isCallback(func)) {
                this.#return = func(...args);
            }
            this.#timeout = setTimeout(this.#loop, this.#ms);
        }
    };
    isValid() {
        if (!isCallback(this.#func)) {
            return false;
        }
        if (typeof this.#ms !== "number") {
            return false;
        }
        return true;
    }
    abort() {
        if (this.#running) {
            this.#running = false;
            clearTimeout(this.#timeout);
        }
    }
}
//# sourceMappingURL=loops.js.map