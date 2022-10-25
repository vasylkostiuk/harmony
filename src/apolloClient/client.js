import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import Router from "next/router";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_ENDPOINT_GRAPHICL,
    headers: {
        authorization: process.env.NEXT_PUBLIC_TOKEN_GRAPHICL
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (typeof window !== "undefined" && (graphQLErrors || networkError)) {
        Router.push('/error');
    }
});


export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
});