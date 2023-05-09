import { createElem, createTextElem, createSpanElem, createBtnElem } from "./elemBuilder";

function createHeading() {
    const headingOne = createTextElem('Sharing a passion for ', 'h1', 'hero-heading');
    
    headingOne.appendChild(createSpanElem('sweets, creations, and experiences.'));

    return headingOne;
}

function loadHome() {
    console.log('Home');
}

export default loadHome;