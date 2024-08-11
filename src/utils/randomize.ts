import { ElementAnimator } from "./animation/animation.js";
import { createElement } from "./html.js";
import { clamp } from "./math.js";

export default class Dice {
    #circlesContainer: SVGElement;
    number!: number;
    svg: SVGSVGElement;
    animator: ElementAnimator<SVGSVGElement>;
    constructor() {
        const dice = createElement("svg", "svg");
        dice.setAttribute("class", "dice");
        dice.setAttribute("viewBox", "0 0 28 28");

        const defs = createElement("svg", "defs");

        const linearGradient = createElement("svg", "linearGradient");
        linearGradient.id = "diceGradient";
        linearGradient.setAttribute("x1", "50%");
        linearGradient.setAttribute("y1", "0%");
        linearGradient.setAttribute("x2", "50%");
        linearGradient.setAttribute("y2", "100%");

        const stop1 = createElement("svg", "stop");
        stop1.setAttribute("stop-color", "#e4e4e4");
        stop1.setAttribute("offset", "30%");

        const stop2 = createElement("svg", "stop");
        stop2.setAttribute("stop-color", "#e4e4e4");
        stop2.setAttribute("offset", "70%");

        const paths = createElement("svg", "path");
        paths.id = "path";
        paths.setAttribute(
            "d",
            "M0,5 c0,-5 5,-5 5,-5 l18,0 c5,0 5,5, 5,5 l0 18 c0,5 -5,5 -5,5 l-18 0 c -5,0 -5,-5 -5,-5 Z"
        );
        paths.setAttribute("fill", "url(#diceGradient)");

        this.#circlesContainer = createElement("svg", "g");
        paths.id = "circles-container";

        linearGradient.appendChild(stop1);
        linearGradient.appendChild(stop2);
        defs.appendChild(linearGradient);
        dice.appendChild(defs);
        dice.appendChild(paths);
        dice.appendChild(this.#circlesContainer);

        this.randomize();

        this.svg = dice;
        this.animator = new ElementAnimator(this.svg);
    }

    randomize() {
        this.number = clamp(Math.ceil(Math.random() * 6), 1, 6);
        this.#circlesContainer.innerHTML = "";
        switch (this.number) {
            case 1:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="14" cy="14" r="2"></circle>';
                break;
            case 2:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="7" cy="21" r="2"></circle><circle id="C2" fill="#1C1C1F" cx="21" cy="7" r="2"></circle>';
                break;
            case 3:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="7" cy="21" r="2"></circle><circle id="C2" fill="#1C1C1F" cx="14" cy="14" r="2"></circle><circle id="C3" fill="#1C1C1F" cx="21" cy="7" r="2"></circle>';
                break;
            case 4:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="7" cy="7" r="2"></circle><circle id="C2" fill="#1C1C1F" cx="7" cy="21" r="2"></circle><circle id="C3" fill="#1C1C1F" cx="21" cy="7" r="2"></circle><circle id="C4" fill="#1C1C1F" cx="21" cy="21" r="2"></circle>';
                break;
            case 5:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="7" cy="7" r="2"></circle><circle id="C2" fill="#1C1C1F" cx="7" cy="21" r="2"></circle><circle id="C3" fill="#1C1C1F" cx="14" cy="14" r="2"></circle><circle id="C4" fill="#1C1C1F" cx="21" cy="7" r="2"></circle><circle id="C5" fill="#1C1C1F" cx="21" cy="21" r="2"></circle>';
                break;
            case 6:
                this.#circlesContainer.innerHTML +=
                    '<circle id="C1" fill="#1C1C1F" cx="8" cy="7" r="2"></circle><circle id="C2" fill="#1C1C1F" cx="8" cy="14" r="2"></circle><circle id="C3" fill="#1C1C1F" cx="8" cy="21" r="2"></circle><circle id="C4" fill="#1C1C1F" cx="20" cy="7" r="2"></circle><circle id="C5" fill="#1C1C1F" cx="20" cy="14" r="2"></circle><circle id="C6" fill="#1C1C1F" cx="20" cy="21" r="2"></circle>';
                break;
        }
    }
}

export function getRandomItemFromArray<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
}
