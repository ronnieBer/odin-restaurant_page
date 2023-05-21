import { createElem, createImgElem, createTextElem, createInputElem, createTextareaElem } from "./elemBuilder";

function createContact() {
    const contactContent = createElem('div');

    const contactInfoLeft = createElem('div');

    contactInfoLeft.classList.add('info-left');
    contactInfoLeft.appendChild(createTextElem('Address:', 'h3', 'address-heading'));
    contactInfoLeft.appendChild(createTextElem('ODIN\'S SWEETS', 'p', 'company-name'));
    contactInfoLeft.appendChild(
        createTextElem(
            'The Resident at Greenbelt, Laguna Tower 28B Pasay Road, Makati City', 
            'p', 
            'company-address'
        )
    );
    contactInfoLeft.appendChild(createTextElem('Phone No.:', 'h3', 'phone-heading'));
    contactInfoLeft.appendChild(createTextElem('+63 995 123 3465', 'p', 'company-phone'));
    contactInfoLeft.appendChild(createTextElem('Email Address:', 'h3', 'email-heading'));
    contactInfoLeft.appendChild(createTextElem('odin\'s_sweets@gmail.com', 'p', 'company-email'));

    const contactForm = createElem('form');

    contactForm.appendChild(createInputElem('text', 'fname', 'fname', '*First Name', 'input-fname'));
    contactForm.appendChild(createInputElem('text', 'lname', 'lname', '*Last Name', 'input-lname'));
    contactForm.appendChild(createInputElem('tel', 'phone', 'phone', '*Phone', 'input-phone'));
    contactForm.appendChild(createInputElem('email', 'email', 'email', '*Email', 'input-email'));
    contactForm.appendChild(createTextareaElem('text-message', 'text-message', 'Message', 'text-message'));
    contactForm.appendChild(createInputElem('submit', '', '', 'submit-btn'));

    const contactInfoRight = createElem('div');

    contactInfoRight.classList.add('info-right');
    contactInfoRight.appendChild(contactForm);

    const contactInfo = createElem('div');

    contactInfo.classList.add('contact-info');
    contactInfo.appendChild(contactInfoLeft);
    contactInfo.appendChild(contactInfoRight);

    const locationMap = createElem('div');

    locationMap.classList.add('location-map');
    locationMap.appendChild(createImgElem('location_map.jpg', 'Location Map'));

    contactContent.classList.add('contact-content');
    contactContent.appendChild(createTextElem('Contact Us', 'h1', 'contact-heading'));
    contactContent.appendChild(contactInfo);
    contactContent.appendChild(locationMap);

    return contactContent;
}

function loadContact() {
    console.log('Contact');
}

export default loadContact;