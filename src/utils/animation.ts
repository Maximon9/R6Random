import { Vector2 } from "./vector.js";
export type TimeType = "s" | "ms";

export class animationCurve extends Array<Vector2> {
    constructor(...args: ([number, number] | Vector2)[]) {
        if (Array.isArray(args) && args.length > 0) {
            super(
                ...args.map((point) => {
                    if (point instanceof Vector2) {
                        return point;
                    } else {
                        return new Vector2(point[0], point[1]);
                    }
                })
            );
        } else {
            super();
        }
    }

    fetchTime() {}
}
export class AnimationType {
    static get linear(): animationCurve {
        return new animationCurve([0, 0], [1, 1]);
    }
    static get ease(): animationCurve {
        return new animationCurve([0.25, 1], [0.25, 1]);
    }
    static get easeIn(): animationCurve {
        return new animationCurve([0.42, 0], [1, 1]);
    }
    static get easeInOut(): animationCurve {
        return new animationCurve([0.42, 1], [0.58, 1]);
    }
    static get easeOut(): animationCurve {
        return new animationCurve([0, 0], [0.58, 1]);
    }
}

export default class Animator {
    condition: number | ((...args: any[]) => boolean);
    conditionArgs: any[];
    animate?: (delta: number, ...args: any[]) => void;
    animationArgs: any[];
    animationType: animationCurve;
    speed: number = 1;
    timeType: TimeType;
    pingPong: boolean;
    autoStartAnimation: boolean;
    running: boolean;
    #deltaTime: number = 0;
    #lastTimestamp: number = 0;
    #timer: number = 0;
    constructor(
        info: {
            condition?: number | ((...args: any[]) => boolean);
            conditionArgs?: any[];
            animate?: (delta: number, ...args: any[]) => void;
            animationArgs?: any[];
            animationType?: animationCurve;
            speed?: number;
            timeType?: TimeType;
            pingPong?: boolean;
            autoStartAnimation?: boolean;
        } = {}
    ) {
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
            } else {
                this.condition = info.condition;
            }
        } else {
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
    #step = (timestamp: number) => {
        this.#deltaTime = (timestamp - this.#lastTimestamp) / 1000;
        this.#lastTimestamp = timestamp;
        console.log(this.#deltaTime);
        if (this.animate === undefined) {
            this.running = false;
        } else {
            if (typeof this.condition === "number") {
                if (this.#timer >= this.condition) {
                    this.#timer = this.condition;
                    this.running = false;
                } else {
                    this.#timer += this.#deltaTime;
                }
            } else {
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
