const root = document.querySelector(":root") as HTMLElement;

export default class CSSVariables {
    get(key: string) {
        if (root !== null) {
            const rs = getComputedStyle(root);
            return rs.getPropertyValue(key);
        }
    }

    set(key: string, value: string) {
        if (root !== null) {
            return root.style.setProperty(key, value);
        }
    }
}
