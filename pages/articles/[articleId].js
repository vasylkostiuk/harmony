import {
    GetStaticArticle,
    GetStaticArticlesPath,
} from "../../src/preRender/ISR";
import Article from "../../src/components/Articles/Article";
import OtherArticles from "../../src/components/Articles/atoms/OtherArticles/OtherArticles";
import InSliderTitle from "../../src/components/OtherProducts/atoms/InProductTitle/InSliderTitle";

const ArticleId = ({article}) => {
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