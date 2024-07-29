import { Vector2 } from "../vector.js";
export class AnimationPoint extends Vector2 {
    type;
    constructor(type, x = 0, y = 0) {
        super(x, y);
        this.type = type;
    }
}
//# sourceMappingURL=animationPoint.js.map