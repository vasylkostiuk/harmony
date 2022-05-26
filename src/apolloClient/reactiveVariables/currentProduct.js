import {makeVar} from "@apollo/client";

const initialCurrentProduct = {
    url: '',
    width: 0,
    height: 0,
    initialPrice: 0,
    price: 0,
    calculatePrice: 0
}

export const currentProductVar = makeVar({
    ...initialCurrentProduct
});