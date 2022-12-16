import {
    GetStaticArticle,
    GetStaticArticlesPath,
} from "../../src/preRender/ISR";
import Article from "../../src/components/Articles/Article";
import OtherArticles from "../../src/components/Articles/atoms/OtherArticles/OtherArticles";
import InSliderTitle from "../../src/components/OtherProducts/atoms/InProductTitle/InSliderTitle";
import {useEffect} from "react";
import {useMutation} from "@apollo/client";
import {INCREASE_ARTICLE_COUNT} from "../../src/apolloClient/mutations";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import BreadCrumbs from "../../src/components/global/BreadCrumbs/BreadCrumbs";

const ArticleId = ({article, footer, header}) => {
    const [increaseCount] = useMutation(INCREASE_ARTICLE_COUNT,
        {
            variables: {
                id: article?.id,
                count: article?.visionCount + 1
            }
        }
    )

    useEffect(() => {
        increaseCount();
    }, [article?.id])

    return (
        <>
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    favicon={header?.favicon?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                <BreadCrumbs master={'News'} masterLink={'/articles'} detail={article?.title}/>
                <Article article={article}/>
                <OtherArticles>
                    <InSliderTitle
                        title={'Our News'}
                        linkTitle={'All news'}
                        link={'articles'}
                    />
                </OtherArticles>
            </div>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticPaths = GetStaticArticlesPath;

export const getStaticProps = GetStaticArticle;

export default ArticleId;