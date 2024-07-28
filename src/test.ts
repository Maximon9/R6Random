import Animator from "./utils/animation.js";
import { clamp } from "./utils/math.js";
import { Vector2 } from "./utils/vector.js";

class BaseRender {
    zIndex: number;
    constructor(zIndex: number = 0) {
        this.zIndex = zIndex;
    }
    render(ctx: CanvasRenderingContext2D) {}
}
class Circle extends BaseRender {
    fillColor: string | CanvasGradient | CanvasPattern;
    borderColor: string | CanvasGradient | CanvasPattern;
    borderWidth: number;
    radius: number;
    #position: Vector2;

    public get position(): Vector2 {
        return this.#position;
    }
    public set position(v: [number, number] | Vector2) {
        if (!(v instanceof Vector2)) {
            v = new Vector2(v[0], v[1]);
        }
        this.#position = v;
    }

    constructor(
        info: {
            zIndex?: number;
            fillColor?: string | CanvasGradient | CanvasPattern;
            borderColor?: string | CanvasGradient | CanvasPattern;
            borderWidth?: number;
            radius?: number;
            position?: [number, number] | Vector2;
        } = {}
    ) {
        super(info.zIndex);
        this.fillColor = info.fillColor ?? "rgba(0, 0, 0, 0)";
        this.borderColor = info.borderColor ?? "rgba(0, 0, 0, 0)";
        this.borderWidth = info.borderWidth ?? 1;
        this.radius = info.radius ?? 5;
        if (info.position !== undefined && !(info.position instanceof Vector2)) {
            info.position = new Vector2(info.position[0], info.position[1]);
        }
        this.#position = info.position ?? new Vector2();
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.#position.x, this.#position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }
}
function isNumber(str: string) {
    return /^\d+$/.test(str);
}
class Renderer2D {
    [k: number]: BaseRender;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    public get length(): number {
        let count = 0;
        for (const key in this) {
            if (isNumber(key)) {
                count++;
            }
        }
        return count;
    }

    append<T extends BaseRender>(drawable: T) {
        this[this.length] = drawable;
    }
    insertAt<T extends BaseRender>(drawable: T, index: number) {
        index = clamp(index, 0, this.length - 1);
        for (let i = this.length - 1; i >= 0; i--) {
            const dable = this[i];
            if (i > index) {
                this[i + 1] = dable;
            } else if (i === index) {
                this[i + 1] = dable;
                this[i] = drawable;
            }
        }
    }

    toArray() {
        return Object.entries(this)
            .filter(([key, value]) => isNumber(key))
            .map(([key, value]) => value);
    }

    render() {
        const array = this.toArray();
        let sortedArray: { [k: number]: BaseRender[] } = {};
        for (let i = 0; i < array.length; i++) {
            const value = array[i];
            if (sortedArray[value.zIndex] === undefined) {
                sortedArray[value.zIndex] = [];
            }
            sortedArray[value.zIndex].push(value);
        }
        let allKeys = Object.keys(sortedArray).map((value) => Number(value));
        allKeys.sort((a: number, b: number) => {
            return a - b;
        });
        let temp_obj: { [k: number]: BaseRender[] } = {};
        for (let i = 0; i < allKeys.length; i++) {
            temp_obj[i] = sortedArray[allKeys[i]];
        }
        sortedArray = temp_obj;
        for (const key in sortedArray) {
            const drawables = sortedArray[key];
            for (let i = 0; i < drawables.length; i++) {
                const drawable = drawables[i];
                drawable.render(this.ctx);
            }
        }
    }
}

window.addEventListener("load", () => {
    const canvas = document.getElementsByClassName("canvas").item(0) as HTMLCanvasElement;
    if (canvas !== null) {
        canvas.width = window.innerWidth * (90 / 100);
        canvas.height = window.innerHeight * (90 / 100);
        const ctx = canvas.getContext("2d");
        if (ctx !== null) {
            const renderer2D = new Renderer2D(ctx, canvas);
            startGameLoop(renderer2D);
            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth * (90 / 100);
                canvas.height = window.innerHeight * (90 / 100);
            });
        }
    }
});
const greenCircle = new Circle({
    fillColor: "#32a852",
    borderColor: "#32a87d",
    radius: 40,
    borderWidth: 4,
});
let lastTimestamp = 0;
function startGameLoop(renderer2D: Renderer2D) {
    renderer2D.append(greenCircle);
    // const animator = new Animator({"condition": 60, "animate": () => {}})
    greenCircle.position = [
        Math.floor(renderer2D.canvas.clientWidth / 2),
        Math.floor(renderer2D.canvas.clientHeight / 2),
    ];
    lastTimestamp = window.performance.now();
    requestAnimationFrame((timestamp: number) => {
        gameloop(timestamp, renderer2D);
    });
}

let timer = 0;
const gameloop = (timestamp: number, renderer2D: Renderer2D) => {
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    requestAnimationFrame((timestamp: number) => {
        gameloop(timestamp, renderer2D);
    });
    greenCircle.position = [
        renderer2D.canvas.clientWidth - 50,
        Math.floor(renderer2D.canvas.clientHeight / 2),
    ];
    console.log(deltaTime);
    renderer2D.render();
};
