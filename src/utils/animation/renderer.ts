//#region Main
import { AnimationPointType } from "../../types/animation.js";
import { Vector2Type } from "../../types/vector.js";
import { Vector2 } from "../vector.js";
import { AnimationPoint } from "./animationPoint.js";

export class Tranform {
    matrix: [number, number, number][];

    public get scew(): Vector2 {
        return new Vector2(this.matrix[0][1], this.matrix[0][2]);
    }
    public set scew(v: Vector2Type | Vector2) {
        if (v instanceof Vector2) {
            v = [v.x, v.y];
        }
        this.matrix[0][1] = v[0];
        this.matrix[0][2] = v[1];
    }

    public get scale(): Vector2 {
        return new Vector2(this.matrix[0][0], this.matrix[1][0]);
    }
    public set scale(v: Vector2Type | Vector2) {
        if (v instanceof Vector2) {
            v = [v.x, v.y];
        }
        this.matrix[0][0] = v[0];
        this.matrix[1][0] = v[1];
    }

    public get position(): Vector2 {
        return new Vector2(this.matrix[1][1], this.matrix[1][2]);
    }
    public set position(v: Vector2Type | Vector2) {
        if (v instanceof Vector2) {
            v = [v.x, v.y];
        }
        this.matrix[1] = [this.matrix[1][0], v[0], v[1]];
    }

    /* This is in radians */
    #rotation!: number;
    public get rotation(): number {
        return this.#rotation;
    }
    public set rotation(v: number) {
        this.#rotation = v;
    }

    constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.matrix = [];
        this.matrix[0] = [a, b, c];
        this.matrix[1] = [d, e, f];
    }
    setTransform(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.matrix[0] = [a, b, c];
        this.matrix[1] = [d, e, f];
    }
}

export class BaseDrawable {
    transform: Tranform;
    zIndex: number;
    constructor(
        zIndex: number = 0,
        position: Vector2Type | Vector2 = [0, 0],
        rotation: number = 0,
        scale: Vector2Type | Vector2 = [1, 1],
        scew: Vector2Type | Vector2 = [0, 0]
    ) {
        this.transform = new Tranform();
        this.transform.position = position;
        this.transform.rotation = rotation;
        this.transform.scale = scale;
        this.transform.scew = scew;
        this.zIndex = zIndex;
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.setTransform(
            this.transform.matrix[0][0],
            this.transform.matrix[0][1],
            this.transform.matrix[0][2],
            this.transform.matrix[1][0],
            this.transform.position.x,
            this.transform.position.y
        );
        ctx.rotate(this.transform.rotation);
    }
}
export class AnimationGraph extends BaseDrawable {
    #points!: AnimationPoint[];
    public get points(): AnimationPoint[] {
        return this.#points.map((point) => {
            return new AnimationPoint(
                point.type,
                this.#size.x * point.x - this.realAnchor.x,
                -(this.#size.y * point.y - this.realAnchor.y)
            );
        });
    }
    public set points(v: (AnimationPointType | AnimationPoint)[]) {
        this.#points = v.map((point) => {
            if (point instanceof AnimationPoint) {
                return point;
            } else {
                return new AnimationPoint(point[0], point[1], point[2]);
            }
        });
    }

    #size!: Vector2;
    public get size(): Vector2 {
        return this.#size;
    }
    public set size(v: Vector2Type | Vector2) {
        if (!(v instanceof Vector2)) {
            v = new Vector2(v[0], v[1]);
        }
        this.#size = v;
    }
    #padding!: Vector2;
    public get padding(): Vector2 {
        return this.#padding;
    }
    public set padding(v: Vector2Type | Vector2) {
        if (!(v instanceof Vector2)) {
            v = new Vector2(v[0], v[1]);
        }
        this.#padding = v;
    }
    #anchor!: Vector2;
    public get anchor(): Vector2 {
        return this.#anchor;
    }
    public get realAnchor(): Vector2 {
        return new Vector2(this.size.x * this.#anchor.x, this.size.y * this.#anchor.y);
    }
    public get realAnchorWithPadding(): Vector2 {
        return new Vector2(
            (this.size.x + this.padding.x) * this.#anchor.x,
            (this.size.y + this.padding.y) * this.#anchor.y
        );
    }
    public set anchor(v: Vector2Type | Vector2) {
        if (!(v instanceof Vector2)) {
            v = new Vector2(v[0], v[1]);
        }
        this.#anchor = v.clamp([0, 0], [1, 1]);
    }

    constructor(
        info: {
            zIndex?: number;
            points?: (AnimationPointType | AnimationPoint)[];
            position?: Vector2Type | Vector2;
            rotation?: number;
            scale?: Vector2Type | Vector2;
            scew?: Vector2Type | Vector2;
            size?: Vector2Type | Vector2;
            padding?: Vector2Type | Vector2;
            anchor?: Vector2Type | Vector2;
        } = {}
    ) {
        super(info.zIndex, info.position, info.rotation, info.scale, info.scew);
        this.size = info.size ?? [1, 1];
        this.padding = info.padding ?? [1, 1];
        this.anchor = info.anchor ?? [0, 0];
        this.points = info.points ?? [];
    }
    render(ctx: CanvasRenderingContext2D) {
        super.render(ctx);
        ctx.beginPath();
        ctx.rect(
            0 - this.realAnchorWithPadding.x,
            0 - this.realAnchorWithPadding.y,
            this.size.x + this.padding.x,
            this.size.y + this.padding.y
        );
        ctx.fillStyle = "#777777";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(0 - this.realAnchor.x, 0 - this.realAnchor.y, this.size.x, this.size.y);
        ctx.fillStyle = "#888888";
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.stroke();
        ctx.closePath();

        const points = this.points;
        ctx.beginPath();
        let curve: AnimationPoint[] = [];
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            if (curve.length <= 0 && point.type === "achor") {
                curve.push(point);
            } else {
                if (point.type === "control") {
                    curve.push(point);
                } else {
                    curve.push(point);
                    if (curve.length < 5) {
                        const lastControl = curve[curve.length - 2] ?? curve[curve.length - 1];
                        const bezierValues = [
                            curve[0].toArray(),
                            lastControl.toArray(),
                            lastControl.toArray(),
                            curve[curve.length - 1].toArray(),
                        ];
                        let count = 0;
                        for (let i = 0; i < curve.length; i++) {
                            const bezierPoint = curve[i];
                            bezierValues[count] = bezierPoint.toArray();
                            count++;
                        }
                        ctx.moveTo(...bezierValues[0]);
                        ctx.bezierCurveTo(
                            ...bezierValues[1],
                            ...bezierValues[2],
                            ...bezierValues[3]
                        );
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                        ctx.stroke();
                        curve.splice(0, curve.length);
                        curve.push(point);
                    }
                }
            }
        }
        ctx.closePath();

        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const circle = new Circle({
                fillColor: "#000000",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
                radius: 5,
                position: [
                    this.transform.position.x + point.x,
                    this.transform.position.y + point.y,
                ],
                rotation: this.transform.rotation,
                scale: this.transform.scale,
                scew: this.transform.scew,
            });
            circle.render(ctx);
        }
    }
}
export class Circle extends BaseDrawable {
    fillColor: string | CanvasGradient | CanvasPattern;
    borderColor: string | CanvasGradient | CanvasPattern;
    borderWidth: number;
    radius: number;

