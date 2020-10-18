const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const GRAPHQL_URI = "http://localhost:8080/o/graphql";
export const BASE_URL = "http://localhost:8080/o";
export const METHODS = {
  GET: "GET",
  POST: "POST",
};

export const AUTH_URL = "/oauth2/token";
export const createAuthTokenURL = (username, password, grantType) => {
  return `${BASE_URL}${AUTH_URL}?
grant_type=${grantType}&
client_id=${CLIENT_ID}&
client_secret=${CLIENT_SECRET}&
username=${username}&
password=${password}`;
};
