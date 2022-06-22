import {makeVar} from "@apollo/client";

const initialCurrentProduct = {
    url: '',
    width: 0,
    height: 0,
    initialPrice: 0,
    price: 0,
    calculatePrice: 0,
    internalColorPrice: 0,
    currentColor: '',
    currentFeatures: [],
    currentInternalColor: '',
    enableInsideColorArr: []
}

export const currentProductsVar = makeVar({
    ...initialCurrentProduct
});