    constructor(
        info: {
            zIndex?: number;
            fillColor?: string | CanvasGradient | CanvasPattern;
            borderColor?: string | CanvasGradient | CanvasPattern;
            borderWidth?: number;
            radius?: number;
            position?: Vector2Type | Vector2;
            rotation?: number;
            scale?: Vector2Type | Vector2;
            scew?: Vector2Type | Vector2;
            anchor?: Vector2Type | Vector2;
        } = {}
    ) {
        super(info.zIndex, info.position, info.rotation, info.scale, info.scew);
        this.fillColor = info.fillColor ?? "rgba(0, 0, 0, 0)";
        this.borderColor = info.borderColor ?? "rgba(0, 0, 0, 0)";
        this.borderWidth = info.borderWidth ?? 1;
        this.radius = info.radius ?? 5;
    }
    render(ctx: CanvasRenderingContext2D) {
        super.render(ctx);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }
}

class _Renderer2D {
    #drawables: BaseDrawable[] = [];
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    sorted: boolean = true;

    constructor(ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement) {
        this.ctx = ctx as CanvasRenderingContext2D;
        this.canvas = canvas as HTMLCanvasElement;
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }
    setContext(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public get length(): number {
        return this.#drawables.length;
    }

    append<T extends BaseDrawable>(drawable: T) {
        this.#drawables.push(drawable);
        this.sorted = false;
    }
    splice(start: number, deleteCount?: number, ...items: BaseDrawable[]) {
        if (items.length > 0) {
            this.sorted = false;
        }
        this.#drawables.splice(0, 1, ...items);
    }

    render() {
        if (this.sorted === false) {
            this.#drawables.sort((a: BaseDrawable, b: BaseDrawable) => {
                return a.zIndex - b.zIndex;
            });
        }
        if (this.ctx !== undefined && this.canvas !== undefined) {
            this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        }
        for (let i = 0; i < this.#drawables.length; i++) {
            const drawable = this.#drawables[i];
            if (this.ctx !== undefined) {
                drawable.render(this.ctx);
            }
        }
    }
}
export const Renderer2D = new _Renderer2D();

//#endregion
