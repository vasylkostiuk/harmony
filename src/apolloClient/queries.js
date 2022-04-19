import {gql} from "@apollo/client";

export const GET_PAGES = gql(`
query GET_PAGES {
  pages {
    id
    slug
    video {
        id
        url
    }
  }
}`
);

export const GET_TEST_SEQUENCE = gql(`
query GET_TEST_SEQUENCE {
  sequences(where: {id: "cl25xh3we2e920dt8bgvi37oq"}) {
    id
    image {
      id
      url
    }
  }
}
`);