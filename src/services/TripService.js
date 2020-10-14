import { client, createTripQuery, getTripsQuery } from "../api/Client";

export default class TripService {
  /**
   * Get the trips registred in Liferay
   */
  getTrips() {
    return client.query({
      query: getTripsQuery,
    }).then((response) => response.data.trips);
  }

  /**
   * Create a trip in Liferay using a GraphQL query
   * @param {String} name Name of the trip
   * @param {String} description Description of the trip
   * @param {Date} startingDate Date when the trip begin
   * @return {Promise<FetchResult<T>>}
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
