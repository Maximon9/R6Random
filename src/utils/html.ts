export function groupButtonClicked(key: string) {
    sessionStorage.setItem("group", key);
    sessionStorage.setItem("roll", "1");
}

export function changeLink(link: string) {
    window.location = link as unknown as Location;
}
