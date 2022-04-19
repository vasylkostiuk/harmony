import {GET_TEST_SEQUENCE} from "../../src/apolloClient/queries";
import {client} from "../../src/apolloClient/client";

export async function getServerSideSequence() {
    const { data } = await client.query({
        query: GET_TEST_SEQUENCE
    });

    return {
        props: {
            sequence: data
        },
    };
}