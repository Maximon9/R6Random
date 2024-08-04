export function groupButtonClicked(key) {
    sessionStorage.removeItem("group");
    sessionStorage.setItem("group", key);
    sessionStorage.removeItem("roll");
    sessionStorage.setItem("roll", "1");
}
export function changeLink(link) {
    window.location = link;
}
//# sourceMappingURL=html.js.map