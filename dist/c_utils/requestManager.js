import { Interval } from "./loops.js";
export class RequestManager {
    requests = [];
    #interval = new Interval(undefined, 0, undefined, false);
    #startRequestFunc;
    #endRequestFunc;
    constructor(startRequestFunc, endRequestFunc) {
        this.#startRequestFunc = startRequestFunc;
        this.#endRequestFunc = endRequestFunc;
    }
    get length() {
        return this.requests.length;
    }
    request(request) {
        const length = this.length;
        if (length > 0) {
            if (this.requests[length - 1]["data"] === request) {
                return;
            }
        }
        this.requests.push({
            data: request,
            started: false,
            finished: false,
        });
        if (this.#interval.func === undefined) {
            this.#interval.changeFunc(this.#update);
        }
        if (!this.#interval.running) {
            this.#interval.start();
        }
    }
    finishRequest() {
        this.requests[0]["finished"] = true;
    }
    #update = () => {
        if (this.length > 0) {
            const request = this.requests[0];
            if (request !== undefined) {
                if (request["started"] === false) {
                    request["started"] = true;
                    this.#startRequestFunc(request);
                }
                if (request["finished"] === true) {
                    delete this.requests[0];
                    if (this.#endRequestFunc !== undefined) {
                        this.#endRequestFunc(request);
                    }
                }
            }
            else {
                this.#abort();
            }
        }
        else {
            this.#abort();
        }
    };
    #abort() {
        this.#interval.abort();
    }
}
//# sourceMappingURL=requestManager.js.map