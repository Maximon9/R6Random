import { StartType } from "../types/animation.js";
import Animator, { AnimationCurves } from "./animation/animation.js";
import Options from "./Siege/options.js";

/* export class HoverOptions {
    imageElement?: HTMLImageElement;
    enterImg?: string;
    leaveImg?: string;
    onMouseEnter?: (...args: any[]) => any;
    onMouseLeave?: (...args: any[]) => any;
    transitionSec: number;
    click: boolean;
    animateOnTouch: boolean;
    scale: number;
    constructor(
        options: {
            imgInfo?: {
                element: HTMLImageElement;
                enterImg?: string;
                leaveImg?: string;
            };
            onMouseEnter?: (...args: any[]) => any;
            onMouseLeave?: (...args: any[]) => any;
            transitionSec?: number;
            click?: boolean;
            animateOnTouch?: boolean;
            scale?: number;
        } = {
            transitionSec: 0.13,
            animateOnTouch: false,
            click: false,
            scale: 90,
        }
    ) {
        this.imageElement = options.imgInfo ? options.imgInfo.element : undefined;
        this.enterImg = options.imgInfo ? options.imgInfo.enterImg : undefined;
        this.leaveImg = options.imgInfo ? options.imgInfo.leaveImg : undefined;
        this.onMouseEnter = options.onMouseEnter;
        this.onMouseLeave = options.onMouseLeave;
        this.transitionSec = options.transitionSec ?? 0.13;
        this.animateOnTouch = options.animateOnTouch ?? false;
        this.click = options.click ?? false;
        this.scale = options.scale ?? 90;
    }
} */

/* function giveScaler(
    element: HTMLElement,
    preScaler: number,
    scaler: number,
    transitionSec: number
) {
    const animation = new Animator({
        time: transitionSec,
        animate: (t: number) => {},
        animationCurve: AnimationCurves.easeInOut,
    });
    element.style.transition = `scale ${transitionSec}s ease-in-out`;
    element.style.scale = `${scaler}%`;
} */

const animationCache: { [k: string]: { element: HTMLElement; animator: Animator } } = {};

export function runAnimation(key: string, start?: StartType) {
    const cache = animationCache[key];
    if (cache === undefined) {
        return;
    }
    cache.animator.stop();
    if (start !== undefined) {
        cache.animator.startType = start;
    }
    cache.animator.start();
}
export function giveElementAnimation(key: string, element: HTMLElement, animator: Animator) {
    let cache = animationCache[key];
    if (cache === undefined) {
        cache = animationCache[key] = { element, animator };
    }
}

/* export function giveHoverAnimation(
    element: HTMLElement,
    options: HoverOptions = new HoverOptions()
) {
    const isTouchScreen = Options.isTouchScreen;
    let setNormalScale = true;
    if (options.click) {
        if (isTouchScreen) {
            if (options.animateOnTouch) {
                const enterImg = options["enterImg"];
                if (options.imageElement !== undefined) {
                    if (enterImg !== undefined) {
                        options.imageElement.src = enterImg;
                    }
                }
                giveScaler(element, options.scale, options.scale + 10, options.transitionSec);
                setNormalScale = false;
            }
        } else {
            giveScaler(element, options.scale, options.scale + 10, options.transitionSec);
            setNormalScale = false;
        }
    }
    if (setNormalScale) {
        giveScaler(element, options.scale, options.scale + 10, options.transitionSec);
        if (options.onMouseLeave !== undefined) {
            options.onMouseLeave();
        }
    }
    if (!isTouchScreen) {
        const mouseEnter = () => {
            const enterImg = options["enterImg"];
            if (options.imageElement !== undefined) {
                if (enterImg !== undefined) {
                    options.imageElement.src = enterImg;
                }
            }
            giveScaler(element, options.scale, options.scale + 10, options.transitionSec);
            if (options.onMouseEnter !== undefined) {
                options.onMouseEnter();
            }
        };
        const mouseLeave = () => {
            const leaveImg = options["leaveImg"];
            if (options.imageElement !== undefined) {
                if (leaveImg !== undefined) {
                    options.imageElement.src = leaveImg;
                }
            }
            giveScaler(element, options.scale, options.scale + 10, options.transitionSec);
            if (options.onMouseLeave !== undefined) {
                options.onMouseLeave();
            }
        };
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
        element.addEventListener("mouseenter", mouseEnter);
        element.addEventListener("mouseleave", mouseLeave);
    }
} */
