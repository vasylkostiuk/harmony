export function validateEmail(email) {
    const pattern= /\S+@\S+\.\S+/;
    if (pattern.test(email)) {
        return email;
    }

    return '';
}

export function validatePhoneNumber(phone) {
    const pattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (pattern.test(phone)) {
        return phone;
    }

    return '';
}

export function isContactFullFilled(contacts) {
    return !Object.values(contacts).some(el => el === '');
}

export function findEmptyField(contacts, currentField) {
    if (isContactFullFilled(contacts)) {
        return [];
    } else {
        return Object.entries(contacts).filter(el => el[1] === '').map(el => el[0]).find(el => el === currentField);
    }
}