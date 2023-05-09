import { createElem, createTextElem, createSpanElem, createBtnElem } from "./elemBuilder";

function createHeading() {
    const headingOne = createTextElem('Sharing a passion for ', 'h1', 'hero-heading');
    
    headingOne.appendChild(createSpanElem('sweets, creations, and experiences.'));

    return headingOne;
}

function createHomeContent() {
    const homeContent = createElem('div');

    homeContent.classList.add('hero-content');
    homeContent.appendChild(createHeading());
    homeContent.appendChild(createBtnElem('VIEW MENU', 'view-menu'));

    return homeContent;
}

function createHome() {
    const home = createElem('div');

    home.classList.add('hero');
    home.appendChild(createHomeContent());
    home.appendChild(createOverlay());

    return home;
}

function createOverlay() {
    const overlay = createElem('div');

    overlay.classList.add('overlay');

    return overlay;
}

function loadHome() {
    const main = document.querySelector('.main-content');

    main.textContent = '';
    main.appendChild(createHome());

    return main;
}

export default loadHome;