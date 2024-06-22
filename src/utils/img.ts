//#region Main
export const whiteBackground = "assets/images/WhiteBackground.jpg";

export function img(src: string = whiteBackground) {
    const image = new Image();
    image.src = src;
    return image;
}
//#endregion
