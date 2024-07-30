//#region Main
/* 2512 */
import type { AnimationPointType, StartType } from "../../types/animation.js";
import { clamp } from "../math.js";
import { Vector2 } from "../vector.js";
import { AnimationPoint } from "./animationPoint.js";
import { AnimationGraph } from "./renderer.js";
export type TimeType = "s" | "ms";

export class AnimationCurve {
    #points: AnimationPoint[];
    graph: AnimationGraph;
    constructor(...points: (AnimationPointType | AnimationPoint)[]) {
        this.#points = points.map((point) => {
            if (point instanceof AnimationPoint) {
                return point;
            } else {
                return new AnimationPoint(point[0], point[1], point[2]);
            }
        });
        this.graph = new AnimationGraph({ points: this.#points });
    }
    addPoint(point: AnimationPointType | AnimationPoint) {
        if (!(point instanceof AnimationPoint)) {
            point = new AnimationPoint(point[0], point[1], point[2]);
        }
        this.#points.push(point);
        this.graph.points = this.#points;
    }

    get points(): AnimationPoint[] {
        return [...this.#points];
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
        let smallestAnchor: Vector2 | undefined = undefined;
        for (let i = 0; i < this.#points.length; i++) {
            const point = this.#points[i];
            if (point.type === "achor") {
                if (smallestAnchor === undefined) {
                    smallestAnchor = point;
                } else {
                    if (point.x < smallestAnchor.x || point.y < smallestAnchor.y) {
                        smallestAnchor = point;
                    }
                }
            }
        }
        if (smallestAnchor === undefined) {
            for (let i = 0; i < this.#points.length; i++) {
                const point = this.#points[i];
                if (point.type === "achor") {
                    if (smallestAnchor !== undefined) {
                        smallestAnchor = point;
                        break;
                    }
                }
            }
        }
        const smallX = smallestAnchor?.x ?? 0;
        const smallY = smallestAnchor?.y ?? 0;
        let points = this.#points.map((point) => {
            const newPoint = new AnimationPoint(point.type, point.x, point.y);
            if (smallX !== 0) {
                newPoint.x = newPoint.x / -smallX + 1;
            }
            if (smallY !== 0) {
                newPoint.y = newPoint.y / -smallY + 1;
            }
            return newPoint;
        });
        let biggestAnchor: Vector2 | undefined = undefined;
        for (let i = points.length - 1; i >= 0; i--) {
            const point = points[i];
            if (point.type === "achor") {
                if (biggestAnchor === undefined) {
                    biggestAnchor = point;
                } else {
                    if (point.x > biggestAnchor.x || point.y > biggestAnchor.y) {
                        biggestAnchor = point;
                    }
                }
            }
        }
        if (biggestAnchor === undefined) {
            for (let i = points.length - 1; i >= 0; i--) {
                const point = this.#points[i];
                if (point.type === "achor") {
                    if (biggestAnchor !== undefined) {
                        biggestAnchor = point;
                        break;
                    }
                }
            }
        }
        const bigX = biggestAnchor?.x ?? 0;
        const bigY = biggestAnchor?.y ?? 0;
        points = points.map((point) => {
            const newPoint = new AnimationPoint(point.type, point.x, point.y);
            if (bigX !== 0) {
                newPoint.x /= bigX;
            }
            if (bigY !== 0) {
                newPoint.y /= bigY;
            }
            return newPoint;
        });
        const curves: AnimationPoint[][] = [];
        let count = 0;
        for (let i = 0; i < points.length; i++) {
            let curve = curves[count];
            if (curve === undefined) {
                curve = curves[count] = [];
            }
            const point = points[i];
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
    #Lerp(time: number, curve: Vector2[], first: boolean = false): Vector2 {
        const next: Vector2[] = [];
        let prePoint: Vector2 | null = null;
        for (let i = 0; i < curve.length; i++) {
            const point = curve[i];
            if (prePoint === null) {
                prePoint = new Vector2(point.x, point.y);
            } else {
                prePoint.lerp(time, point);
                next.push(prePoint);
                prePoint = new Vector2(point.x, point.y);
            }
        }
        if (next.length === 1) {
            return next[0];
        } else if (next.length < 1) {
            return new Vector2();
        }
        return this.#Lerp(time, next);
    }

    fetchPoint(time: number): Vector2 | undefined {
        const curves = this.#fetchAllBezierCurves();
        if (curves.length > 0) {
            const bezierTime = time * curves.length;
            let points: [number, Vector2][] = [];
            let timetPoint: Vector2 | undefined = undefined;
            for (let i = 0; i < curves.length; i++) {
                const curve = curves[i];
                const realTime = clamp(bezierTime - i, 0, 1);
                const point = this.#Lerp(realTime, curve, true);
                if (realTime > 0 && realTime < 1) {
                    timetPoint = point;
                    break;
                }
                points.push([realTime, point]);
            }
            if (timetPoint === undefined) {
                for (let i = points.length - 1; i >= 0; i--) {
                    const [bezierTime, point] = points[i];
                    if (bezierTime === 1) {
                        timetPoint = point;
                        break;
                    }
                }
            }
            if (timetPoint === undefined) {
                for (let i = 0; i < points.length; i++) {
                    const [bezierTime, point] = points[i];
                    if (bezierTime === 0) {
                        timetPoint = point;
                        break;
                    }
                }
            }
            if (timetPoint !== undefined) {
                const animationPoint = new Vector2(timetPoint.x, timetPoint.y);
                this.graph.otherPoints = [animationPoint];
                return timetPoint;
            }
        }
    }

    fetchTime(time: number): number {
        const point = this.fetchPoint(time);
        if (point !== undefined) {
            return point.x;
        } else {
            return time;
        }
    }
}
export class AnimationCurves {
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
    static step(interval: number, type: StartType = "start"): AnimationCurve {
        const animationCurve = new AnimationCurve();
        let switchToBottom = false;
        if (type === "start") {
            for (let i = 0; i < interval; i++) {
                if (switchToBottom) {
                    animationCurve.addPoint(["achor", i, 0]);
                    animationCurve.addPoint(["achor", i + 1, 0]);
                    animationCurve.addPoint(["achor", i + 1, 1]);
                } else {
                    if (i === 0) {
                        animationCurve.addPoint(["achor", i, 0]);
                        animationCurve.addPoint(["achor", i, 1]);
                    }
                    animationCurve.addPoint(["achor", i + 1, 1]);
                    console.log(["achor", i + 1, 1]);
                    if (i === interval - 1) {
                        animationCurve.addPoint(["achor", i + 1, 0]);
                    }
                }
                switchToBottom = !switchToBottom;
            }
        } else {
            for (let i = interval; i > 0; i--) {
                if (switchToBottom) {
                    animationCurve.addPoint(["achor", i, 0]);
                    animationCurve.addPoint(["achor", i - 1, 0]);
                    animationCurve.addPoint(["achor", i - 1, 1]);
                } else {
                    if (i === interval) {
                        animationCurve.addPoint(["achor", i, 0]);
                        animationCurve.addPoint(["achor", i, 1]);
                    }
                    animationCurve.addPoint(["achor", i - 1, 1]);
                    if (i === 1) {
                        animationCurve.addPoint(["achor", i - 1, 0]);
                    }
                }
                switchToBottom = !switchToBottom;
            }
        }
        return animationCurve;
    }
}

