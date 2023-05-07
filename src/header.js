import { createElem, createImgElem, createAnchorElem } from "./elemBuilder";

function createMenuBtn() {
    const listString = ['HOME', 'MENU', 'CONTACT'];
    const unorderedList = createElem('ul');

    for (let i in listString) {
        let anchor = createElem('a');
        anchor.href = '';
        anchor.classList.add('nav-btn');
        anchor.classList.add(listString[i].toLowerCase());
        anchor.innerText = listString[i];

        let list = createElem('li');
        list.appendChild(anchor);
        unorderedList.appendChild(list);
    }
    
    return unorderedList;
}

function loadHeader() {
    console.log('Header')
}

export default loadHeader;