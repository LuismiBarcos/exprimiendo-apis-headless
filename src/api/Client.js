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
      authorization: token ? `Basic ${token}` : "",
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
};

export const getFilteredTripsQuery = gql`
  query trips($filter: String!) {
    trips(filter: $filter) {
      actions
      items {
        id
        actions
        name
        description
        startingDate
        image
      }
    }
  }
`;

export const getUsersBySiteQuery = gql`
query siteUserAccounts($siteKey: String!){
  siteUserAccounts(siteKey: $siteKey){
    items {
      biography
      name
      emailAddress
      image
    }
  }
}
`;

export const getUserAccountSitesQuery = gql`
  query myUserAccountSites {
    myUserAccountSites {
      items {
        name
        id
      }
    }
  }
`;

export const getTripsQuery = gql`
  query trips {
    trips {
      actions
      items {
        id
        actions
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
