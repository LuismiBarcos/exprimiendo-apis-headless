import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GRAPHQL_URI } from "./ApiConstans";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getFilteredTrips = (filter) => {
  filter = `name eq '${filter}'`;
  return client.query({
    query: getFilteredTripsQuery,
    variables: {
      filter,
    },
  });
}

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

export const getFilteredTripsQuery = gql`
  query trips($filter: String!) {
    trips(filter: $filter) {
      items {
        id
        name
        description
        startingDate
        image
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
        biography
      }
    }
  }
`;

export const getStructuredContentsByContentStructureQuery = gql`
  query contentStructures($siteKey: String!) {
    contentStructures(siteKey: $siteKey, filter: "name eq 'Travel'") {
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

export const getTripsQuery = gql`
  query trips {
    trips {
      items {
        id
        name
        description
        startingDate
        image
      }
    }
  }
`;

export const createTripQuery = gql`
  mutation createTrip(
    $name: String!
    $description: String!
    $startingDate: Date!
    $image: String!
  ) {
    createTrip(
      trip: {
        name: $name
        description: $description
        startingDate: $startingDate
        image: $image
      }
    ) {
      name
      description
    }
  }
`;

export const deleteTripQuery = gql`
  mutation deleteTrip($tripId: Long!) {
    deleteTrip(tripId: $tripId)
  }
`;

export const getTripStagesQuery = gql`
  query tripStages($tripId: Long!) {
    tripStages(tripId: $tripId) {
      items {
        id
        name
        place
        description
        image
      }
    }
  }
`;

export const createTripStageQuery = gql`
  mutation createTripStage(
    $tripId: Long!
    $name: String!
    $description: String!
    $place: String!
    $image: String!
  ) {
    createTripStage(
      tripId: $tripId
      stage: {
        name: $name
        description: $description
        place: $place
        image: $image
      }
    ) {
      id
      name
    }
  }
`;

export const deleteTripStageQuery = gql`
  mutation deleteStage($stageId: Long!) {
    deleteStage(stageId: $stageId)
  }
`;
