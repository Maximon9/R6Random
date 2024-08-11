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
    if (elementType === "html") {
        if (element.oncontextmenu !==
            undefined) {
            if (options.contextMenu) {
                enableContextMenu(element);
            }
            else {
                disableContextMenu(element);
            }
        }
        if (element.draggable !== undefined) {
            element.draggable =
                options.draggable ?? false;
        }
    }
    return element;
}
export function disableContextMenu(...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.oncontextmenu = (event) => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            return false;
        };
    }
}
export function enableContextMenu(...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.oncontextmenu = (event) => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            return true;
        };
    }
}
//# sourceMappingURL=html.js.map