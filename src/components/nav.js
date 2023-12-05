function buildNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    const liMenu = document.createElement("li");
    const liContact = document.createElement("li");

    liHome.textContent = "home";
    liMenu.textContent = "menu";
    liContact.textContent = "contact";

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    nav.appendChild(ul);
    return nav;
}
export default buildNav;
