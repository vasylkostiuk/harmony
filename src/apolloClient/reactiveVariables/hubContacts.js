import {makeVar} from "@apollo/client";

const hubContactsDefaults = {
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    date: '',
    time: ''
}


export const showSchedulePopup = makeVar(false);
export const hubContacts = makeVar(hubContactsDefaults);
export const isHubInputsFullFilled = makeVar(false);