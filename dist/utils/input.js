export default class InputSystem {
    static start() {
        document.addEventListener("keyup", (event) => {
            console.log(event.code);
        });
    }
}
//# sourceMappingURL=input.js.map