import {makeVar} from "@apollo/client";

export const currentArticleFilter = makeVar('Recent news');

export const currentEndCursor = makeVar(null);

export const currentArticles = makeVar([]);