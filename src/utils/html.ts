export function groupButtonClicked(key: string) {
    sessionStorage.removeItem("group");
    sessionStorage.setItem("group", key);
    sessionStorage.removeItem("roll");
    sessionStorage.setItem("roll", "1");
}

export function changeLink(link: string) {
    window.location = link as unknown as Location;
}
