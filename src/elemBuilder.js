function createElem(elem) {
    return document.createElement(elem);
}

function createImgElem(fileName, altName) {
    const imgElem = createElem('img');

    imgElem.src = `images/${fileName}`;
    imgElem.alt = altName;

    return imgElem;
}

function createTextElem(text, nameTag, className) {
    const textElem = createElem(nameTag);

    textElem.classList.add(className);
    textElem.textContent = text;

    return textElem;
}

function createSpanElem(text) {
    const spanElem = createElem('span')

    spanElem.textContent = text;

    return spanElem;
}

function createBtnElem(text, className) {
    const btnElem = createElem('button');

    btnElem.classList.add(className);
    btnElem.textContent = text;

    return btnElem;
}

export { 
    createElem,
    createImgElem,
    createTextElem,
    createSpanElem,
    createBtnElem
}