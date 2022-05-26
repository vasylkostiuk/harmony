import {makeVar} from "@apollo/client";

const initialCurrentProduct = {
    url: '',
    width: 0,
    height: 0
}

export const currentProductVar = makeVar({
    ...initialCurrentProduct
});