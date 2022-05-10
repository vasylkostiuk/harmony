import {persistCache} from "apollo3-cache-persist";
import {InMemoryCache} from "@apollo/client";

const initCache = () => {
    const cache = new InMemoryCache().restore({});

    if(typeof window !== 'undefined') {
        persistCache({
            cache,
            storage: window.localStorage
        });
    }

    return cache;
}

export default initCache;