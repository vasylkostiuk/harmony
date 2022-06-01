import {GET_PRODUCT} from "../apolloClient/queries";
import {client} from "../apolloClient/client";

export const GetProduct = async function () {
    const {data} = await client.query({
        query: GET_PRODUCT,
        variables: {
            id: 'cl3h1h4gwb96709k1k80tl5x0'
        }
    });

    return {
        props: {
           product: data?.product
        }
    }
}