import logoimage from '../assets/images/shieldlogo.png';

export default function buildHeader() {
    const header = document.createElement("header");
    const logo = document.createElement("div");

    // Create an image element using document.createElement
    const image = document.createElement("img");

    // Set the src attribute of the image
    image.src = logoimage;

    const companyName = document.createElement("p");

    logo.classList.add("logo");
    companyName.textContent = "Odin's Pizza Place";
    header.appendChild(logo);
    logo.appendChild(image);
    logo.appendChild(companyName);
    return header;
}


