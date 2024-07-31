import type { HTMLAnimator } from "../utils/animation/animation.js";

type FetchHTMLAnimators<T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> =
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
        ? HTMLAnimator<T>
        : HTMLAnimator<HTMLElement>;

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
