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

function createNav() {
    const nav = createElem('nav');

    nav.classList.add('navbar');
    nav.appendChild(
        createAnchorElem(
            '', 
            'index.html', 
            createImgElem(
                'Odin_Sweets.png', 
                'Odin Sweets logo', 
                'odin_sweets-logo')
            )
        );
    nav.appendChild(createNavMenu());

    return nav;
}

function createNavMenu() {
    const navMenu = createElem('div');

    navMenu.classList.add('nav_bar-menu');
    navMenu.appendChild(createMenuBtn());

    return navMenu;
}

function loadHeader() {
    const header = document.querySelector('header');

    header.appendChild(createNav());

    return header;
}

export default loadHeader;