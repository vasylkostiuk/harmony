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