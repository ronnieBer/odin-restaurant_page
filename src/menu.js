import { createElem, createImgElem, createTextElem, createBtnElem } from "./elemBuilder";

function createMenuItem(fileUrl, itemName, itemPrice) {
    const menuItem = createElem('div');
    const menuItemName = createElem('div');
    const menuItemPrice = createElem('div');

    menuItemName.classList.add('menu-item-name');
    menuItemName.appendChild(createTextElem(itemName, 'h4', 'item-name'));

    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.appendChild(createTextElem(itemPrice, 'p', 'item-price'));

    menuItem.classList.add('menu-item');
    menuItem.appendChild(createImgElem(fileUrl, itemName.toLowerCase()));
    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemPrice);
    menuItem.appendChild(createBtnElem('View Details', 'view-details-btn'));

    return menuItem;
}

function createMenu() {
    const menu = createElem('div');
    const menuContent = createElem('div');

    menuContent.classList.add('menu-content');
    // crossant items
    menuContent.appendChild(createMenuItem('crossant/crossant01.jpg', 'NUTELLA CROSSANTS', 'PHP 900.00'));
    menuContent.appendChild(createMenuItem('crossant/crossant02.jpg', 'PAIN AU CHOCOLAT CROSSANTS', 'PHP 1,100.00'));
    menuContent.appendChild(createMenuItem('crossant/crossant03.jpg', 'RED VELVET CROSSANTS', 'PHP 900.00'));
    // tart items
    menuContent.appendChild(createMenuItem('tart/tart01.jpg', 'MANGOES  CALASSIC CORSSANT TARTS', 'PHP 1,200.00'));
    menuContent.appendChild(createMenuItem('tart/tart02.jpg', 'STRAWBERRIES CLASSIC CROSSANT TARTS', 'PHP 1,400.00'));
    menuContent.appendChild(createMenuItem('tart/tart03.jpg', 'MIXED BERRIES CLASSIC CROSSANT TARTS', 'PHP 2,600.00'));
    // cake items
    menuContent.appendChild(createMenuItem('cake/cake01.jpg', 'STRAWBERRY CHARLOTTE', 'PHP 2,500.00'));
    menuContent.appendChild(createMenuItem('cake/cake02.jpg', 'MANGO CHEESECAKE', 'PHP 2,000.00'));
    menuContent.appendChild(createMenuItem('cake/cake03.jpg', 'STRAWBERRY CHEESECAKE', 'PHP 2,300.00'));
    menuContent.appendChild(createMenuItem('cake/cake04.jpg', 'TRIO MOUSSE', 'PHP 2,000.00'));
    menuContent.appendChild(createMenuItem('cake/cake05.jpg', 'PEARL', 'PHP 1,350.00'));
    menuContent.appendChild(createMenuItem('cake/cake06.jpg', 'CHOCOLATTA', 'PHP 1,500.00'));

    menu.classList.add('our-menu');
    menu.appendChild(createTextElem('Our Menu', 'h1', 'menu-heading'));
    menu.appendChild(menuContent);

    return menu;
}

function loadMenu() {
    const main = document.querySelector('.main-content');

    main.textContent = '';
    main.appendChild(createMenu());

    return main;
}

export default loadMenu;