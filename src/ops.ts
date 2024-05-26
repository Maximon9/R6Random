const ATTACKERS: OPInfo[] = [
    new OPInfo("Ash", image(""), image(""), [], [], []),
    new OPInfo("Blitz", image(""), image(""), [], [], []),
    new OPInfo("Buck", image(""), image(""), [], [], []),
    new OPInfo("Fuze", image(""), image(""), [], [], []),
    new OPInfo("Glaz", image(""), image(""), [], [], []),
    new OPInfo("IQ", image(""), image(""), [], [], []),
    new OPInfo("Montagne", image(""), image(""), [], [], []),
    new OPInfo("Sledge", image(""), image(""), [], [], []),
    new OPInfo("Thatcher", image(""), image(""), [], [], []),
    new OPInfo("Thermite", image(""), image(""), [], [], []),
    new OPInfo("Twitch", image(""), image(""), [], [], []),
    new OPInfo("Zofia", image(""), image(""), [], [], []),
];

function image(src: string): HTMLImageElement {
    const image = new Image();
    image.src = src;
    return image;
}
