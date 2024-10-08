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
    frameDatas = [];
    get currentFrameData() {
        return this.frameDatas[0];
    }
    #reverseTimer;
    #args;
    #timer = 0;
    #deltaTime = 0;
    #lastTimestamp = 0;
    #sign = 1;
    #pos = "start";
    get running() {
        const frameData = this.currentFrameData;
        return frameData === undefined ? false : frameData.running;
    }
    constructor(animate, options = {}) {
        this.#animate = animate;
        this.#args = options.args ?? [];
        this.#reverseTimer = false;
        this.options = {
            duration: 0,
            fill: false,
            animationCurve: AnimationCurves.linear,
            infinite: false,
            pingPong: false,
        };
        options.durationType = options.durationType ?? "s";
        if (options.duration !== undefined) {
            if (typeof options.duration === "number" && options.durationType === "ms") {
                options.duration = options.duration / 1000;
            }
            else {
                options.duration = options.duration;
            }
        }
        else {
            options.duration = 0;
        }
        this.setOptions({
            duration: options.duration,
            fill: options.fill,
            animationCurve: options.animationCurve,
            infinite: options.infinite,
            pingPong: options.pingPong,
        });
        if (options.autoStartAnimation === true) {
            this.play();
        }
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
        this.#args = args;
    };
    changeAnimation(animate) {
        this.#animate = animate;
    }
    play = (...args) => {
        let frameData = {
            paused: false,
            running: true,
        };
        let animate = undefined;
        let options = undefined;
        if (args.length > 0) {
            for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                if (typeof arg === "string") {
                    this.#pos = arg;
                }
                else if (typeof arg === "function") {
                    animate = arg;
                }
                else if (arg !== undefined) {
                    if (options === undefined) {
                        options = {};
                    }
                    const argKeys = Object.keys(arg);
                    const ogKeys = Object.keys(this.options);
                    const keys = (argKeys.length > ogKeys.length
                        ? argKeys
                        : ogKeys.length > argKeys.length
                            ? ogKeys
                            : ogKeys);
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        const argValue = arg[key];
                        const ogValue = this.options[key];
                        if (argValue !== undefined) {
                            options[key] = argValue;
                        }
                        else {
                            if (ogValue !== undefined) {
                                options[key] = ogValue;
                            }
                        }
                    }
                }
            }
            if (animate === undefined) {
                animate = this.#animate;
            }
            if (options === undefined) {
                options = this.options;
            }
        }
        else {
            animate = this.#animate;
            options = this.options;
        }
        for (let i = 0; i < this.frameDatas.length; i++) {
            const fd = this.frameDatas[i];
            fd.paused = true;
        }
        this.frameDatas.splice(0, this.frameDatas.length);
        this.frameDatas.push(frameData);
        this.#lastTimestamp = window.performance.now();
        if (options.fill === true) {
            if (this.#pos === "start") {
                this.#sign = -1;
                this.#pos = "end";
            }
            else {
                this.#sign = 1;
                this.#pos = "start";
            }
            this.#sign *= -1;
        }
        else {
            this.#timer = 0;
            this.#sign = 1;
        }
        requestAnimationFrame((timestamp) => {
            this.#udpate(timestamp, animate, options, frameData);
        });
        return this;
    };
    pause = () => {
        const frameData = this.currentFrameData;
        if (frameData !== undefined && !frameData.paused) {
            frameData.paused = true;
        }
        return this;
    };
    #udpate = (timestamp, animate, options, frameData) => {
        let duration = options.duration ?? 0;
        let animationCurve = options.animationCurve ?? AnimationCurves.linear;
        if (frameData.paused) {
            this.#emit("pause");
            // this.removeListeners("pause", data);
            return;
        }
        if (!frameData.running) {
            this.#reverseTimer = false;
            if (options.infinite) {
                frameData.running = true;
            }
            else {
                this.#emit("finish");
                // this.removeListeners("finish", data);
                return;
            }
        }
        this.#deltaTime = (timestamp - this.#lastTimestamp) / 1000;
        this.#lastTimestamp = timestamp;
        if (animate === undefined) {
            frameData.running = false;
        }
        else {
            if (duration > 0) {
                if (options.pingPong) {
                    this.#timer += this.#sign * (this.#deltaTime / duration);
                    if (this.#timer >= 1) {
                        this.#sign = -1;
                        if (this.#reverseTimer) {
                            frameData.running = false;
                        }
                        else {
                            this.#reverseTimer = true;
                        }
                    }
                    if (this.#timer <= 0) {
                        this.#sign = 1;
                        if (this.#reverseTimer) {
                            frameData.running = false;
                        }
                        else {
                            this.#reverseTimer = true;
                        }
                    }
                }
                else {
                    this.#timer += this.#sign * (this.#deltaTime / duration);
                    if (this.#sign === 1) {
                        if (this.#timer >= 1) {
                            frameData.running = false;
                        }
                    }
                    else {
                        if (this.#timer <= 0) {
                            frameData.running = false;
                        }
                    }
                }
            }
            else {
                this.#timer = 1;
                frameData.running = false;
            }
            const animationTime = animationCurve.fetchTime(this.#timer);
            animate(animationTime, ...this.#args);
        }
        requestAnimationFrame((timestamp) => {
            this.#udpate(timestamp, animate, options, frameData);
        });
        if (!frameData.running && !options.pingPong && !options.fill) {
            this.#timer -= 1;
        }
    };
    addEventListener = (event, listener) => {
        const frameData = this.currentFrameData;
        if (frameData !== undefined) {
            if (frameData.listeners === undefined) {
                frameData.listeners = {};
            }
            let eventListeners = frameData.listeners[event];
            if (eventListeners === undefined) {
                eventListeners = frameData.listeners[event] = [listener];
            }
            else {
                eventListeners.push(listener);
            }
        }
        return this;
    };
    removeListeners = (event) => {
        const frameData = this.currentFrameData;
        if (frameData !== undefined && frameData.listeners !== undefined) {
            if (frameData.listeners[event] !== undefined) {
                delete frameData.listeners[event];
                if (Object.keys(frameData.listeners).length <= 0) {
                    delete frameData.listeners;
                }
            }
        }
    };
    removeAllListeners = () => {
        const frameData = this.currentFrameData;
        if (frameData !== undefined && frameData.listeners !== undefined) {
            frameData.listeners = undefined;
        }
    };
    #emit = (event) => {
        const frameData = this.currentFrameData;
        if (frameData !== undefined && frameData.listeners != undefined) {
            const listeners = frameData.listeners[event];
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