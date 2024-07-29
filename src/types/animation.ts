import type { Vector2Type } from "./vector.js";

export type PointType = "achor" | "control";
export type AnimationPointType = [PointType, ...Vector2Type];
