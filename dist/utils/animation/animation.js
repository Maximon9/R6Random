import { clamp } from "../math.js";
import { Vector2 } from "../vector.js";
import { AnimationPoint } from "./animationPoint.js";
import { AnimationGraph } from "./renderer.js";
export class AnimationCurve {
    #points;
    graph;
    constructor(...points) {
        this.#points = points.map((point) => {
            if (point instanceof AnimationPoint) {
                return point;
            }
            else {
                return new AnimationPoint(point[0], point[1], point[2]);
            }
        });
        this.graph = new AnimationGraph({ points: this.#points });
    }
    addPoint(point) {
        if (!(point instanceof AnimationPoint)) {
            point = new AnimationPoint(point[0], point[1], point[2]);
        }
        this.#points.push(point);
        this.graph.points = this.#points;
    }
    get points() {
        return [...this.#points];
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
        let smallestAnchor = undefined;
        for (let i = 0; i < this.#points.length; i++) {
            const point = this.#points[i];
            if (point.type === "achor") {
                if (smallestAnchor === undefined) {
                    smallestAnchor = point;
                }
                else {
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
        let biggestAnchor = undefined;
        for (let i = points.length - 1; i >= 0; i--) {
            const point = points[i];
            if (point.type === "achor") {
                if (biggestAnchor === undefined) {
                    biggestAnchor = point;
                }
                else {
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
        const curves = [];
        let count = 0;
        for (let i = 0; i < points.length; i++) {
            let curve = curves[count];
            if (curve === undefined) {
                curve = curves[count] = [];
            }
            const point = points[i];
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
    #Lerp(time, curve, first = false) {
        const next = [];
        let prePoint = null;
        for (let i = 0; i < curve.length; i++) {
            const point = curve[i];
            if (prePoint === null) {
                prePoint = new Vector2(point.x, point.y);
            }
            else {
                prePoint.lerp(time, point);
                next.push(prePoint);
                prePoint = new Vector2(point.x, point.y);
            }
        }
        if (next.length === 1) {
            return next[0];
        }
        else if (next.length < 1) {
            return new Vector2();
        }
        return this.#Lerp(time, next);
    }
    fetchPoint(time) {
        const curves = this.#fetchAllBezierCurves();
        if (curves.length > 0) {
            const bezierTime = time * curves.length;
            let points = [];
            let timetPoint = undefined;
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
    fetchTime(time) {
        const point = this.fetchPoint(time);
        if (point !== undefined) {
            return point.x;
        }
        else {
            return time;
        }
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
    static step(interval, type = "start") {
        const animationCurve = new AnimationCurve();
        let switchToBottom = false;
        if (type === "start") {
            for (let i = 0; i < interval; i++) {
                if (switchToBottom) {
                    animationCurve.addPoint(["achor", i, 0]);
                    animationCurve.addPoint(["achor", i + 1, 0]);
                    animationCurve.addPoint(["achor", i + 1, 1]);
                }
                else {
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
        }
        else {
            for (let i = interval; i > 0; i--) {
                if (switchToBottom) {
                    animationCurve.addPoint(["achor", i, 0]);
                    animationCurve.addPoint(["achor", i - 1, 0]);
                    animationCurve.addPoint(["achor", i - 1, 1]);
                }
                else {
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
    time;
    animate;
    animationArgs;
    animationType;
    timeType;
    loop;
    #hasPinged = false;
    pingPong;
    autoStartAnimation;
    running;
    #deltaTime = 0;
    #lastTimestamp = 0;
    #timer = 0;
    constructor(info = {}) {
        this.running = false;
        this.animate = info.animate ?? (() => { });
        if (info.animate !== undefined) {
        }
        if (info.animate !== undefined) {
            this.animate = info.animate;
        }
        this.animationArgs = info.animationArgs ?? [];
        this.animationType = info.animationCurve ?? AnimationType.linear;
        this.timeType = info.timeType ?? "s";
        this.loop = info.loop ?? false;
        this.pingPong = info.pingPong ?? false;
        this.autoStartAnimation = info.autoStartAnimation ?? false;
        if (info.time !== undefined) {
            if (typeof info.time === "number" && this.timeType === "ms") {
                this.time = info.time / 1000;
            }
            else {
                this.time = info.time;
            }
        }
        else {
            this.time = 1;
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
            if (this.time > 0) {
                if (this.pingPong) {
                    if (this.#hasPinged) {
                        this.#timer -= this.#deltaTime / this.time;
                    }
                    else {
                        this.#timer += this.#deltaTime / this.time;
                    }
                    if (this.#timer >= 1 && !this.#hasPinged) {
                        this.#hasPinged = true;
                    }
                    else if (this.#timer <= 0 && this.#hasPinged) {
                        if (!this.loop) {
                            this.running = false;
                        }
                        this.#hasPinged = false;
                    }
                }
                else {
                    this.#timer += this.#deltaTime / this.time;
                    if (this.#timer >= 1) {
                        if (this.loop) {
                            this.#timer = 0;
                        }
                        else {
                            this.running = false;
                        }
                    }
                }
                if (this.running) {
                    const animationTime = this.animationType.fetchTime(this.#timer);
                    this.animate(animationTime, ...this.animationArgs);
                }
            }
            else {
                this.running = false;
            }
        }
        if (this.running) {
            requestAnimationFrame(this.#step);
        }
    };
}
//#endregion
//# sourceMappingURL=animation.js.map