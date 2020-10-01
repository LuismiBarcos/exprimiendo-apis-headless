import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GRAPHQL_URI } from "./ApiConstans";

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: { Authorization: "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0" },
});

export const getBlogsQuery = gql`
  query blogPostings($siteKey: String!) {
    blogPostings(siteKey: $siteKey) {
      items {
        headline
        alternativeHeadline
        articleBody
        image {
          contentUrl
        }
      }
    }
  }
`;

export const getUsersQuery = gql`
  query userAccounts {
    userAccounts {
      items {
        name
        emailAddress
        image
        jobTitle
      }
    }
  }
`;

export const getStructuredContentsByContentStructureQuery = gql`
  query contentStructures($siteKey: String!) {
    contentStructures(siteKey: $siteKey, filter: "id eq '42107'") {
      items {
        structuredContents {
          items {
            id
            title
            contentFields {
              label
              contentFieldValue {
                data
                image {
                  contentUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getStructuredContentByIdQuery = gql`
  query structuredContent($structuredContentId: Long!) {
    structuredContent(structuredContentId: $structuredContentId) {
      title
      contentFields {
        label
        contentFieldValue {
          structuredContentLink {
            id
            title
            graphQLNode {
              ... on StructuredContent {
                contentFields {
                  label
                  contentFieldValue {
                    data
                    image {
                      contentUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
