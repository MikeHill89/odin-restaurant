export function handleContactClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = "<p>Contact</p>";
    main.appendChild(section);
}
