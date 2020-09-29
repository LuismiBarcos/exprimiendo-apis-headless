import BlogsService from "../services/BlogsService";
import UsersService from "../services/UsersService";

export default class HomeViewModel {
  constructor() {
    this.blogsService = new BlogsService();
    this.usersService = new UsersService();
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
}
