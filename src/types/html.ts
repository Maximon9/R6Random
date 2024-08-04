import type Dice from "../utils/randomize.js";
import type { AllHTMLAnimators } from "./options.js";

export type HTMLGroup<A extends { [k: string]: boolean } = { [k: string]: boolean }> = {
    animator: AllHTMLAnimators;
    animationData?: A;
    key: string;
    htmlGroup: HTMLDivElement;
    htmlImg: HTMLImageElement;
    htmlImages: {
        normalIcon?: string;
        hoverIcon?: string;
    };
    dice?: Dice;
};
