import { client, getUsersBySiteQuery } from "../api/Client";

export default class UsersService {
  /**
   * Get the users of the Liferay instance
   * @returns {Promise<ApolloQueryResult>} Promise with the results of the query
   */
    getUsers() {
    return client.query({
      query: getUsersBySiteQuery,
      variables: {
        siteKey: localStorage.getItem("groupId")
      }
    }).then(response => response.data.siteUserAccounts);
  }
}
