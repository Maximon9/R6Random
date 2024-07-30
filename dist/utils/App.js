import { Renderer2D } from "./animation/renderer.js";
const canvas = document.getElementsByClassName("canvas").item(0);
if (canvas !== null) {
    canvas.width = window.innerWidth * (90 / 100);
    canvas.height = window.innerHeight * (90 / 100);
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth * (90 / 100);
        canvas.height = window.innerHeight * (90 / 100);
    });
    const ctx = canvas.getContext("2d");
    if (ctx !== null) {
        Renderer2D.setCanvas(canvas);
        Renderer2D.setContext(ctx);
    }
}
export default class App {
    static deltaTime = 0;
    static #lastTimestamp = 0;
    static timeScale = 1;
    static #listeners = {};
    static #hasStarted = false;
    static start() {
        if (!this.#hasStarted) {
            this.#hasStarted = true;
            const listeners = this.#listeners["start"];
            if (listeners !== undefined) {
                for (let i = 0; i < listeners.length; i++) {
                    const listener = listeners[i];
                    listener();
                }
            }
            this.#lastTimestamp = Date.now();
            requestAnimationFrame(this.#update);
        }
    }
    static #update = (timestamp) => {
        timestamp = Date.now();
        this.deltaTime = ((timestamp - this.#lastTimestamp) / 1000) * this.timeScale;
        this.#lastTimestamp = timestamp;
        console.log(this.deltaTime);
        requestAnimationFrame(this.#update);
        const listeners = this.#listeners["update"];
        if (listeners !== undefined) {
            for (let i = 0; i < listeners.length; i++) {
                const listener = listeners[i];
                listener();
            }
        }
        Renderer2D.render();
    };
    static addEventListener(event, listener) {
        if (this.#listeners[event] === undefined) {
            this.#listeners[event] = [];
        }
        this.#listeners[event].push(listener);
    }
    static removeEventListenersFrom(event) {
        delete this.#listeners[event];
    }
    static removeAllEventListeners() {
        for (const key in this.#listeners) {
            delete this.#listeners[key];
        }
    }
    static getListenerLength(event) {
        return this.#listeners[event]?.length ?? 0;
    }
}
//# sourceMappingURL=App.js.map