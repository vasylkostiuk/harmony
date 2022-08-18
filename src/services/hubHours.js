function createAmPm(time) {
    if (time === 'AM') {
        return 'a.m.'
    } else if (time === 'PM') {
        return 'p.m.'
    }

    return '';
}

function createCorrectTime (time) {
    return time + ':00';
}

function createDayName(dayName) {
    return dayName.charAt(0).toUpperCase() + dayName.slice(1);
}

function createDay(dayName, dayObj) {
    return `${createDayName(dayName)} ${createCorrectTime(dayObj?.start)} ${createAmPm(dayObj?.startAmPm)} - ${createCorrectTime(dayObj?.end)} ${createAmPm(dayObj?.endAmPm)}`
}

export function createWeek(visitHours) {
    const visitHoursArr = Object.entries(visitHours);
    const filteredArr = visitHoursArr.filter(day => day[0] !== 'id' && day[0] !== "__typename");

    return filteredArr.map(day => {
        return createDay(day[0], day[1]);
    })
}

function createInterval(time) {
    if (time > 12) {
        return [`${time - 12}:00 PM`, `${time - 12}:15 PM`, `${time - 12}:30 PM`, `${time - 12}:45 PM`]
    }

    return [`${time}:00 AM`, `${time}:15 AM`, `${time}:30 AM`, `${time}:45 AM`]
}

export function createTimeIntervals(visitHours) {
    const visitHoursArr = Object.entries(visitHours);
    const filteredArr = visitHoursArr.filter(day => day[0] !== 'id' && day[0] !== "__typename");

    return filteredArr.map(day => {
        const correctPm = day[1]?.end + 12;
        const hourInterval = correctPm - day[1]?.start;

        let result = [];

        for (let i = 0; i < hourInterval; i++) {
            result.push(createInterval(day[1]?.start + i))
        }

        return (
            {
                day: createDayName(day[0]),
                intervals: result
            }
        );
    })
}