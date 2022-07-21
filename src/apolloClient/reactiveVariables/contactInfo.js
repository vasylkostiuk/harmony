import {makeVar} from "@apollo/client";

const contactInfoDefaults = {
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
}

export const isInputsFullFilled = makeVar(false);

export const contactInfo = makeVar(contactInfoDefaults);