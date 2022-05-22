import {gql} from "@apollo/client";

export const GET_ARTICLES = gql(`
query GET_ARTICLES {
  articles {
    id
    createdAt
    title
    description
  }
}`
);

export const GET_TEST_SEQUENCE = gql(`
query GET_TEST_SEQUENCE {
  sequences(where: {id: "cl25xh3we2e920dt8bgvi37oq"}) {
    id
    image(first: 250) {
      id
      url
    }
  }
}
`);

export const GET_MAIN_PAGE = gql(`
    query MainPage {
      mainPage(where: {id: "cl39uuqjwt8940ck3mfoqe5am"}) {
        hero {
          id
          description
          image {
            width
            height
            url
            id
          }
          link
          linkText
          name
        }
        herovideo {
          id
          url
        }
      }
    }
`);