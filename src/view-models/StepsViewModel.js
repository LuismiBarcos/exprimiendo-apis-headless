import StructuredContentService from "../services/StructuredContentService";

export default class StepsViewModel {
  constructor() {
    this.structuredContentService = new StructuredContentService();
  }

  /**
   * Get blogs entries of the default site
   * @param {Function} setSteps Callback to set the blogs
   * @param {Long} travelId Id of the travel
   */
  async getTravelSteps(setSteps, travelId) {
    this.structuredContentService
      .getStructuredContentById(travelId)
      .then((travel) => {
        setSteps(
          travel.contentFields
            .filter((step) => step.label === "Web Content")
            .map(
              (step) => step.contentFieldValue.structuredContentLink.graphQLNode
            )
            .map((stepContentField) =>
              stepMapper(stepContentField, this.structuredContentService)
            )
        );
      });

    function stepMapper(stepContentField, service) {
      let step = {};
      step.image = service.getWebContentData(
        stepContentField,
        "Image"
      ).image.contentUrl;
      step.city = service.getWebContentData(stepContentField, "City").data;
      step.description = service.getWebContentData(
        stepContentField,
        "Description"
      ).data;

      return step;
    }
  }
}
