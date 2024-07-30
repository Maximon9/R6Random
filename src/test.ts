//#region Main
import Animator, { AnimationCurve, AnimationCurves } from "./utils/animation/animation.js";
import { lerp } from "./utils/math.js";
import { Circle, Renderer2D } from "./utils/animation/renderer.js";

/* function isNumber(str: string) {
    return /^\d+$/.test(str);
} */

window.addEventListener("load", () => {
    const canvas = document.getElementsByClassName("canvas").item(0) as HTMLCanvasElement;
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
            startGameLoop();
        }
    }
});
let lastTimestamp = 0;
function startGameLoop() {
    start();
    lastTimestamp = window.performance.now();
    requestAnimationFrame(gameloop);
}

let deltaTime = 0;
const gameloop = (timestamp: number) => {
    deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    requestAnimationFrame(gameloop);
    update();
    Renderer2D.render();
};

const circle = new Circle({
    zIndex: 1,
    fillColor: "#00ff00",
    borderColor: "#000000",
    radius: 40,
    borderWidth: 2,
});

let num = 0.2;
const animator = new Animator({
    time: 1,
    animate: (time: number) => {
        circle.transform.position = [
            lerp(time, 0 + circle.radius + 10, Renderer2D.canvas.clientWidth - circle.radius - 10),
            Renderer2D.canvas.clientHeight - circle.radius - 50,
        ];
        Renderer2D.render();
    },
    animationCurve: /* AnimationCurves.step(4) */ /* new AnimationCurve(
        ["achor", 0, 0],
        ["control", 1 / 6 + num, 1 / 6 - num],
        ["control", 1 / 3 + num, 1 / 3 - num],
        ["achor", 0.5, 0.5],
        ["control", 2 / 3 - num, 2 / 3 + num],
        ["control", 5 / 6 - num, 5 / 6 + num],
        ["achor", 1, 1]
    ) */ new AnimationCurve(
        ["achor", 0, 0],
        ["control", 1 / 6 + num, 1 / 6 - num],
        ["control", 1 / 3 + num, 1 / 3 - num],
        ["achor", 0.5, 0.5],
        ["control", 2 / 3 - num, 2 / 3 + num],
        ["control", 5 / 6 - num, 5 / 6 + num],
        ["achor", 1, 1]
    ) /* new AnimationCurve(
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
animator.animationType.graph.padding = [50, 50];
animator.animationType.graph.size = [300, 300];
animator.animationType.graph.anchor = [0.5, 0.5];
function start() {
    Renderer2D.append(animator.animationType.graph);
    Renderer2D.append(circle);
    circle.transform.position = [
        0 + circle.radius + 10,
        Renderer2D.canvas.clientHeight - circle.radius - 50,
    ];
    animator.animationType.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
    animator.start();
}

let timer = 0;
function update() {
    animator.animationType.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
}
//#endregion
