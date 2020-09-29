import BlogsService from '../services/BlogsService';

export default {
    getBlogPosts
}

/**
 * Get blogs entries of the default site
 * @param {Function} setBlogs Callback to set the blogs
 */
async function getBlogPosts(setBlogs) {
    //TODO: Get siteId or put this as a constant with the siteKey
    const siteId = "20121";
    return BlogsService.getBlogPosts(siteId).then(blogs => {
        setBlogs(blogs.items)
    });
}