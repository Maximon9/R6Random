import type Dice from "../utils/randomize.js";
import type { AllHTMLAnimators } from "./options.js";

export type HTMLGroup = {
    animator: AllHTMLAnimators;
    animationData?: {
        buttonIsOut: boolean;
        hasTouched: boolean;
    };
    key: string;
    htmlGroup: HTMLDivElement;
    htmlImg: HTMLImageElement;
    htmlImages: {
        normalIcon?: string;
        hoverIcon?: string;
    };
    dice?: Dice;
};
