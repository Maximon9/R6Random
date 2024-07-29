import Animator, { AnimationCurve, AnimationType } from "./utils/animation/animation.js";
import { clamp, lerp } from "./utils/math.js";
import { Vector2 } from "./utils/vector.js";
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

let timer = 0;
let deltaTime = 0;
const gameloop = (timestamp: number) => {
    deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    requestAnimationFrame(gameloop);
    update();
    Renderer2D.render();
};

/* const circle = new Circle({
    zIndex: 1,
    fillColor: "#00ff00",
    borderColor: "#000000",
    radius: 40,
    borderWidth: 4,
}); */
/* const circle1 = new Circle({
    fillColor: "#0000ff",
    borderColor: "#000000",
    radius: 40,
    borderWidth: 4,
});
const circle2 = new Circle({
    fillColor: "#ff0000",
    borderColor: "#000000",
    radius: 40,
    borderWidth: 4,
}); */

let num = 0.2;
new AnimationCurve(
    ["achor", 0, 0],
    ["control", 1 / 6 + num, 1 / 6 - num],
    ["control", 1 / 3 + num, 1 / 3 - num],
    ["achor", 0.5, 0.5],
    ["control", 2 / 3 - num, 2 / 3 + num],
    ["control", 5 / 6 - num, 5 / 6 + num],
    ["achor", 1, 1]
).fetchTime(0.5);
const animator = new Animator({
    condition: 60,
    animate: () => {},
    animationType: new AnimationCurve(
        ["achor", 0, 0],
        ["control", 1 / 6 + num, 1 / 6 - num],
        ["control", 1 / 3 + num, 1 / 3 - num],
        ["achor", 0.5, 0.5],
        ["control", 2 / 3 - num, 2 / 3 + num],
        ["control", 5 / 6 - num, 5 / 6 + num],
        ["achor", 1, 1]
    ),
});
animator.animationType.graph.padding = [50, 50];
animator.animationType.graph.size = [300, 300];
animator.animationType.graph.anchor = [0.5, 0.5];
function start() {
    // renderer2D.append(circle);
    // renderer2D.append(circle1);
    // renderer2D.append(circle2);
    Renderer2D.append(animator.animationType.graph);
    /* circle.transform.position = [
        Math.floor(renderer2D.canvas.clientWidth / 3),
        Math.floor(renderer2D.canvas.clientHeight / 3),
    ]; */
    animator.animationType.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
    /*     circle1.position = [
        Math.floor(renderer2D.canvas.clientWidth / 2),
        Math.floor(renderer2D.canvas.clientHeight / 2),
    ];
    circle2.position = [
        Math.floor(renderer2D.canvas.clientWidth / 2),
        Math.floor(renderer2D.canvas.clientHeight / 2),
    ]; */
}

function update() {
    /* circle.transform.position = [
        Math.floor(renderer2D.canvas.clientWidth / 3),
        Math.floor(renderer2D.canvas.clientHeight / 3),
    ]; */
    animator.animationType.graph.transform.position = [
        Math.floor(Renderer2D.canvas.clientWidth / 2),
        Math.floor(Renderer2D.canvas.clientHeight / 2),
    ];
}
