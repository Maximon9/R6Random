import type { Animator } from "../utils/animation/animation.js";
import type Dice from "../utils/randomize.js";
import type { AllElementAnimators } from "./options.js";

export type HTMLGroup<
    D extends { [k: string]: boolean } = { [k: string]: boolean },
    A extends Animator = Animator,
    E extends AllElementAnimators = AllElementAnimators
> = {
    animator?: A;
    elementAnimator?: E;
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
