import BlogsService from "../services/BlogsService";

export default class HomeViewModel {
  constructor() {
    this.blogsService = new BlogsService();
  }

  /**
   * Get blogs entries of the default site
   * @param {Function} setBlogs Callback to set the blogs
   * @returns
   */
  async getBlogPosts(setBlogs) {
    //TODO: Get siteId or put this as a constant with the siteKey
    const siteId = "20121";
    return this.blogsService.getBlogPosts(siteId).then((response) => {
      setBlogs(response.data.blogPostings.items);
    });
  }
}
