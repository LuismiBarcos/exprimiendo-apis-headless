import { client, createTripQuery } from "../api/Client";

export default class TripService {

  /**
   * Create a trip in Liferay using a GraphQL query
   * @param {String} name Name of the trip
   * @param {String} description Description of the trip
   * @param {Date} startingDate Date when the trip begin
   * @return {Promise<import("@apollo/client").ApolloQueryResult>} Promise with the results
   */
  createTrip(name, description, startingDate) {
    return client.mutate({
      mutation: createTripQuery,
      variables: {
        name,
        description,
        startingDate,
      },
    });
  }
}
