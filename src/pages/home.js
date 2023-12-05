export function handleHomeClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = "<p>Hello!</p>";
    main.appendChild(section);
}
