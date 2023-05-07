import { createTextElem } from "./elemBuilder";

function createCopyrightTxt() {
    const copyrightTxt = createTextElem('© 2023 The Odin Project by onnieber', 'p', 'copyright-txt');

    return copyrightTxt;
}

function loadFooter() {
    console.log('Footer');
}

export default loadFooter;