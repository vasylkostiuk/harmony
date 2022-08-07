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

const ArticleId = ({article}) => {
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
        <div className="container">
            <Article article={article}/>
            <OtherArticles>
                <InSliderTitle
                    title={'Our News'}
                    linkTitle={'All news'}
                    link={'articles'}
                />
            </OtherArticles>
        </div>
    );
}

export const getStaticPaths = GetStaticArticlesPath;

export const getStaticProps = GetStaticArticle;

export default ArticleId;