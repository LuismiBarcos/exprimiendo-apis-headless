import Connections from "../api/Connections";
import { METHODS, BLOGS } from "../api/ApiConstans";
import  AuthorizationService from '../api/AuthorizationService';

export default {
    getBlogPosts
}

/**
 * Get the blog posts of a concrete site
 * @param {String} siteId Id of the site where are the blogs
 * @param {Number} page Page number to recover
 * @param {Number} pageSize Number of items to recover
 * @returns {Promise<Any>} Returns a promise with the json of the blogs posts
 */
async function getBlogPosts(siteId, page = 1, pageSize = 20) {
    // const headers = Connections.createHeadersWithoutAuthorization();
    const headers = Connections.createHeadersBasicAuthorization(
        AuthorizationService.createBasicAuthorizationToken("test@liferay.com", "test"));
    const response = await Connections.doApiCall(METHODS.GET, headers, BLOGS.BASE_URL + siteId + BLOGS.BLOG_POSTINGS);
    return response.json();
}