import { lerp as mlerp } from "../math.js";
export class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    lerp(t, to) {
        let x;
        let y;
        if (to instanceof Vector2) {
            x = to.x;
            y = to.y;
        }
        else {
            x = to[0];
            y = to[1];
        }
        this.x = mlerp(t, this.x, x);
        this.y = mlerp(t, this.y, y);
    }
    static Lerp(t, a, b) {
        let x;
        let y;
        if (b instanceof Vector2) {
            x = b.x;
            y = b.y;
        }
        else {
            x = b[0];
            y = b[1];
        }
        a.x = mlerp(t, a.x, x);
        a.y = mlerp(t, a.y, y);
    }
}
//# sourceMappingURL=vector.js.map