export function groupButtonClicked(key: string) {
    console.log(sessionStorage.getItem("group"));
    sessionStorage.setItem("group", key);
    console.log(sessionStorage.getItem("group"));

    console.log(sessionStorage.getItem("roll"));
    sessionStorage.setItem("roll", "1");
    console.log(sessionStorage.getItem("roll"));
}

export function changeLink(link: string) {
    window.location = link as unknown as Location;
}
