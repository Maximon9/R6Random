export function groupButtonClicked(key: string) {
    sessionStorage.removeItem("group");
    sessionStorage.setItem("group", key);
    sessionStorage.removeItem("roll");
    sessionStorage.setItem("roll", "1");
}

export function changeLink(link: string) {
    window.location = link as unknown as Location;
}
type ElementMap<T extends "html" | "svg" | "math" = "html"> = T extends "html"
    ? HTMLElementTagNameMap
    : T extends "svg"
    ? SVGElementTagNameMap
    : T extends "math"
    ? MathMLElementTagNameMap
    : HTMLElementTagNameMap;
export function createElement<
    T extends "html" | "svg" | "math" = "html",
    K extends Exclude<keyof ElementMap<T>, symbol | number> = Exclude<
        keyof ElementMap<T>,
        symbol | number
    >
>(
    elementType: T,
    tagName: K,
    options: {
        contextMenu?: boolean;
        draggable?: boolean;
    } & ElementCreationOptions = {
        draggable: false,
    }
): ElementMap<T>[K] {
    let element: ElementMap<T>[K] | undefined = undefined;
    let uri: string | undefined = undefined;
    if (elementType === "svg") {
        uri = "http://www.w3.org/2000/svg";
    } else if (elementType === "math") {
        uri = "http://www.w3.org/1998/Math/MathML";
    }
    if (uri === undefined) {
        element = document.createElement(tagName as keyof HTMLElementTagNameMap, {
            is: options.is,
        }) as ElementMap<T>[K];
    } else {
        element = document.createElementNS(uri, tagName as string, {
            is: options.is,
        }) as ElementMap<T>[K];
    }
    if (elementType === "html") {
        if (
            (element as HTMLElementTagNameMap[keyof HTMLElementTagNameMap]).oncontextmenu !==
            undefined
        ) {
            if (options.contextMenu) {
                enableContextMenu(element as HTMLElementTagNameMap[keyof HTMLElementTagNameMap]);
            } else {
                disableContextMenu(element as HTMLElementTagNameMap[keyof HTMLElementTagNameMap]);
            }
        }
        if (
            (element as HTMLElementTagNameMap[keyof HTMLElementTagNameMap]).draggable !== undefined
        ) {
            (element as HTMLElementTagNameMap[keyof HTMLElementTagNameMap]).draggable =
                options.draggable ?? false;
        }
    }
    return element;
}

export function disableContextMenu<
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] = HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
>(...elements: T[]) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.oncontextmenu = (event: MouseEvent) => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            return false;
        };
    }
}
export function enableContextMenu<
    T extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap] = HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
>(...elements: T[]) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.oncontextmenu = (event: MouseEvent) => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            return true;
        };
    }
}
