import { createElem, createTextElem, createSpanElem, createBtnElem } from "./elemBuilder";

function createHeading() {
    const headingOne = createTextElem('Sharing a passion for ', 'h1', 'hero-heading');
    
    headingOne.appendChild(createSpanElem('sweets, creations, and experiences.'));

    return headingOne;
}

function createHomeContent() {
    const homeContent = document.createElement('div');

    homeContent.classList.add('hero-content');
    homeContent.appendChild(createHeading());
    homeContent.appendChild(createBtnElem('VIEW MENU', 'view-menu'));

    return homeContent;
}

function loadHome() {
    console.log('Home');
}

export default loadHome;