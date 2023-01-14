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
       headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
        }
        hubs {
            id
            seoDescription
            seoKeywords
            seoTitle
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
              adress
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
    headers {
        id
        logo {
          id
          url
        }
        productLinks {
          id
          text
          link
        }
        otherLinks {
          id
          text
          link
        }
    }
   footers {
        id
        description
        contacts {
          id
          tel
          email
          adress
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
    seoDescription
    seoKeywords
    seoTitle
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
     headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
        id
        description
        contacts {
          id
          tel
          email
          adress
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
          image {
            id
            width
            height
            url
          }
        }
      }
      mainPage(where: {id: "cl39uuqjwt8940ck3mfoqe5am"}) {
        seoDescription
        seoKeywords
        seoTitle
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
        mainPageVideo {
          id
          video {
            id
            url
          }
          linkText
          link
        }
        preTitle
        sliderDescription
        sliderTitle
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
     headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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

export const GET_PRODUCT_COMPARING = gql(
    `query MyQuery ($category: ProductCategories) {
        products(where: {category: $category}, first: 10) {
            id
            comparingImage {
                url
                id
                height
                width
            }
            parameters(first: 50) {
                id
                icon {
                    id
                    url
                }
                title
                value
            }
            info {
                id
                title
            }
            price {
                id
                currentPrice
            }
        }
    }`
)

export const GET_PRODUCT = gql(`
    query Product ($id: ID!) {
     headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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
        seoDescription
        seoKeywords
        seoTitle
        badge
        category
        id
        imageDescription
        visionCount
        creditInfo {
          id
          icon {
            id
            url
          }
          text
          linkText
          lInk
        }
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
        parameters(first: 50) {
          id
          icon {
            id
            url
          }
          title
          value
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

export const GET_SEQUENCE_PAGES_IDS = gql(`
    query getSequencePagesIds {
      sequencePages(first: 50) {
        id
      }
    }
`);

export const GET_SEQUENCE_PAGE = gql(`
  query GetSequencePage($id: ID!) {
     headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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
            seoDescription
            seoKeywords
            seoTitle
            mobileGif {
              id
              url
            }
            parametersSection {
              id
              title
              firstImage {
                id
                url
                width
                height
              }
              secondImage {
                id
                url
                width
                height
              }
              parameter(first: 50) {
                id
                title
                value
                unitOfMeasurement
              }
            }
            hubBlock {
              id
              preTitle
              title
              description
              buttonText
              buttonLink
              sliderImages(first: 500) {
                id
                url
              }
            }
            info {
              id
              title
              firstText
              firstImage {
                id
                width
                height
                url
              }
              secondText
              secondImage {
                id
                width
                height
                url
              }
              thirdText
              thirdImage {
                id
                width
                height
                url
              }
            }
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
            sequenceColors(first: 50) {
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
            sequenceColorsMobile(first: 50) {
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

export const GET_SEQUENCE_PAGES_LONG_IDS = gql(`
    query getSequencePagesIds {
      sequencePageLongs(first: 50) {
        id
      }
    }
`)

export const GET_SEQUENCE_PAGE_LONG = gql(`
    query GetSequencePageLong($id: ID!) {
        sequencePageLong(where: {id: $id}) {
            id
            seoDescription
            seoKeywords
            seoTitle
            category
            comparingSliderTitle
            mobileGif {
              id
              url
            }
            hubBlock {
              id
              preTitle
              title
              description
              buttonText
              buttonLink
              sliderImages(first: 500) {
                id
                url
              }
            }
            advantages(first: 50) {
              id
              title
              description
              image {
                id
                url
              }
            }
            advantageTitle
            advantageImageFirst {
              id
              width
              height
              url
            }
            advantageImageSecond {
              id
              width
              height
              url
            }
            laptopGifBlock {
              id
              title
              subTitle
              laptopBackground {
                id
                url
              }
              laptopGif {
                id
                url
              }
              advantages
              buttonText
              buttonLink
            }
            sequenceColorsMobile(first: 50) {
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
            sequenceColors(first: 50) {
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
            sequence {
              id
              sequence(first: 500) {
                id
                width
                height
                url
              }
            }
            presequenceHeader
            info {
              id
              title
              firstText
              firstImage {
                id
                width
                height
                url
              }
              secondText
              secondImage {
                id
                width
                height
                url
              }
              thirdText
              thirdImage {
                id
                width
                height
                url
              }
            }
            heroVideo {
              id
              title
              description
              buttonText
              video {
                id
                url
              }
            }
        }
       headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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
            seoDescription
            seoKeywords
            seoTitle
            description
            title
          }
        }
      }
      headers {
        id
        logo {
          id
          url
        }
        productLinks {
          id
          text
          link
        }
        otherLinks {
          id
          text
          link
        }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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
              adress
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

export const GET_HEADER = gql(`
    query GET_HEADER {
       headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
        }
    }
`);

export const GET_FAQS_PATHS = gql(`
    query GET_FAQS_PATHS($quantity: Int) {
      faqs (first: $quantity) {
        id
      }
   }
`);

export const GET_FAQ = gql(`
    query GET_FAQ($id: ID!) {
      faq (where: {id: $id}) {
        id
        title
        seoDescription
        seoKeywords
        seoTitle
        qAs {
          id
          question
          answer
        }
      }
     headers {
            id
            favicon {
               url
            }
            logo {
              id
              url
            }
            productLinks {
              id
              text
              link
            }
            otherLinks {
              id
              text
              link
            }
      }
      footers {
            id
            description
            contacts {
              id
              tel
              email
              adress
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
