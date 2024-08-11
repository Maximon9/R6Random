//#region Main
import { Animator, AnimationCurve } from "./utils/animation/animation.js";
import { lerp } from "./utils/math.js";
import { Circle, Renderer2D } from "./utils/animation/renderer.js";
window.addEventListener("load", () => {
    const canvas = document.getElementsByClassName("canvas").item(0);
    if (canvas !== null) {
        canvas.width = window.innerWidth * (90 / 100);
        canvas.height = window.innerHeight * (90 / 100);
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth * (90 / 100);
            canvas.height = window.innerHeight * (90 / 100);
        });
        const ctx = canvas.getContext("2d");
        if (ctx !== null) {
            Renderer2D.setCanvas(canvas);
            Renderer2D.setContext(ctx);
            start();
        }
    }
});
const circle = new Circle({
    zIndex: 1,
    fillColor: "#00ff00",
    borderColor: "#000000",
    radius: 40,
    borderWidth: 2,
});
let num = 0.2;
const animator = new Animator((time) => {
    circle.transform.position = [
        lerp(time, 0 + circle.radius + 10, Renderer2D.canvas.clientWidth - circle.radius - 10),
        Renderer2D.canvas.clientHeight - circle.radius,
    ];
    update();
    Renderer2D.render();
}, {
    duration: 1,
    animationCurve: /* AnimationCurves.step(4) */ /* new AnimationCurve(
    ["achor", 0, 0],
    ["control", 1 / 6 + num, 1 / 6 - num],
    ["control", 1 / 3 + num, 1 / 3 - num],
    ["achor", 0.5, 0.5],
    ["control", 2 / 3 - num, 2 / 3 + num],
    ["control", 5 / 6 - num, 5 / 6 + num],
    ["achor", 1, 1]
) */ new AnimationCurve(["achor", 0, 0], ["control", 1 / 6 + num, 1 / 6 - num], ["control", 1 / 3 + num, 1 / 3 - num], ["achor", 0.5, 0.5], ["control", 2 / 3 - num, 2 / 3 + num], ["control", 5 / 6 - num, 5 / 6 + num], ["achor", 1, 1]) /* new AnimationCurve(
    ["achor", 0, 0],
    ["control", 1 / 6 - num, 1 / 6 + num],
    ["control", 1 / 3 - num, 1 / 3 + num],
    ["achor", 0.5, 0.5],
    ["control", 2 / 3 + num, 2 / 3 - num],
    ["control", 5 / 6 + num, 5 / 6 - num],
    ["achor", 1, 1]
) */ /* new AnimationCurve(
        ["achor", 0, 0],
        ["control", 1 / 6 + num, 1 / 6 - num],
        ["control", 0.25 + num + num, 0.25 - num - num],
        ["control", 1 / 3 + num, 1 / 3 - num],
        ["achor", 0.5, 0.5],
        ["control", 2 / 3 - num, 2 / 3 + num],
        ["control", 5 / 6 - num, 5 / 6 + num],
        ["achor", 1, 1]
    ) */,
    infinite: true,
    pingPong: true,
});
animator.options.animationCurve.graph.padding = [50, 50];
animator.options.animationCurve.graph.size = [300, 300];
animator.options.animationCurve.graph.anchor = [0.5, 0.5];
/* export class ElementAnimatorTest<
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | SVGSVGElement =
        | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
        | SVGSVGElement,
    KS extends string = string
> {
    #element!: T;

    public get element(): T {
        return this.#element;
    }

    #animations: AnimationsType<KS> = {};

    constructor(element: T, animations?: ElementOptionsTest<KS>) {
        this.setElement(element);

        for (const key in animations) {
            const animation = animations[key];
            this.addAnimation(key, animation);
        }
    }

    public addAnimation(key: KS, animation?: AnimationData) {
        let keyframes: KeyFrame[] | undefined = undefined;
        let options: AnimationOptions | undefined = undefined;
        if (animation !== undefined) {
            for (let i = 0; i < animation.length; i++) {
                const animationData = animation[i];
                if (Array.isArray(animationData)) {
                    keyframes = animationData;
                } else if (animationData !== undefined) {
                    options = animationData;
                }
            }
        }
        if (key !== undefined) {
            if (this.#animations[key] === undefined) {
                this.#animations[key] = {
                    keyframes,
                    options,
                };
            }
            (this.#animations[key].animation = this.#element.animate(
                keyframes as RealKeyframes,
                options
            )).pause();
        }
    }
    public removeAnimation(key: KS) {
        if (this.#animations[key] !== undefined) {
            delete this.#animations[key];
        }
    }

    public animation(key: KS): Animation | undefined {
        return this.#animations[key]?.animation;
    }

    play = (key: KS): Animation | undefined => {
        const obj = this.#animations[key];
        if (
            obj !== undefined &&
            obj.animation !== undefined &&
            obj.keyframes !== undefined &&
            obj.options !== undefined
        ) {
            (obj.animation.effect as KeyframeEffect).setKeyframes(obj.keyframes as RealKeyframes);
            console.log((obj.animation.effect as KeyframeEffect).getKeyframes());
            obj.animation.play();
            return obj.animation;
        }
    };

    pause = (key: KS): Animation | undefined => {
        this.#animations[key]?.animation?.pause();
        return this.#animations[key]?.animation;
    };

    setElement = (element?: T) => {
        if (element !== undefined) {
            this.#element = element;
        }
    };
} */
function start() {
    Renderer2D.append(animator.options.animationCurve.graph);
    Renderer2D.append(circle);
    circle.transform.position = [
        0 + circle.radius + 10,
        Renderer2D.canvas.clientHeight - circle.radius - 50,
    ];
    animator.options.animationCurve.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
    animator.play();
    const cavasAnimator = new Animator((t, canvas) => {
        console.log(t);
        const p = lerp(t, 90, 100);
        canvas.style.scale = `${p}%`;
    }, { duration: 0.5, fill: true, args: [Renderer2D.canvas] });
    Renderer2D.canvas.addEventListener("pointerenter", () => {
        cavasAnimator.play();
    });
    Renderer2D.canvas.addEventListener("pointerleave", () => {
        cavasAnimator.play();
    });
}
function update() {
    animator.options.animationCurve.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
}
//#endregion
//# sourceMappingURL=test.js.map