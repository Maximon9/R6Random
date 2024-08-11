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
    K extends keyof ElementMap<T> = keyof ElementMap<T>
>(
    elementType: T,
    tagName: K,
    options: {
        contextMenu?: boolean;
        draggable?: boolean;
    } & ElementCreationOptions = {
        contextMenu: false,
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
    if (options.contextMenu === false) {
        if ((element as any).oncontextmenu !== undefined) {
            (element as any).oncontextmenu = (event: MouseEvent) => {
                event.preventDefault();
                return false;
            };
        }
    }
    if ((element as any).draggable !== undefined) {
        (element as any).draggable = options.draggable ?? false;
    }
    return element;
}
