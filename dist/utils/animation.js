import { Vector2 } from "./vector.js";
export class animationCurve extends Array {
    constructor(...args) {
        if (Array.isArray(args) && args.length > 0) {
            super(...args.map((point) => {
                if (point instanceof Vector2) {
                    return point;
                }
                else {
                    return new Vector2(point[0], point[1]);
                }
            }));
        }
        else {
            super();
        }
    }
    fetchTime() { }
}
export class AnimationType {
    static get linear() {
        return new animationCurve([0, 0], [1, 1]);
    }
    static get ease() {
        return new animationCurve([0.25, 1], [0.25, 1]);
    }
    static get easeIn() {
        return new animationCurve([0.42, 0], [1, 1]);
    }
    static get easeInOut() {
        return new animationCurve([0.42, 1], [0.58, 1]);
    }
    static get easeOut() {
        return new animationCurve([0, 0], [0.58, 1]);
    }
}
export default class Animator {
    condition;
    conditionArgs;
    animate;
    animationArgs;
    animationType;
    speed = 1;
    timeType;
    pingPong;
    autoStartAnimation;
    running;
    #deltaTime = 0;
    #lastTimestamp = 0;
    #timer = 0;
    constructor(info = {}) {
        this.running = false;
        if (info.animate !== undefined) {
            this.animate = info.animate;
        }
        this.conditionArgs = info.conditionArgs ?? [];
        if (info.animate !== undefined) {
            this.animate = info.animate;
        }
        this.animationArgs = info.animationArgs ?? [];
        this.animationType = AnimationType.linear;
        this.speed = info.speed ?? 1;
        this.timeType = info.timeType ?? "s";
        this.pingPong = info.pingPong ?? false;
        this.autoStartAnimation = info.autoStartAnimation ?? false;
        if (info.condition !== undefined) {
            if (typeof info.condition === "number" && this.timeType === "ms") {
                this.condition = info.condition / 1000;
            }
            else {
                this.condition = info.condition;
            }
        }
        else {
            this.condition = 0;
        }
        if (this.autoStartAnimation) {
            this.start();
        }
    }
    start() {
        this.running = true;
        this.#lastTimestamp = window.performance.now();
        requestAnimationFrame(this.#step);
    }
    #step = (timestamp) => {
        this.#deltaTime = (timestamp - this.#lastTimestamp) / 1000;
        this.#lastTimestamp = timestamp;
        console.log(this.#deltaTime);
        if (this.animate === undefined) {
            this.running = false;
        }
        else {
            if (typeof this.condition === "number") {
                if (this.#timer >= this.condition) {
                    this.#timer = this.condition;
                    this.running = false;
                }
                else {
                    this.#timer += this.#deltaTime;
                }
            }
            else {
                if (this.condition(...this.conditionArgs)) {
                    this.running = false;
                }
                this.#timer += this.#deltaTime;
            }
            this.animate(this.#deltaTime, ...this.animationArgs);
        }
        if (this.running) {
            requestAnimationFrame(this.#step);
        }
    };
}
//# sourceMappingURL=animation.js.map