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

export const GET_PRODUCTS = gql(`
    query Products {
      products {
        id
        badge
        category
        id
        visionCount
        shortDescription
        presentationImage {
          id
          width
          height
          url
        }
        info {
          id
          title
        }
        price {
          id
          currentPrice
          previousPrice
        }
      }
    }
`);

export const GET_PRODUCT = gql(`
    query Product ($id: ID!) {
      product(where: {id: $id}) {
        id
        badge
        category
        id
        visionCount
        image {
          id
          width
          height
          url
        }
        info {
          id
          title
          description
        }
        price {
          id
          currentPrice
          previousPrice
        }
        parameters {
          id
          area
          diameter
          maximumHeight
          weight
        }
        colors {
          id
          price
          color {
            hex
          }
          image {
            id
            width
            height
            url
          }
          title
        }
        extraFeatures {
          id
          title
          price
          svgImage {
            id
            width
            height
            size
            url
          }
        }
      imageGallery {
          id
          galleryImage(first: 500) {
            id
            width
            height
            url
          }
      }
    }
  }
`);