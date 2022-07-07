import {gql} from "@apollo/client";

export const INCREASE_PRODUCT_COUNT = gql(`
    mutation updateProduct($count: Int, $id: ID!) {
      updateProduct(data: {visionCount: $count}, where: {id: $id}) {
        id 
        visionCount
      }
       publishProduct(where: {id: $id}) {
        id
      }
    }
`);

export const INCREASE_ARTICLE_COUNT = gql(`
   mutation updateArticle($count: Int, $id: ID!) {
      updateArticle(data: {visionCount: $count}, where: {id: $id}) {
        id
      }
      publishArticle(where: {id: $id}) {
        id
      }
   }
`)