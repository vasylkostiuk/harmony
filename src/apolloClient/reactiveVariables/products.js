import {makeVar} from "@apollo/client";

export const productsVar = makeVar([]);

export const currentProductsVar = makeVar([]);

export const filteredProductsVar = makeVar([]);

export const currentCategoryVar = makeVar('All products');

export const currentFilterVar = makeVar(
    {
        showDropdown: false,
        currentFilter: 'New products'
    }
)