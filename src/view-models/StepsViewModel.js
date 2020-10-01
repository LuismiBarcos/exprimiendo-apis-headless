import BlogsService from "../services/BlogsService";

export default class StepsViewModel {
  constructor() {
    this.blogsService = new BlogsService();
  }

  /**
   * Get blogs entries of the default site
   * @param {Function} setBlogs Callback to set the blogs
   */
  async getTravelSteps(setBlogs) {
    //TODO: Get siteId or put this as a constant with the siteKey
    const siteId = "20121";
    this.blogsService.getBlogPosts(siteId).then((response) => {
      setBlogs(response.data.blogPostings.items);
    });
  }
}
