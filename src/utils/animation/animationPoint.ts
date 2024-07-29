import { Vector2 } from "../vector.js";
import type { PointType } from "../../types/animation.js";

export class AnimationPoint extends Vector2 {
    type: PointType;
    constructor(type: PointType, x: number = 0, y: number = 0) {
        super(x, y);
        this.type = type;
    }
}
