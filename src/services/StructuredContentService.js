import {
  client,
  getStructuredContentsByContentStructureQuery,
} from "../api/Client";

export default class StructuredContentService {
  /**
   * Get structured contents depending on its structured key
   * @param {Promise<import("@apollo/client").ApolloQueryResult>} siteKey key of a specific site
   */
  getStructuredContentsByContentStructure(siteKey) {
    return client
      .query({
        query: getStructuredContentsByContentStructureQuery,
        variables: {
          siteKey: siteKey,
        },
      })
      .then((response) => response.data.contentStructures.items[0]);
  }

  /**
   * Map a structured content with the information of a travel to an more friendly travel object
   * @param {Object} travelStructuredContent Structured content that contains the information of a travel
   * @returns {Object} A travel
   */
  travelsMapper(travelStructuredContent) {
    let travel = {};
    travel.image = getData("Image").image.contentUrl;
    travel.name = getData("Name").data;
    travel.date = getData("Date").data;
    travel.description = getData("Description").data;
    debugger;
    return travel;

    function getData(type) {
      return travelStructuredContent.contentFields.filter(
        (item) => item.label === type
      )[0].contentFieldValue;
    }
  }
}
