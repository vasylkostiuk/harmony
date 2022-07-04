import {GetStaticArticles} from "../../src/preRender/ISR";
import ArticlePreview from "../../src/components/Articles/atoms/ArticlePreview/ArticlePreview";

const Articles = ({articles}) => {
    return (
        <div className="container">
            {
                articles.map(article => {
                    return <ArticlePreview
                        key={article?.id}
                        articleId={article?.id}
                        imageSrc={article?.presentationImage?.url}
                        width={article?.presentationImage?.width}
                        height={article?.presentationImage?.height}
                        description={article?.description}
                        title={article?.title}
                    />
                })
            }
        </div>
    )
}

export const getStaticProps = GetStaticArticles;

export default Articles;