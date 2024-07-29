//#region Main
import { AnimationPointType, PointType } from "../../types/animation.js";
import { lerp } from "../math.js";
import { Vector2 } from "../vector.js";
import { AnimationPoint } from "./animationPoint.js";
import { AnimationGraph } from "./renderer.js";
export type TimeType = "s" | "ms";

export class AnimationCurve {
    points: AnimationPoint[];
    graph: AnimationGraph;
    constructor(...points: (AnimationPointType | AnimationPoint)[]) {
        this.points = points.map((point) => {
            if (point instanceof AnimationPoint) {
                return point;
            } else {
                return new AnimationPoint(point[0], point[1], point[2]);
            }
        });
        this.graph = new AnimationGraph({ points: this.points });
    }
    #BezierHasTwoAnchors(curve: AnimationPoint[]): boolean {
        let count = 0;
        for (let i = 0; i < curve.length; i++) {
            const point = curve[i];
            if (point.type === "achor") {
                count++;
                if (count > 1) {
                    return true;
                }
            }
        }
        return false;
    }
    #fetchAllBezierCurves(): AnimationPoint[][] {
        const curves: AnimationPoint[][] = [];
        let count = 0;
        for (let i = 0; i < this.points.length; i++) {
            let curve = curves[count];
            if (curve === undefined) {
                curve = curves[count] = [];
            }
            const point = this.points[i];
            if (curve.length <= 0 && point.type === "achor") {
                curve.push(point);
            } else {
                if (point.type === "control") {
                    curve.push(point);
                } else {
                    curve.push(point);
                    count++;
                    curve = curves[count];
                    if (curve === undefined) {
                        curve = curves[count] = [];
                    }
                    curve.push(point);
                }
            }
        }
        if (curves.length > 0) {
            const lastCurve = curves[curves.length - 1];
            if (!this.#BezierHasTwoAnchors(lastCurve)) {
                curves.splice(curves.length - 1, 1);
            }
        }
        return curves;
    }
    #polynomalCoefficients(curve: AnimationPoint[]) {
        let result: Vector2 | null = null;
        for (let i = 0; i < curve.length; i++) {
            const point = curve[i];
            if (result === null) {
                result = point;
            }
        }
    }

    fetchTime(time: number) {
        const curves = this.#fetchAllBezierCurves();
        time *= curves.length;
        console.log(time);
    }
}
export class AnimationType {
    static get linear(): AnimationCurve {
        return new AnimationCurve(["achor", 0, 0], ["achor", 1, 1]);
    }
    static get ease(): AnimationCurve {
        return new AnimationCurve(
            ["achor", 0, 0],
            ["control", 0.25, 0.1],
            ["control", 0.25, 1],
            ["achor", 1, 1]
        );
    }
    static get easeIn(): AnimationCurve {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.42, 0], ["achor", 1, 1]);
    }
    static get easeInOut(): AnimationCurve {
        return new AnimationCurve(
            ["achor", 0, 0],
            ["control", 0.42, 0],
            ["control", 0.58, 1],
            ["achor", 1, 1]
        );
    }
    static get easeOut(): AnimationCurve {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.58, 1], ["achor", 1, 1]);
    }
}

export default class Animator {
    condition: number | ((...args: any[]) => boolean);
    conditionArgs: any[];
    animate?: (delta: number, ...args: any[]) => void;
    animationArgs: any[];
    animationType: AnimationCurve;
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
            animationType?: AnimationCurve;
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
        this.animationType = info.animationType ?? AnimationType.linear;
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
//#endregion
