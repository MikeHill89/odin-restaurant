import buildHeader from "./components/header.js";
import buildNav from "./components/nav.js";
import buildMain from "./components/pagecontent.js";
import buildFooter from "./components/footer.js";

function buildSite(){
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(buildHeader());
    wrapper.appendChild(buildNav());
    wrapper.appendChild(buildMain());
    wrapper.appendChild(buildFooter());
}

export default buildSite;
