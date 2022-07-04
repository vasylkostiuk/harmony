import {
    GetStaticArticle,
    GetStaticArticlesPath,
} from "../../src/preRender/ISR";

const ArticleId = (article) => {
    console.log(article)
    return (
        <></>
    );
}

export const getStaticPaths = GetStaticArticlesPath;

export const getStaticProps = GetStaticArticle;

export default ArticleId;