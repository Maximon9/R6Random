export function groupButtonClicked(key) {
    sessionStorage.removeItem("group");
    sessionStorage.setItem("group", key);
    sessionStorage.removeItem("roll");
    sessionStorage.setItem("roll", "1");
}
export function changeLink(link) {
    window.location = link;
}
export function createElement(elementType, tagName, options = {
    contextMenu: false,
    draggable: false,
}) {
    let element = undefined;
    let uri = undefined;
    if (elementType === "svg") {
        uri = "http://www.w3.org/2000/svg";
    }
    else if (elementType === "math") {
        uri = "http://www.w3.org/1998/Math/MathML";
    }
    if (uri === undefined) {
        element = document.createElement(tagName, {
            is: options.is,
        });
    }
    else {
        element = document.createElementNS(uri, tagName, {
            is: options.is,
        });
    }
    if (options.contextMenu === false) {
        if (element.oncontextmenu !== undefined) {
            element.oncontextmenu = (event) => {
                event.preventDefault();
                return false;
            };
        }
    }
    if (element.draggable !== undefined) {
        element.draggable = options.draggable ?? false;
    }
    return element;
}
//# sourceMappingURL=html.js.map