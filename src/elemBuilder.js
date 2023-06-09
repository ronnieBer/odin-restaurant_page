function createElem(elem) {
    return document.createElement(elem);
}

function createImgElem(fileName, altName, className) {
    const imgElem = createElem('img');

    imgElem.classList.add(className)
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

function createAnchorElem(text, hrefValue, childName) {
    const anchor = document.createElement('a');

    anchor.textContent = text;
    anchor.setAttribute('href', hrefValue);
    anchor.appendChild(childName);

    return anchor;
}

function createBtnElem(text, className) {
    const btnElem = createElem('button');

    btnElem.classList.add(className);
    btnElem.textContent = text;

    return btnElem;
}

function createInputElem(inputType, inputId, inputName, inputPlaceholder, className) {
    const inputElem = createElem('input');

    inputElem.classList.add(className);
    inputElem.setAttribute('type', inputType);
    inputElem.setAttribute('id', inputId);
    inputElem.setAttribute('name', inputName);
    inputElem.setAttribute('placeholder', inputPlaceholder);

    return inputElem;
}

function createTextareaElem(textareaId, textareaName, placeholderText, className) {
    const textareaElem = createElem('textarea');

    textareaElem.classList.add(className);
    textareaElem.setAttribute('id', textareaId);
    textareaElem.setAttribute('name', textareaName);
    textareaElem.setAttribute('placeholder', placeholderText);

    return textareaElem;
}

function createLabelElem(inputId, labelClass) {
    const labelElem = createElem('label');

    labelElem.classList.add(labelClass);
    labelElem.setAttribute('for', inputId);

    return labelElem;
}

export { 
    createElem,
    createImgElem,
    createTextElem,
    createSpanElem,
    createAnchorElem,
    createBtnElem,
    createInputElem,
    createTextareaElem,
    createLabelElem
}