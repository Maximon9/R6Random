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
        let smallestPoint = undefined;
        for (let i = 0; i < this.#points.length; i++) {
            const point = this.#points[i];
            if (point.type === "achor") {
                if (smallestPoint === undefined) {
                    smallestPoint = point;
                }
                else {
                    if (point.x < smallestPoint.x) {
                        smallestPoint = point;
                    }
                }
            }
        }
        if (smallestPoint === undefined) {
            for (let i = 0; i < this.#points.length; i++) {
                const point = this.#points[i];
                if (point.type === "achor") {
                    if (smallestPoint !== undefined) {
                        smallestPoint = point;
                        break;
                    }
                }
            }
        }
        const smallX = smallestPoint?.x ?? 0;
        const smallY = smallestPoint?.y ?? 0;
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
        let biggestPoint = undefined;
        for (let i = points.length - 1; i >= 0; i--) {
            const point = points[i];
            if (point.type === "achor") {
                if (biggestPoint === undefined) {
                    biggestPoint = point;
                }
                else {
                    if (point.x > biggestPoint.x) {
                        biggestPoint = point;
                    }
                }
            }
        }
        if (biggestPoint === undefined) {
            for (let i = points.length - 1; i >= 0; i--) {
                const point = this.#points[i];
                if (point.type === "achor") {
                    if (biggestPoint !== undefined) {
                        biggestPoint = point;
                        break;
                    }
                }
            }
        }
        const bigX = biggestPoint?.x ?? 0;
        const bigY = biggestPoint?.y ?? 0;
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
export class AnimationCurves {
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
export class Animator {
    #animate;
    options;
    args;
    get running() {
        const data = this.currentTimelineData;
        return data === undefined ? false : data.timeline.running;
    }
    #timelineData = [];
    get currentTimelineData() {
        if (this.#timelineData.length > 0) {
            return this.#timelineData[this.#timelineData.length - 1];
        }
        else {
            return undefined;
        }
    }
    constructor(animate, options = {}) {
        this.#animate = animate;
        this.args = options.args ?? [];
        this.options = {
            time: 0,
            fill: false,
            animationCurve: AnimationCurves.linear,
            infinite: false,
            pingPong: false,
        };
        options.timeType = options.timeType ?? "s";
        if (options.time !== undefined) {
            if (typeof options.time === "number" && options.timeType === "ms") {
                options.time = options.time / 1000;
            }
            else {
                options.time = options.time;
            }
        }
        else {
            options.time = 0;
        }
        this.setOptions({
            time: options.time,
            fill: options.fill,
            animationCurve: options.animationCurve,
            infinite: options.infinite,
            pingPong: options.pingPong,
        });
    }
    setOptions(options) {
        let key;
        for (key in options) {
            const value = options[key];
            if (value !== undefined) {
                this.options[key] = value;
            }
        }
    }
    setArgs = (...args) => {
        this.args = args;
    };
    changeAnimation(animate) {
        this.#animate = animate;
    }
    play = (...args) => {
        let animate = undefined;
        let options = undefined;
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (typeof arg === "function") {
                animate = arg;
            }
            else if (arg !== undefined) {
                options = arg;
            }
        }
        if (animate === undefined) {
            animate = this.#animate;
        }
        if (options === undefined) {
            options = this.options;
        }
        const optionsTime = options?.time ?? 0;
        console.log(optionsTime);
        const timeline = {
            time: optionsTime,
            paused: false,
            running: true,
            timer: 0,
            deltaTime: 0,
            reverseTimer: false,
            lastTimestamp: window.performance.now(),
            sign: 1,
        };
        if (this.#timelineData.length > 0) {
            for (let i = 0; i < this.#timelineData.length; i++) {
                const d = this.#timelineData[i];
                d.timeline.paused = true;
            }
            this.#timelineData.splice(0, this.#timelineData.length);
        }
        const data = { timeline, listeners: {} };
        this.#timelineData.push(data);
        requestAnimationFrame((timestamp) => {
            this.#udpate(timestamp, animate, options, data);
        });
        return this;
    };
    pause = () => {
        if (this.currentTimelineData !== undefined && this.currentTimelineData.timeline.paused) {
            this.currentTimelineData.timeline.paused = true;
        }
        return this;
    };
    #udpate = (timestamp, animate, options, data) => {
        if (data.timeline.paused) {
            this.#emit("pause", data);
            return;
        }
        if (!data.timeline.running) {
            data.timeline.reverseTimer = false;
            if (options.infinite) {
                data.timeline.running = true;
            }
            else {
                this.#emit("finish", data);
                return;
            }
        }
        data.timeline.deltaTime = (timestamp - data.timeline.lastTimestamp) / 1000;
        data.timeline.lastTimestamp = timestamp;
        if (animate === undefined) {
            data.timeline.running = false;
        }
        else {
            if (data.timeline.time > 0) {
                if (data.timeline.timer === 0) {
                    data.timeline.sign = 1;
                }
                if (options.pingPong) {
                    data.timeline.timer +=
                        data.timeline.sign * (data.timeline.deltaTime / data.timeline.time);
                    if (data.timeline.timer >= 1) {
                        data.timeline.sign = -1;
                        data.timeline.reverseTimer = true;
                    }
                    if (data.timeline.timer <= 0 && data.timeline.reverseTimer) {
                        data.timeline.sign = 1;
                        data.timeline.running = false;
                    }
                }
                else {
                    data.timeline.timer +=
                        data.timeline.sign * (data.timeline.deltaTime / data.timeline.time);
                    if (data.timeline.timer >= 1) {
                        data.timeline.running = false;
                    }
                }
            }
            else {
                data.timeline.timer = 1;
                data.timeline.running = false;
            }
            const animationTime = options.animationCurve.fetchTime(data.timeline.timer);
            animate(animationTime, ...this.args);
        }
        requestAnimationFrame((timestamp) => {
            this.#udpate(timestamp, animate, options, data);
        });
        if (!data.timeline.running && !options.pingPong) {
            data.timeline.timer -= 1;
        }
    };
    addEventListener = (event, listener) => {
        const data = this.currentTimelineData;
        if (data !== undefined) {
            if (data.listeners === undefined) {
                data.listeners = {};
            }
            let eventListeners = data.listeners[event];
            if (eventListeners === undefined) {
                eventListeners = data.listeners[event] = [listener];
            }
            else {
                eventListeners.push(listener);
            }
        }
        return this;
    };
    removeListeners = (event, data) => {
        data = data ?? this.currentTimelineData;
        if (data !== undefined && data.listeners !== undefined) {
            if (data.listeners[event] !== undefined) {
                delete data.listeners[event];
                if (Object.keys(data.listeners).length <= 0) {
                    delete data.listeners;
                }
            }
        }
    };
    removeAllListeners = (data) => {
        data = data ?? this.currentTimelineData;
        if (data !== undefined && data.listeners !== undefined) {
            data.listeners = undefined;
        }
    };
    #emit = (event, data) => {
        data = data ?? this.currentTimelineData;
        if (data !== undefined && data.listeners != undefined) {
            const listeners = data.listeners[event];
            if (listeners !== undefined) {
                for (const key in listeners) {
                    listeners[key]();
                }
            }
        }
    };
}
export class ElementAnimator {
    #element;
    get element() {
        return this.#element;
    }
    #animation;
    #keyframes;
    #options;
    get animation() {
        return this.#animation;
    }
    constructor(element, ...args) {
        this.setElement(element);
        let keyframes = undefined;
        let options = undefined;
        for (let i = 0; i < args.length; i++) {
            const value = args[i];
            if (Array.isArray(value)) {
                keyframes = value;
            }
            else {
                options = value;
            }
        }
        if (keyframes !== undefined) {
            this.setKeyFrames(keyframes);
        }
        if (options !== undefined) {
            this.setOptions(options);
        }
    }
    play = (...args) => {
        let keyframes = (this.#keyframes ?? null);
        let options = this.#options;
        for (let i = 0; i < args.length; i++) {
            const value = args[i];
            if (Array.isArray(value)) {
                keyframes = value;
            }
            else {
                options = value;
            }
        }
        if (this.#element !== undefined) {
            return (this.#animation = this.#element.animate(keyframes, options));
        }
    };
    pause = () => {
        if (this.#animation !== undefined) {
            this.#animation.pause();
        }
    };
    setElement = (element) => {
        if (element !== undefined) {
            this.#element = element;
        }
    };
    setKeyFrames = (keyframes) => {
        if (keyframes !== undefined) {
            this.#keyframes = keyframes;
        }
    };
    setOptions = (options) => {
        if (options !== undefined) {
            this.#options = options;
        }
    };
}
//#endregion
//# sourceMappingURL=animation.js.map