import ArticlesFilterContainer
    from "../../src/components/Articles/molecules/ArticleFilterContainer/ArticlesFilterContainer";
import {useQuery, useReactiveVar} from "@apollo/client";
import {currentArticleFilter, currentEndCursor} from "../../src/apolloClient/reactiveVariables/articles";
import ArticlesQueryContainer
    from "../../src/components/Articles/atoms/ArticlesPreviewContainer/ArticlesQueryContainer";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";

const Articles = () => {
    const cursor = useReactiveVar(currentEndCursor);
    const currentFilter = useReactiveVar(currentArticleFilter);
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
            <div className="container">
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

export default Articles;