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

function loadMenu() {
    console.log('Menu');
}

export default loadMenu;