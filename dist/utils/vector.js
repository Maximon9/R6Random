import { lerp as m_Lerp, clamp as m_Clamp } from "./math.js";
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
        this.x = m_Lerp(t, this.x, x);
        this.y = m_Lerp(t, this.y, y);
        return this;
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
        a.x = m_Lerp(t, a.x, x);
        a.y = m_Lerp(t, a.y, y);
        return a;
    }
    clamp(from, to) {
        let x;
        let y;
        let x1;
        let y1;
        if (from instanceof Vector2) {
            x = from.x;
            y = from.y;
        }
        else {
            x = from[0];
            y = from[1];
        }
        if (to instanceof Vector2) {
            x1 = to.x;
            y1 = to.y;
        }
        else {
            x1 = to[0];
            y1 = to[1];
        }
        this.x = m_Clamp(this.x, x, x1);
        this.y = m_Clamp(this.y, y, y1);
        return this;
    }
    static Clamp(vector, from, to) {
        let x;
        let y;
        let x1;
        let y1;
        if (from instanceof Vector2) {
            x = from.x;
            y = from.y;
        }
        else {
            x = from[0];
            y = from[1];
        }
        if (to instanceof Vector2) {
            x1 = to.x;
            y1 = to.y;
        }
        else {
            x1 = to[0];
            y1 = to[1];
        }
        vector.x = m_Clamp(vector.x, x, x1);
        vector.y = m_Clamp(vector.y, y, y1);
        return vector;
    }
    add(value) {
        switch (true) {
            case typeof value === "number":
                this.x += value;
                this.y += value;
                break;
            case Array.isArray(value):
                this.x += value[0];
                this.y += value[1];
                break;
            default:
                this.x += value.x;
                this.y += value.y;
                break;
        }
        return this;
    }
    static Add(vector, value) {
        switch (true) {
            case typeof value === "number":
                vector.x += value;
                vector.y += value;
                break;
            case Array.isArray(value):
                vector.x += value[0];
                vector.y += value[1];
                break;
            default:
                vector.x += value.x;
                vector.y += value.y;
                break;
        }
        return vector;
    }
    sub(value) {
        switch (true) {
            case typeof value === "number":
                this.x -= value;
                this.y -= value;
                break;
            case Array.isArray(value):
                this.x -= value[0];
                this.y -= value[1];
                break;
            default:
                this.x -= value.x;
                this.y -= value.y;
                break;
        }
        return this;
    }
    static Sub(vector, value) {
        switch (true) {
            case typeof value === "number":
                vector.x += value;
                vector.y += value;
                break;
            case Array.isArray(value):
                vector.x += value[0];
                vector.y += value[1];
                break;
            default:
                vector.x += value.x;
                vector.y += value.y;
                break;
        }
        return vector;
    }
    mul(value) {
        switch (true) {
            case typeof value === "number":
                this.x *= value;
                this.y *= value;
                break;
            case Array.isArray(value):
                this.x *= value[0];
                this.y *= value[1];
                break;
            default:
                this.x *= value.x;
                this.y *= value.y;
                break;
        }
        return this;
    }
    static Mul(vector, value) {
        switch (true) {
            case typeof value === "number":
                vector.x *= value;
                vector.y *= value;
                break;
            case Array.isArray(value):
                vector.x *= value[0];
                vector.y *= value[1];
                break;
            default:
                vector.x *= value.x;
                vector.y *= value.y;
                break;
        }
        return vector;
    }
    div(value) {
        switch (true) {
            case typeof value === "number":
                this.x /= value;
                this.y /= value;
                break;
            case Array.isArray(value):
                this.x /= value[0];
                this.y /= value[1];
                break;
            default:
                this.x /= value.x;
                this.y /= value.y;
                break;
        }
        return this;
    }
    static Div(vector, value) {
        switch (true) {
            case typeof value === "number":
                vector.x /= value;
                vector.y /= value;
                break;
            case Array.isArray(value):
                vector.x /= value[0];
                vector.y /= value[1];
                break;
            default:
                vector.x /= value.x;
                vector.y /= value.y;
                break;
        }
        return vector;
    }
    pow(value) {
        switch (true) {
            case typeof value === "number":
                this.x = Math.pow(this.x, value);
                this.y = Math.pow(this.y, value);
                break;
            case Array.isArray(value):
                this.x = Math.pow(this.x, value[0]);
                this.y = Math.pow(this.y, value[1]);
                break;
            default:
                this.y = Math.pow(this.x, value.y);
                this.x = Math.pow(this.y, value.x);
                break;
        }
        return this;
    }
    static Pow(vector, value) {
        switch (true) {
            case typeof value === "number":
                vector.x = Math.pow(vector.x, value);
                vector.y = Math.pow(vector.y, value);
                break;
            case Array.isArray(value):
                vector.x = Math.pow(vector.x, value[0]);
                vector.y = Math.pow(vector.y, value[1]);
                break;
            default:
                vector.x = Math.pow(vector.x, value.x);
                vector.y = Math.pow(vector.y, value.y);
                break;
        }
        return vector;
    }
    equils(vector) {
        if (vector instanceof Vector2) {
            return this.x === vector.x && this.y === vector.y;
        }
        else {
            return this.x === vector[0] && this.y === vector[1];
        }
    }
    toArray() {
        return [this.x, this.y];
    }
}
//# sourceMappingURL=vector.js.map