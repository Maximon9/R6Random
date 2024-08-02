export function createFooter(parentElement: HTMLElement) {
    const footer = document.createElement("footer");
    footer.innerHTML =
        "This is an unofficial site and not sponsored by Ubisoft. All images are property of Ubisoft. If you have any problems or find any bugs report the issue";
    const here = document.createElement("a");
    here.href = "https://github.com/Maximon9/R6Random/issues";
    here.ariaLabel = "Link to the issue page of this websites github repository";
    here.innerHTML = "here";
    footer.appendChild(here);
    parentElement.appendChild(footer);
}
