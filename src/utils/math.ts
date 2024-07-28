export const lerp = (t: number, a: number, b: number) => a + (b - a) * t;
export const clamp = (num: number, a: number, b: number) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
