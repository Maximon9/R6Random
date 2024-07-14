//#region Main
export const whiteBackground = "assets/images/WhiteBackground.jpg";

export function url(src: string = "assets/images/WhiteBackground.jpg") {
    const image = new Image();
    image.src = src;
    return image;
}
//#endregion
