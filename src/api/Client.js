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
        image {
          contentUrl
        }
      }
    }
  }
`;
