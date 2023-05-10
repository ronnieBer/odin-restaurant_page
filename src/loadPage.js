import { createElem } from "./elemBuilder";
import loadHeader from "./header";
import loadHome from "./home";
import loadFooter from "./footer";

function createHeader() {
    const header = createElem('header');

    return header;
}

function createMain() {
    const main = createElem('main')
    
    main.classList.add('main-content');

    return main;
}

function initializedPage() {
    console.log('Hello World');
}

export default initializedPage;