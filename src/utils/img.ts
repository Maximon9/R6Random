export const whiteBackground = () => "";

export function img(src: string = whiteBackground()) {
    const image = new Image();
    image.src = src;
    return image;
}
