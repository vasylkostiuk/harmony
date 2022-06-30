function searchIndex (array, id) {
    return array.findIndex(el => el.product.uniqueId === id);
}

export const deleteProduct = (array, id) => {
    return array.filter(item => item?.product.uniqueId !== id);
}

export function changeCheckoutObj(array, id, field, value) {
    const elIdx = searchIndex(array, id);
    const currentEl = array[elIdx];
    currentEl[field] = value;
    array[elIdx] = currentEl;

    return array;
}

export function deleteObjFeature(array,id, featureId) {
    const elIdx = searchIndex(array, id);
    const currentFeature = array[elIdx]?.product?.extraFeatures.find(el => el?.id === featureId);
    const filteredArr = array[elIdx]?.product?.extraFeatures.filter(el => el?.id !== featureId);
    array[elIdx].product.extraFeatures = filteredArr;
    array[elIdx].calculatePrice = array[elIdx].calculatePrice - currentFeature?.price;

    return array;
}

export function changeExternalColor(array, id, color, colorName, price, initialPrice) {
    const el = array.find(el => el.product.uniqueId === id);
    const elIdx = searchIndex(array, id);
    const colorsCopy = {...el.product.colors[0], title: colorName, color: {hex: color}};
    array[elIdx].product.colors[0] = colorsCopy;
    array[elIdx].price = initialPrice + price;

    return array;
}

export function changeInternalColor(array, id, color, colorName, price) {
    const elIdx = searchIndex(array, id);
    const colorsCopy = {...array[elIdx].product.internalColor[0], title: colorName, color: {hex: color}};
    array[elIdx].product.internalColor[0] = colorsCopy;
    array[elIdx].internalColorPrice = price;

    return array;
}

export function deleteInternalColorPrice(array, id) {
    const elIdx = searchIndex(array, id);
    array[elIdx].internalColorPrice = 0;
    return array;
}

export function changeProductQuantity(array,id, isIncreasing) {
    const quantityChange = isIncreasing ? 1 : -1;
    const elIdx = searchIndex(array, id);
    array[elIdx].quantity = array[elIdx].quantity + quantityChange;

    return array;
}

export function reduceTotalAmount(array) {
    let initialValue = 0;

    if (!array?.length) {
        return;
    } else if (array.length === 1) {
        return ((array[0]?.price + array[0]?.internalColorPrice + array[0]?.calculatePrice) * array[0]?.quantity)
    }
    for (let i = 0; i < array.length; i++) {
        initialValue += ((array[i]?.price + array[i]?.internalColorPrice + array[i]?.calculatePrice) * array[i]?.quantity)
    }
    return initialValue
}