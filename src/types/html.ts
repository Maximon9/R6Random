import type { Animator } from "../utils/animation/animation.js";
import type Dice from "../utils/randomize.js";
import type { AllElementAnimators } from "./options.js";

export type HTMLGroup<
    A extends AllElementAnimators | Animator = AllElementAnimators,
    D extends { [k: string]: boolean } = { [k: string]: boolean }
> = {
    animator: A;
    animationData?: D;
    key: string;
    htmlGroup: HTMLDivElement;
    htmlImg: HTMLImageElement;
    htmlImages: {
        normalIcon?: string;
        hoverIcon?: string;
    };
    dice?: Dice;
};
