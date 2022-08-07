export function getCorrectDate(date) {
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(date))
}