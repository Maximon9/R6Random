//#region Main
export const lerp = (t: number, a: number, b: number) => a + (b - a) * t;
export const clamp = (num: number, a: number, b: number) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
export function sigma(start: number, end: number, modifier?: (i: number) => number) {
    const length = end - start + 1;
    const map = (_: number, k: number) => (modifier ? modifier(k + start) : k + start);
    const sum = (a: number, b: number) => a + b;

    return Array.from({ length }, map).reduce(sum);
}
export function fac(n: number) {
    if (n % 1 > 0) return gamma(n + 1);
    else {
        var result = n;
        if (n === 0 || n === 1) return 1;
        while (n > 1) {
            n--;
            result *= n;
        }
        return result;
    }
}

const p = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6,
    1.5056327351493116e-7,
];
/*** g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula ***/
function gamma(n: number, g: number = 7): number {
    // accurate to about 15 decimal places
    //some magic constants
    if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    } else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    }
}
//#endregion
