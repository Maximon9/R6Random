export function groupButtonClicked(key) {
    console.log(sessionStorage.getItem("group"));
    sessionStorage.setItem("group", key);
    console.log(sessionStorage.getItem("group"));
    console.log(sessionStorage.getItem("roll"));
    sessionStorage.setItem("roll", "1");
    console.log(sessionStorage.getItem("roll"));
}
export function changeLink(link) {
    window.location = link;
}
//# sourceMappingURL=html.js.map