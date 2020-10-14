import BlogsService from "../services/BlogsService";
import UsersService from "../services/UsersService";
import StructuredContentService from "../services/StructuredContentService";
import TripService from "../services/TripService";

export default class HomeViewModel {
  constructor() {
    this.blogsService = new BlogsService();
    this.usersService = new UsersService();
    this.tripService = new TripService();
    this.structuredContentService = new StructuredContentService();
  }

  /**
   * Get blogs entries of the default site
   * @param {Function} setBlogs Callback to set the blogs
   */
  async getBlogPosts(setBlogs) {
    //TODO: Get siteId or put this as a constant with the siteKey
    const siteId = "20121";
    this.blogsService.getBlogPosts(siteId).then((response) => {
      setBlogs(response.data.blogPostings.items);
    });
  }

  /**
   * Set the users of the Liferay instance
   * @param {Function} setUsers Callbat to set the users
   */
  async getUsers(setUsers) {
    this.usersService.getUsers().then((response) => {
      setUsers(response.data.userAccounts.items);
    });
  }

  /**
   * Set the travels of the Liferay Travels app
   * @param {Function} setTravels Callback to set the travels
   */
  async getTravels(setTravels) {
    //TODO: Get siteId or put this as a constant with the siteKey
    const siteId = "20121";
    this.structuredContentService
      .getStructuredContentsByContentStructure(siteId)
      .then((response) => {
        setTravels(
          response.structuredContents.items.map((structuredContent) =>
            travelsMapper(structuredContent)
          )
        );
      })
      .catch(() => {
        console.error("Something went wrong!");
      });

    function travelsMapper(travelStructuredContent) {
      let travel = {};
      travel.id = travelStructuredContent.id;
      travel.image = getData("Image").image.contentUrl;
      travel.name = getData("Name").data;
      travel.date = new Date(getData("Date").data).toDateString();
      travel.description = getData("Description").data;

      return travel;

      function getData(type) {
        return travelStructuredContent.contentFields.filter(
          (item) => item.label === type
        )[0].contentFieldValue;
      }
    }
  }

  async createTrip(name, description, startingDate) {
    return this.tripService.createTrip(
      name,
      description,
      new Date(startingDate)
    );
  }
}
