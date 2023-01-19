import ArticlesFilterContainer
    from "../../src/components/Articles/molecules/ArticleFilterContainer/ArticlesFilterContainer";
import {useQuery, useReactiveVar} from "@apollo/client";
import {currentArticleFilter, currentEndCursor} from "../../src/apolloClient/reactiveVariables/articles";
import ArticlesQueryContainer
    from "../../src/components/Articles/atoms/ArticlesPreviewContainer/ArticlesQueryContainer";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";
import {getHeader} from "../../src/preRender/ISR";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import BreadCrumbs from "../../src/components/global/BreadCrumbs/BreadCrumbs";
import HeadGenerator from "../../src/components/global/HeadGenerator/HeadGenerator";

const SEOdata = {
    title: 'Harmony Domes News | Building Your Own Glamping Park | How To Glamp | Living The Dome Life',
    description: 'Whether you’re looking to build a dome to permanently live in, invest in a glamping facility or build a private vacation spot just for you, read our news for glamping, domes and the geodesic lifestyle.',
    keywords: 'Glamping Investing, Living In A Dome, Harmony Domes News, The Dome Life, Building A Dome, Building A Glamping Facility, How To Glamp  FAQ Denver'
}

const Articles = ({header}) => {
    const cursor = useReactiveVar(currentEndCursor);
    const currentFilter = useReactiveVar(currentArticleFilter);
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
            <HeadGenerator
                title={SEOdata?.title}
                keywords={SEOdata?.keywords}
                description={SEOdata?.description}
            />
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    favicon={header?.favicon?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                <BreadCrumbs master={'News'}/>
                <ArticlesFilterContainer/>
                <ArticlesQueryContainer
                    cursor={cursor}
                    filter={currentFilter}
                />
            </div>
            {
                !loading
                ?
                    <Footer footer={data?.footers[0]}/>
                :
                    <></>
            }
        </>
    )
}

export const getStaticProps = getHeader;

export default Articles;