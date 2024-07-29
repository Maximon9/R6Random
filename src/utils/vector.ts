import { lerp as m_Lerp, clamp as m_Clamp } from "./math.js";

export class Vector2 {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    lerp(t: number, to: [number, number] | Vector2) {
        let x;
        let y;
        if (to instanceof Vector2) {
            x = to.x;
            y = to.y;
        } else {
            x = to[0];
            y = to[1];
        }
        this.x = m_Lerp(t, this.x, x);
        this.y = m_Lerp(t, this.y, y);
        return this;
    }
    static Lerp(t: number, a: Vector2, b: [number, number] | Vector2) {
        let x;
        let y;
        if (b instanceof Vector2) {
            x = b.x;
            y = b.y;
        } else {
            x = b[0];
            y = b[1];
        }
        a.x = m_Lerp(t, a.x, x);
        a.y = m_Lerp(t, a.y, y);
        return a;
    }

    clamp(from: [number, number] | Vector2, to: [number, number] | Vector2) {
        let x;
        let y;
        let x1;
        let y1;
        if (from instanceof Vector2) {
            x = from.x;
            y = from.y;
        } else {
            x = from[0];
            y = from[1];
        }
        if (to instanceof Vector2) {
            x1 = to.x;
            y1 = to.y;
        } else {
            x1 = to[0];
            y1 = to[1];
        }
        this.x = m_Clamp(this.x, x, x1);
        this.y = m_Clamp(this.y, y, y1);
        return this;
    }
    static Clamp(
        vector: Vector2,
        from: [number, number] | Vector2,
        to: [number, number] | Vector2
    ) {
        let x;
        let y;
        let x1;
        let y1;
        if (from instanceof Vector2) {
            x = from.x;
            y = from.y;
        } else {
            x = from[0];
            y = from[1];
        }
        if (to instanceof Vector2) {
            x1 = to.x;
            y1 = to.y;
        } else {
            x1 = to[0];
            y1 = to[1];
        }
        vector.x = m_Clamp(vector.x, x, x1);
        vector.y = m_Clamp(vector.y, y, y1);
        return vector;
    }
    add(vector: Vector2) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    static Add(vector: Vector2, to: Vector2) {
        vector.x += to.x;
        vector.y += to.y;
        return vector;
    }

    toArray(): [number, number] {
        return [this.x, this.y];
    }
}
