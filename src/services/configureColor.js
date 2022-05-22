export function configureColor(color) {
    if (color === '#fff' || color === '#FFF' || color === '#ffffff' || color === '#FFFFFF') {
        return {
            backgroundColor: '#fff',
            border: '1px solid #E4E4E7'
        }
    }

    return {
        backgroundColor: color
    }
}