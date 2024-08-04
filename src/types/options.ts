import type { ElementAnimator } from "../utils/animation/animation.js";

type FetchHTMLAnimators<
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | SVGSVGElement
> = T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | SVGSVGElement
    ? ElementAnimator<T>
    : ElementAnimator<HTMLElement>;

export type AllHTMLAnimators = FetchHTMLAnimators<
    HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
>;

export type OptionDisplayType<
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] = HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
> = {
    element: T;
    display?: string;
    animator?: AllHTMLAnimators;
};
export type OptionInfoType = { htmls: OptionDisplayType[]; on: boolean };
export type OptionInfosType = {
    Filter: OptionInfoType;
    "Try Avoid Dupes": OptionInfoType;
};