export default class Animator {
    time: number;
    animate?: (time: number, ...args: any[]) => void;
    args: any[];
    animationType: AnimationCurve;
    timeType: TimeType;
    infinite: boolean;
    #hasPinged: boolean = false;
    pingPong: boolean;
    autoStartAnimation: boolean;
    changeStart: boolean;
    restartTimer: boolean;
    startType: StartType;
    running: boolean;
    #timer: number;
    #deltaTime: number = 0;
    #lastTimestamp: number = 0;
    #sign: -1 | 1 = 1;
    constructor(
        info: {
            time?: number;
            animate?: (time: number, start: StartType, ...args: any[]) => void;
            args?: any[];
            animationCurve?: AnimationCurve;
            timeType?: TimeType;
            infinite?: boolean;
            pingPong?: boolean;
            autoStartAnimation?: boolean;
            restartTimer?: boolean;
            changeStart?: boolean;
            start?: StartType;
        } = {}
    ) {
        this.running = false;
        this.animate = info.animate ?? (() => {});
        if (info.animate !== undefined) {
        }
        if (info.animate !== undefined) {
            this.animate = info.animate;
        }
        this.args = info.args ?? [];
        this.animationType = info.animationCurve ?? AnimationCurves.linear;
        this.timeType = info.timeType ?? "s";
        this.infinite = info.infinite ?? false;
        this.pingPong = info.pingPong ?? false;
        this.autoStartAnimation = info.autoStartAnimation ?? false;
        this.changeStart = info.changeStart ?? true;
        this.restartTimer = info.restartTimer ?? true;
        this.startType = info.start ?? "start";
        if (this.startType === "start") {
            this.#timer = 0;
        } else {
            this.#timer = 1;
        }

        if (info.time !== undefined) {
            if (typeof info.time === "number" && this.timeType === "ms") {
                this.time = info.time / 1000;
            } else {
                this.time = info.time;
            }
        } else {
            this.time = 1;
        }

        if (this.autoStartAnimation) {
            this.start();
        }
    }

