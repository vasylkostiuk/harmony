export function paginateProducts(products, paginationStep) {
    if (products?.length <= 10) {
        return products;
    } else if (products?.length > 10) {
        return products.slice(0, 10 * paginationStep);
    }
}

export function paginationCalculate(productsCount, step) {
    return (step * 10) >= productsCount;
}