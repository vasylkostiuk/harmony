import {
    GET_ARTICLE,
    GET_ARTICLES, GET_FAQ, GET_FAQS_PATHS, GET_GALLERY, GET_HEADER, GET_HUB,
    GET_MAIN_PAGE,
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_SEQUENCE_PAGE
} from "../apolloClient/queries";
import {client} from "../apolloClient/client";

function errorRedirect() {
    return {
        redirect: {
            permanent: false,
            destination: '/error'
        }
    }
}

export const GetStaticMainPage = async function () {
    const {data} = await client.query({
        query: GET_MAIN_PAGE,
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    const {hero, mainPageVideo, preTitle, sliderDescription, sliderTitle} = data?.mainPage;

    return {
        props: {
            heroBlocks: hero,
            videoInfo: mainPageVideo,
            sliderInfo: {preTitle, sliderDescription, sliderTitle},
            footer: data?.footers[0],
            header: data?.headers[0]
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
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            products: data?.products,
            footer: data?.footers[0],
            header: data?.headers[0]
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
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            product: data?.product,
            footer: data?.footers[0],
            header: data?.headers[0]
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
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    const paths = data?.products.map((p) => ({
        params: { productId: p.id },
    }));

    return { paths, fallback: 'blocking' }
}

export const GetStaticFaqsPath = async function () {
    const {data} = await client.query({
        query: GET_FAQS_PATHS,
        variables: {
            quantity: 500
        }
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    const paths = data?.faqs.map((f) => ({
        params: { faqid: f.id },
    }));

    return { paths, fallback: 'blocking' }
}

export const GetFaq = async function (context) {
    const {params} = context;

    const {data} = await client.query({
        query: GET_FAQ,
        variables: {
            id: params.faqid
        }
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            faq: data?.faq,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const GetStaticArticles = async function() {
    const {data} = await client.query({
        query: GET_ARTICLES
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            articles: data?.articles
        },
        revalidate: 60
    }
}

export const GetStaticArticlesPath = async function() {
    const {data} = await client.query({
        query: GET_ARTICLES
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    const paths = data?.articles.map(a => ({
        params: {
            articleId: a?.id
        }
    }))

    return { paths, fallback: "blocking" }
}

export const GetStaticArticle = async function(context) {
    const {params} = context;

    const {data} = await client.query({
        query: GET_ARTICLE,
        variables: {
            id: params.articleId
        }
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            article: data?.article,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const GetStaticSequencePage = async function() {
    const {data} = await client.query({
        query: GET_SEQUENCE_PAGE,
        variables: {
            id: "cl5v0twvnkas20ciny2i61g7u"
        }
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            sequenceData: data?.sequencePage,
            footer: data?.footers[0]
        },
        revalidate: 60
    }
}

export const getHub = async function() {
    const {data} = await client.query({
        query: GET_HUB
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }
    const hub = data?.hubs[0];

    return {
        props: {
            hub,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const getGallery = async function() {
    const {data} = await client.query({
        query: GET_GALLERY
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            gallery: data,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const getHeader = async function() {
    const {data} = await client.query({
        query: GET_HEADER
    }).catch(() => {
        return errorRedirect();
    });

    if (!data) {
        return errorRedirect();
    }

    return {
        props: {
            header: data?.headers[0]
        },
        revalidate: 60
    }
}