import { AnimationPoint } from "./animationPoint.js";
import { AnimationGraph } from "./renderer.js";
export class AnimationCurve {
    points;
    graph;
    constructor(...points) {
        this.points = points.map((point) => {
            if (point instanceof AnimationPoint) {
                return point;
            }
            else {
                return new AnimationPoint(point[0], point[1], point[2]);
            }
        });
        this.graph = new AnimationGraph({ points: this.points });
    }
    #BezierHasTwoAnchors(curve) {
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
    #fetchAllBezierCurves() {
        const curves = [];
        let count = 0;
        for (let i = 0; i < this.points.length; i++) {
            let curve = curves[count];
            if (curve === undefined) {
                curve = curves[count] = [];
            }
            const point = this.points[i];
            if (curve.length <= 0 && point.type === "achor") {
                curve.push(point);
            }
            else {
                if (point.type === "control") {
                    curve.push(point);
                }
                else {
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
    #polynomalCoefficients(curve) {
        let result = null;
        for (let i = 0; i < curve.length; i++) {
            const point = curve[i];
            if (result === null) {
                result = point;
            }
        }
    }
    fetchTime(time) {
        const curves = this.#fetchAllBezierCurves();
        time *= curves.length;
        console.log(time);
    }
}
export class AnimationType {
    static get linear() {
        return new AnimationCurve(["achor", 0, 0], ["achor", 1, 1]);
    }
    static get ease() {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.25, 0.1], ["control", 0.25, 1], ["achor", 1, 1]);
    }
    static get easeIn() {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.42, 0], ["achor", 1, 1]);
    }
    static get easeInOut() {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.42, 0], ["control", 0.58, 1], ["achor", 1, 1]);
    }
    static get easeOut() {
        return new AnimationCurve(["achor", 0, 0], ["control", 0.58, 1], ["achor", 1, 1]);
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
        this.animationType = info.animationType ?? AnimationType.linear;
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
//#endregion
//# sourceMappingURL=animation.js.map