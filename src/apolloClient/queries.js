import {gql} from "@apollo/client";

export const GET_ARTICLES = gql(`
query GET_ARTICLES {
  articles (orderBy: publishedAt_DESC) {
    id
    title
    description
    presentationImage {
      id
      url
      width
      height
    }
    visionCount
  }
}`
);

export const GET_HUB = gql(`
    query GET_HUB {
        hubs {
            id
            aboutUsLeftColumn
            aboutUsRightColumn
            aboutUsTitle
            createdAt
            id
            mainImage {
              id
              width
              height
              url
            }
            mao {
              latitude
              longitude
            }
            sliderImages(first: 500) {
              id
              width
              height
              url
            }
            title
            contactInfo {
              id
              tel
              email
              adress
            }
            visitHours {
              id
              sunday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              monday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              tuesday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              wednesday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              thursday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              friday {
                id
                start
                startAmPm
                end
                endAmPm
              }
              saturday {
                id
                start
                startAmPm
                end
                endAmPm
              }
            }
        }
        footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
    }
`)

export const GET_ARTICLES_PAGINATED = gql(`
query GET_ARTICLES ($endCursor: String) {
  articlesConnection(first: 5, orderBy: publishedAt_DESC, after: $endCursor) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        type
        title
        description
        presentationImage {
          height
          id
          url
          width
        }
        id
        visionCount
      }
    }
  }
}`
);

export const GET_SLIDER_ARTICLES = gql(`
query GET_SLIDER_ARTICLES {
  articles (orderBy: publishedAt_DESC, where: {type_not: Text}) {
    id
    title
    description
    presentationImage {
      id
      url
      width
      height
    }
    visionCount
  }
}`
);

export const GET_ARTICLE = gql(`
query GET_ARTICLE ($id: ID!) {
   footers {
        id
        description
        contacts {
          id
          tel
          email
        }
        logo {
          id
          url
        }
        links {
          id
          title
          links {
            id
            text
            link
          }
        }
        socialLinks {
          id
          icon {
            id
            width
            height
            url
          }
          link
        }
        advantages {
          id
          title
          description
          link
          image {
            id
            width
            height
            url
          }
        }
    }
  article (where: {id: $id}) {
    id
    title
    description
    type
    blocks {
      id
      title
      description
      image {
        url
        width
        height
        id
      }
    }
    visionCount
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
    footers {
        id
        description
        contacts {
          id
          tel
          email
        }
        logo {
          id
          url
        }
        links {
          id
          title
          links {
            id
            text
            link
          }
        }
        socialLinks {
          id
          icon {
            id
            width
            height
            url
          }
          link
        }
        advantages {
          id
          title
          description
          link
          image {
            id
            width
            height
            url
          }
        }
      }
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
    query Products ($quantity: Int) {
      products (orderBy: publishedAt_DESC, first: $quantity) {
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
      footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
    }
`);

export const GET_PRODUCT = gql(`
    query Product ($id: ID!) {
    footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
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
        presentationImage {
          id
          width
          height
          url
        }
        checkoutThumbnail {
          id
          url
          width
          height
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
          isEnableInsideColor
          svgImage {
            id
            width
            height
            size
            url
          }
        }
        internalColor {
          id
          title
          color {
            hex
          }
          price
        }
        placeholder {
          id
          url
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

export const GET_SEQUENCE_PAGE = gql(`
  query GetSequencePage($id: ID!) {
      footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
        sequencePage(where: {id: $id}) {
            id
            presentationHero {
              id
              title
              linkText
              image {
                id
                width
                height
                url
              }
              bottomHeader
            }
            sequence {
              id
              sequence(first: 500) {
                id
                width
                height
                url
              }
            }
            tabletSequence {
              id
              sequence(first: 500) {
                id
                width
                height
                url
              }
            }
            sequenceColors {
              id
              title
              description
              image {
                id
                width
                height
                url
              }
              color {
                hex
              }
            }
            tabletSequenceColors {
              id
              title
              description
              image {
                id
                width
                height
                url
              }
              color {
                hex
              }
            }
      }
  } 
`);

export const GET_GALLERY = gql(`
    query GET_GALLERY {
      galleryContainersConnection {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            gallery {
              id
              galleryImage(first: 500) {
                height
                id
                width
                url
              }
              category
            }
            description
            title
          }
        }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
    }
`);

export const GET_FOOTER = gql(`
    query GET_FOOTER {
        footers {
            id
            description
            contacts {
              id
              tel
              email
            }
            logo {
              id
              url
            }
            links {
              id
              title
              links {
                id
                text
                link
              }
            }
            socialLinks {
              id
              icon {
                id
                width
                height
                url
              }
              link
            }
            advantages {
              id
              title
              description
              link
              image {
                id
                width
                height
                url
              }
            }
        }
    }
`)