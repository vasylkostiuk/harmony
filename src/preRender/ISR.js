import {GET_MAIN_PAGE} from "../apolloClient/queries";
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