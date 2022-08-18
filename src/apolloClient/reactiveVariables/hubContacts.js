import {makeVar} from "@apollo/client";

const hubContactsDefaults = {
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    date: '',
    day: '',
    time: '10:00 AM'
}


export const showSchedulePopup = makeVar(false);
export const hubContacts = makeVar(hubContactsDefaults);
export const isHubInputsFullFilled = makeVar(false);