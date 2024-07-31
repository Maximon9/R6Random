const animationCache = {};
export function runAnimation(key, start) {
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
export function giveElementAnimation(key, animate) {
    let cache = animationCache[key];
    if (cache === undefined) {
        animationCache[key] = animate;
    }
}
//#endregion
//# sourceMappingURL=html.js.map