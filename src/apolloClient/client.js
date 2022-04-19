import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl0sl6rrt00vr01zb9bwm55u4/master",
    cache: new InMemoryCache()
});