import {GET_MAIN_PAGE, GET_PRODUCT, GET_PRODUCTS} from "../apolloClient/queries";
import {client} from "../apolloClient/client";

export const GetStaticMainPage = async function () {
    const {data} = await client.query({
        query: GET_MAIN_PAGE
    });
    const {hero, herovideo} = data.mainPage;

    return {
        props: {
            heroBlocks: hero,
            video: herovideo
        },
        revalidate: 60
    }
}

export const GetStaticProducts = async function () {
    const {data} = await client.query({
        query: GET_PRODUCTS,
        variables: {
            quantity: 500
        }
    });

    return {
        props: {
            products: data?.products
        },
        revalidate: 60
    }
}

export const GetStaticProduct = async function (context) {
    const {params} = context;

    const {data} = await client.query({
        query: GET_PRODUCT,
        variables: {
            id: params.productId
        }
    });

    return {
        props: {
            product: data?.product
        },
        revalidate: 60
    }
}

export const GetStaticProductsPath = async function () {
    const {data} = await client.query({
        query: GET_PRODUCTS,
        variables: {
            quantity: 500
        }
    });

    const paths = data?.products.map((p) => ({
        params: { productId: p.id },
    }));

    return { paths, fallback: 'blocking' }
}