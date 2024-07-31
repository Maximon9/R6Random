//#region Main
import { StartType } from "../types/animation.js";
import { Animator, HTMLAnimator } from "./animation/animation.js";
import Options from "./Siege/options.js";

const animationCache: { [k: string]: Animator } = {};

export function runAnimation(key: string, start?: StartType) {
    const cache = animationCache[key];
    if (cache === undefined) {
        return;
    }
    cache.stop();
    if (start !== undefined) {
        cache.startType = start;
    }
    cache.start();
}

export function giveElementAnimation(key: string, animate: Animator) {
    let cache = animationCache[key];
    if (cache === undefined) {
        animationCache[key] = animate;
    }
}
//#endregion
