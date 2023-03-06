import {
    GET_ARTICLE,
    GET_ARTICLES, GET_FAQ, GET_FAQS_PATHS, GET_GALLERY, GET_HEADER, GET_HUB,
    GET_MAIN_PAGE,
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_SEQUENCE_PAGE, GET_SEQUENCE_PAGE_LONG, GET_SEQUENCE_PAGES_IDS, GET_SEQUENCE_PAGES_LONG_IDS
} from "../apolloClient/queries";
import {client} from "../apolloClient/client";

export const GetStaticMainPage = async function () {
    const {data} = await client.query({
        query: GET_MAIN_PAGE,
    })

    const {
        hero,
        mainPageVideo,
        preTitle,
        sliderDescription,
        sliderTitle,
        seoTitle,
        seoDescription,
        seoKeywords
    } = data?.mainPage;

    return {
        props: {
            heroBlocks: hero,
            videoInfo: mainPageVideo,
            sliderInfo: {preTitle, sliderDescription, sliderTitle},
            SEOdata: {seoTitle, seoDescription, seoKeywords},
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
    })

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
    })

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
    })

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
    })

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
    })

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
    })

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
    })

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
    })

    return {
        props: {
            article: data?.article,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const GetStaticSequencePagesPath = async function() {
    const {data} = await client.query({
        query: GET_SEQUENCE_PAGES_IDS
    })

    const paths = data?.sequencePages.map(e => ({
        params: {
            presentationId: e?.id
        }
    }))

    return { paths, fallback: "blocking" }
}

export const GetStaticSequencePage = async function(context) {
    const {params} = context;

    const {data} = await client.query({
        query: GET_SEQUENCE_PAGE,
        variables: {
            id: params?.presentationId
        }
    })

    return {
        props: {
            sequenceData: data?.sequencePage,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const GetStaticSequencePagesLongPath = async function() {
    const {data} = await client.query({
        query: GET_SEQUENCE_PAGES_LONG_IDS
    })

    const paths = data?.sequencePageLongs.map(e => ({
        params: {
            presentationId: e?.id
        }
    }))

    return { paths, fallback: "blocking" }
}

export const GetStaticSequencePageLong = async function(context) {
    const {params} = context;

    const {data} = await client.query({
        query: GET_SEQUENCE_PAGE_LONG,
        variables: {
            id: params?.presentationId
        }
    })

    return {
        props: {
            sequenceData: data?.sequencePageLong,
            footer: data?.footers[0],
            header: data?.headers[0]
        },
        revalidate: 60
    }
}

export const getHub = async function() {
    const {data} = await client.query({
        query: GET_HUB
    })
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
    })

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
    })

    return {
        props: {
            header: data?.headers[0]
        },
        revalidate: 60
    }
}