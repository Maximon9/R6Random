const root = document.querySelector(":root");
export default class CSSVariables {
    get(key) {
        if (root !== null) {
            const rs = getComputedStyle(root);
            return rs.getPropertyValue(key);
        }
    }
    set(key, value) {
        if (root !== null) {
            return root.style.setProperty(key, value);
        }
    }
}
//# sourceMappingURL=CSSVariables.js.map