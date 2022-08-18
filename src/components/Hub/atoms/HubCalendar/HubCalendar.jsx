import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {useState} from "react";
import {hubContacts} from "../../../../apolloClient/reactiveVariables/hubContacts";
import {getCorrectDate} from "../../../../services/getCorrectDate";

const HubCalendar = () => {
    const [value, setValue] = useState(new Date());

    return (
        <Calendar
            locale={"en-US"}
            value={value}
            minDate={new Date()}
            onChange={(val) => {
                setValue(val)
                hubContacts({
                    ...hubContacts(),
                    date: getCorrectDate(val),
                    day: val.getDay()
                })
            }}
        />
    );
}

export default HubCalendar;