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

  /**
   * Create a trip with the data provided by the user
   * @param {String} name Name of the trip
   * @param {String} description Description of the trp
   * @param {Date} startingDate Date when the trip begin
   * @param {File} image Image file
   */
  async createTrip(name, description, startingDate, image) {
    return this.tripService.createTrip(
      name,
      description,
      !!startingDate ? new Date(startingDate) : new Date(),
      !!image ? await toBase64(image) : ""
    );
  }

  /**
   * Delete a trip given its id.
   * @param {Long} tripId Id of the trip to delete
   */
  async deleteTrip(tripId) {
    return this.tripService.deleteTrip(tripId);
  }
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
