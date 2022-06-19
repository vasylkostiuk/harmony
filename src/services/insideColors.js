import {configureColor} from "./configureColor";

export function isEnableInsideColors(values) {
    const valuesArr = [...new Set(values)];

    return !!valuesArr.filter(item => item === true)?.length;
}

export function configureInsideColor(isEnable, color) {
    if (!isEnable) {
        return {
            backgroundColor: '#E4E4E7'
        }
    } else {
        return configureColor(color);
    }
}