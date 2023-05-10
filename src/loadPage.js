import { createElem } from "./elemBuilder";
import loadHeader from "./header";
import loadHome from "./home";
import loadFooter from "./footer";

function createHeader() {
    const header = createElem('header');

    return header;
}

function createMain() {
    const main = createElem('main');
    
    main.classList.add('main-content');

    return main;
}

function createFooter() {
    const footer = createElem('footer');

    return footer;
}

function setActiveNavBtn(button) {
    const navBtn = document.querySelectorAll('.nav-btn');

    navBtn.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function initializedPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHeader();
    loadHome();
    loadFooter();

    return content;
}

export default initializedPage;