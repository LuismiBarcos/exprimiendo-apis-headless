import {
  client,
  createTripStageQuery,
  deleteTripStageQuery,
  getTripStagesQuery,
} from "../api/Client";

export default class StructuredContentService {
  /**
   * Get the stages of a concrete trip
   * @param {Long} tripId ID of the trip
   */
  async getTripStages(tripId) {
    return client
      .query({
        query: getTripStagesQuery,
        variables: {
          tripId,
        },
      })
      .then((response) => response.data.tripStages);
  }

  /**
   * Create a stage in a trip
   * @param {Long} tripId Id of the trip
   * @param {String} name Name of the stage
   * @param {String} description Description of the stage
   * @param {String} place Name of the stage
   * @param {String} image Base64 of an descriptive image
   */
  async createTripStage(tripId, name, description, place, image) {
    return client.mutate({
      mutation: createTripStageQuery,
      variables: {
        tripId,
        name,
        description,
        place,
        image,
      },
    });
  }

  /**
   * Delete a stage of a trip
   * @param {Long} stageId
   */
  async deleteTripStage(stageId) {
    return client.mutate({
      mutation: deleteTripStageQuery,
      variables: {
        stageId,
      },
    });
  }

  /**
   * Clear apollo cache
   */
  clearCache() {
    return client.clearStore();
  }
}
