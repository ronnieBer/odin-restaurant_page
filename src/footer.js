import { createTextElem } from "./elemBuilder";

function createCopyrightTxt() {
    const copyrightTxt = createTextElem('© 2023 The Odin Project by onnieber', 'p', 'copyright-txt');

    return copyrightTxt;
}

function loadFooter() {
    const footer = document.querySelector('footer');

    footer.appendChild(createCopyrightTxt());

    return footer;
}

export default loadFooter;