    setArgs(...args: any[]) {
        this.args = args;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.#lastTimestamp = window.performance.now();
            requestAnimationFrame(this.#step);
        }
    }
    stop() {
        if (this.running) {
            this.running = false;
        }
        if (this.changeStart) {
            if (this.startType === "start") {
                this.startType = "end";
            } else {
                this.startType = "start";
            }
        }
    }
    #step = (timestamp: number) => {
        if (!this.running) {
            this.setArgs();
            return;
        }
        this.#deltaTime = (timestamp - this.#lastTimestamp) / 1000;
        this.#lastTimestamp = timestamp;
        if (this.animate === undefined) {
            this.running = false;
        } else if (this.time > 0) {
            if (this.startType === "start") {
                if (this.#hasPinged) {
                    this.#sign = -1;
                } else {
                    this.#sign = 1;
                }
            } else {
                if (this.#hasPinged) {
                    this.#sign = 1;
                } else {
                    this.#sign = -1;
                }
            }
            this.#timer += this.#sign * (this.#deltaTime / this.time);
            if (this.pingPong) {
                console.log(this.#timer);
                if (this.startType === "start") {
                    if (this.#timer >= 1 && !this.#hasPinged) {
                        this.#hasPinged = true;
                    } else if (this.#timer <= 0 && this.#hasPinged) {
                        if (!this.infinite) {
                            this.running = false;
                        }
                        this.#hasPinged = false;
                    }
                } else {
                    if (this.#timer <= 0 && !this.#hasPinged) {
                        this.#hasPinged = true;
                    } else if (this.#timer >= 1 && this.#hasPinged) {
                        if (!this.infinite) {
                            this.running = false;
                        }
                        this.#hasPinged = false;
                    }
                }
            } else {
                if (this.startType === "start") {
                    if (this.#timer >= 1) {
                        if (!this.infinite) {
                            this.running = false;
                        } else {
                            if (this.restartTimer) {
                                this.#timer -= 1;
                            } else {
                                this.startType = "end";
                            }
                        }
                    }
                } else {
                    if (this.#timer <= 0) {
                        if (!this.infinite) {
                            this.running = false;
                        } else {
                            if (this.restartTimer) {
                                this.#timer += 1;
                            } else {
                                this.startType = "start";
                            }
                        }
                    }
                }
            }
            const animationTime = this.animationType.fetchTime(this.#timer);
            this.animate(animationTime, ...this.args);
        } else {
            this.running = false;
        }
        requestAnimationFrame(this.#step);
        if (!this.running) {
            if (!this.#hasPinged) {
                if (!this.restartTimer) {
                    if (this.startType === "start") {
                        this.startType = "end";
                    } else {
                        this.startType = "start";
                    }
                }
            }
        }
    };
}
//#endregion
