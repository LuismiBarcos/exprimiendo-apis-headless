import * as apiConstans from "../api/ApiConstans";
import restConnections from "../api/RestConnections";
import AuthorizationService from "../api/AuthorizationService";
import { client, getUserAccountSitesQuery } from "../api/Client";

export default class LoginService {
  /**
   * Login in the app. Return true if login is correct or false in other case
   * @param {String} username
   * @param {String} password
   */
  async login(username, password) {
    const basicAuthToken = AuthorizationService.createBasicAuthorizationToken(
      username,
      password
    );
    return test(basicAuthToken);
    // return new Promise((resolve, reject) => {
    //   checkLoginCredentials(basicAuthToken).then((status) => {
    //     if (status === 200) {
    //       localStorage.setItem("token", basicAuthToken);
    //       window.location.replace(`/`);
    //       resolve(true);
    //     }
    //     reject(false);
    //   });
    // });
  }

  /**
   * Logout of the application
   */
  logout() {
    localStorage.removeItem("token");
    window.location.replace(`/`);
  }

  /**
   * Check if the user is logged
   */
  isLogin() {
    return !!localStorage.getItem("token");
  }
}

const test = async (basicAuthToken) => {
  localStorage.setItem("token", basicAuthToken);
  return client
    .query({
      query: getUserAccountSitesQuery,
    })
    .then((response) => {
      const groupId = response.data.myUserAccountSites.items[0].id;
      localStorage.setItem("groupId", groupId);
      window.location.replace(`/`);
      return true;
    })
    .catch(() => {
      localStorage.removeItem("token");
      return false;
    });
};

const checkLoginCredentials = async (basicAuthToken) => {
  const headers = restConnections.createHeadersBasicAuthorization(
    basicAuthToken
  );
  return await restConnections
    .doApiCall(apiConstans.METHODS.GET, headers, apiConstans.BASE_URL + "/api")
    .then((response) => response.status);
};
