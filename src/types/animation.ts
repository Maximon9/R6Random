//#region Main
import type { AnimationCurve } from "../utils/animation/animation.js";
import type { Vector2Type } from "./vector.js";

export type PointType = "achor" | "control";
export type AnimationPointType = [PointType, ...Vector2Type];
export type StartType = "start" | "end";

type TurnIntoCSSPropery<String extends string> = String extends string
    ? String extends ""
        ? String
        : Uncapitalize<String> extends `${infer A}${infer B}${infer C}`
        ? B extends Uppercase<B>
            ? `${Lowercase<A>}-${TurnIntoCSSPropery<`${Lowercase<B>}${C}`>}`
            : `${A}${TurnIntoCSSPropery<`${B}${C}`>}`
        : String
    : String;

type Wrapper<String extends string> = String extends string
    ? String extends ""
        ? String
        : String extends `${infer A}${infer B}${infer C}`
        ? B extends `-`
            ? `${A}${Wrapper<Capitalize<C>>}`
            : `${A}${Wrapper<`${B}${C}`>}`
        : String
    : String;
type TurnIntoCSSJSPropery<String extends string> = Wrapper<Uncapitalize<String>>;

type keyFrameOtherData = {
    composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    easing?: string;
    // offset?: number | (number | null)[];
};

type CSSPropertyKeys = TurnIntoCSSPropery<
    Exclude<
        keyof CSSStyleDeclaration,
        | number
        | Symbol
        | "length"
        | "parentRule"
        | "setProperty"
        | "removeProperty"
        | "item"
        | "getPropertyValue"
        | "getPropertyPriority"
    >
>;

type keyFrameData = keyFrameOtherData & CSSStyleDeclaration;

export type KeyFrame = {
    [k in keyof keyFrameOtherData | CSSPropertyKeys]?: keyFrameData[TurnIntoCSSJSPropery<k>];
};

export type ElementAnimationOptions = number | KeyframeAnimationOptions;
export type RealKeyframes = PropertyIndexedKeyframes | Keyframe[] | null;

type GetAllTypesInArray<T extends any[]> = T extends [infer A, infer B, ...infer C]
    ? C extends []
        ? A | B
        : A | B | GetAllTypesInArray<C>
    : T extends [infer A]
    ? A
    : T;
type DisectArrayType<
    T extends any[],
    AT extends GetAllTypesInArray<any> = GetAllTypesInArray<T>
> = T extends [infer _, ...infer B] ? (B extends [] ? [AT?] : [AT?, ...DisectArrayType<B, AT>]) : T;

export type ElementAnimationData = DisectArrayType<[KeyFrame[], ElementAnimationOptions]>;
export type ElementOptionsTest<K extends string = string> = {
    [k in K]?: ElementAnimationData;
};
export type ElementAnimationsType<K extends string = string> = {
    [k in K]?: { animation?: Animation; keyframes?: KeyFrame[]; options?: ElementAnimationOptions };
};

export type FrameData = {
    paused: boolean;
    running: boolean;
    listeners?: {
        [k in AnimationEvents]?: (() => void)[];
    };
};
export type TimelineData = {
    timeline: FrameData;
    listeners?: {
        [k in AnimationEvents]?: (() => void)[];
    };
};
export type AnimationEvents = "finish" | "pause";
export type AnimationOptions = {
    duration?: number;
    fill?: boolean;
    animationCurve?: AnimationCurve;
    infinite?: boolean;
    pingPong?: boolean;
};
export type Animate = (time: number, ...args: any[]) => void;

export type AnimatePos = "start" | "end";

export type AnimationData = DisectArrayType<[Animate, AnimationOptions, AnimatePos]>;

//#endregion
