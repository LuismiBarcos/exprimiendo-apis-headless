import * as apiConstans from "../api/ApiConstans";
import restConnections from "../api/RestConnections";

const LOCAL_STORAGE_ITEMS = {
  token: "token",
  refreshToken: "refreshtoken",
};

export default class LoginService {
  async login(username, password) {
    return new Promise((resolve, reject) => {
      requestOauthToken(username, password).then((data) => {
        if (data.access_token && data.refresh_token) {
          localStorage.setItem(LOCAL_STORAGE_ITEMS.token, data.access_token);
          localStorage.setItem(
            LOCAL_STORAGE_ITEMS.refreshToken,
            data.refresh_token
          );
          window.location.replace(`/`);
          resolve(true);
        }
        reject(false);
      });
    });
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_ITEMS.token);
    localStorage.removeItem(LOCAL_STORAGE_ITEMS.refreshToken);
    window.location.replace(`/`);
  }

  isLogin() {
    console.log("isLogin");
    console.log(!!localStorage.getItem(LOCAL_STORAGE_ITEMS.token));
    return !!localStorage.getItem(LOCAL_STORAGE_ITEMS.token);
  }
}

const requestOauthToken = async (username, password) =>
  restConnections
    .doApiCall(
      apiConstans.METHODS.POST,
      restConnections.createHeadersOauthAuthorization(),
      apiConstans.createAuthTokenURL(username, password, "password")
    )
    .then((response) => response.json())
    .catch((err) => {
      console.log("Big problem");
      console.err(err);
    });
