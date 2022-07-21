export function searchCountries(countries, searchString) {
    const result = [];
    countries.map((list) => {
        if (list.toLocaleLowerCase().search(searchString.toLocaleLowerCase()) > -1) {
            result.push(list)
        }
    })
    return result;
}