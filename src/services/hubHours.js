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

export function createTimeIntervals(visitHours) {
    const visitHoursArr = Object.entries(visitHours);
    const filteredArr = visitHoursArr.filter(day => day[0] !== 'id' && day[0] !== "__typename");

    return filteredArr.map(day => {
        const correctPm = day[1]?.end + 12;
        const hourInterval = correctPm - day[1]?.start;

        let result = [];

        for (let i = 0; i < hourInterval; i++) {
            result.push([`${day[1]?.start + i}:00`, `${day[1]?.start + i}:15`, `${day[1]?.start + i}:30`, `${day[1]?.start + i}:45`])
        }

        return result;
    })
}