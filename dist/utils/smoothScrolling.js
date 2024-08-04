import { lerp } from "./math.js";
let directionX = "";
let directionY = "";
const TIME_INTERVAL = 1;
const scrollData = {
    x: 0,
    y: 0,
    pdX: "",
    pdY: "",
    ogX: 0,
    ogY: 0,
    timeX: TIME_INTERVAL,
    timeY: TIME_INTERVAL,
};
window.addEventListener("wheel", (event) => {
    if (event.deltaX > 0) {
        directionX = "right";
    }
    else if (event.deltaX < 0) {
        directionX = "left";
    }
    if (event.deltaY > 0) {
        directionY = "up";
    }
    else if (event.deltaY < 0) {
        directionY = "down";
    }
    handleScrolling(event.deltaX, event.deltaY);
    scrollData.pdY = directionY;
    scrollData.pdX = directionY;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}, { passive: false });
/* const animator = new Animator(
    (t: number) => {
        const data = scrollData.ogY + scrollData.y;
        window.scrollTo({
            top: lerp(t, window.scrollY, data),
            behavior: "instant",
        });
        if (t === 1) {
            scrollData.x = 0;
            scrollData.y = 0;
        }
    },
    { time: 1 }
); */
let running = false;
let timer = 1;
let lastTimestamp = 0;
const play = () => {
    if (!running) {
        running = true;
        lastTimestamp = window.performance.now();
        timer = 0;
        requestAnimationFrame(update);
    }
};
const pause = () => {
    if (running) {
        running = false;
    }
};
const update = (timestamp) => {
    /* if (!running) {
        scrollData.x = 0;
        scrollData.y = 0;
        return;
    } */
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    /* if (timer < scrollData.timeY) {
        timer += deltaTime;
    } else {
        running = false;
    } */
    const data = scrollData.ogY + scrollData.y;
    console.log(data - scrollData.ogY);
    window.scrollTo({
        top: lerp(deltaTime, window.scrollY, data),
        behavior: "instant",
    });
    requestAnimationFrame(update);
};
const handleScrolling = (x, y) => {
    if (directionX !== scrollData.pdX) {
        scrollData.x = x;
        scrollData.ogX = window.scrollX;
    }
    else {
        scrollData.x += x;
    }
    scrollData.y = y;
    scrollData.ogY = window.scrollY;
    if (directionY !== scrollData.pdY) {
    }
    /* if (!running) {
        scrollData.ogX = window.scrollX;
        scrollData.ogY = window.scrollY;
    } */
    play();
};
//# sourceMappingURL=smoothScrolling.js.map