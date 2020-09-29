export default {
    doApiCall,
    createHeadersBasicAuthorization,
    createHeadersWithoutAuthorization,
}

/**
 * Do the API call to a especific url with specific headers and method
 * @param {String} method Method of the request (GET, POST, PUT...)
 * @param {Headers} headers Headers of the request
 * @param  {...any} urlStrings Url string in order to build the url
 * @returns {Promise<Response>} Response of the API call
 */
async function doApiCall(method, headers, url) {
    try {
        return await fetch(url, {
            method,
            headers,
            mode: 'cors'
        });
    }
    catch (err) {
        console.log("Request failed ", err);
    }
}

/**
 * Create a headers without authentication header and content-type as application/json
 * @returns {Headers} Headers for the request
 */
function createHeadersWithoutAuthorization() {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return headers;
}

/**
 * Create a header with the basic token authentication and a content-type as application/json
 * @param {String} basicAuthToken Token in base64 to use in Basic authentication
 * @returns {Headers} Headers for the request
 */
function createHeadersBasicAuthorization(basicAuthToken) {
    const headers = createHeadersWithoutAuthorization();
    headers.set('Authorization', 'Basic ' + basicAuthToken);
    return headers;
}
