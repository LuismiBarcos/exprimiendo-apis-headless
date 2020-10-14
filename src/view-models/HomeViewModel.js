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
    this.tripService.getTrips().then((trips) => {
      setTravels(trips.items);
    });
  }

  async createTrip(name, description, startingDate) {
    return this.tripService.createTrip(
      name,
      description,
      new Date(startingDate)
    );
  }
}
