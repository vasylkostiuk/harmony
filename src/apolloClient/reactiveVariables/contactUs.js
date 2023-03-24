import {makeVar} from "@apollo/client";

export const contactUsEmail = makeVar('');
export const contactUsFirstName = makeVar('');
export const contactUsLastName = makeVar('');
export const isContactUsEmailFullFilled = makeVar(false);