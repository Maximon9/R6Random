import type {JSONObject} from "../c_types/json.js";

export function mergeCopy(...objList: {}[]) {
    const copy = {...objList[0]};
    delete objList[0];
    merge(copy, ...objList);
    return copy;
}
export function merge(obj: JSONObject, ...objList: JSONObject[]) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return;
    }
    for (let i = 0; i < objList.length; i++) {
        const obj1 = objList[i];
        if (typeof obj1 !== "object" || Array.isArray(obj)) {
            return;
        }
        for (const key in obj1) {
            const value = obj[key];
            const value1 = obj1[key];
            if (Object.keys(obj).includes(key) && typeof value === "object" && typeof value === "object") {
                merge(value, value1);
            } else {
                obj[key] = obj1[key];
            }
        }
    }
}
