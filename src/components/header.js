function buildHeader(){
    const header = document.createElement("header");
    const logo = document.createElement("div");
    const companyName = document.createElement("p")

    logo.classList.add("logo");
    companyName.textContent = "Odin's Pizza Place";
    header.appendChild(logo);
    logo.appendChild(companyName);
    return header;
}

export default buildHeader;
