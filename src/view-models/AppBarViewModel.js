import LoginService from "../services/LoginService";

export default class AppBarViewModel {
  constructor() {
    this.loginService = new LoginService();
  }

  logout() {
    this.loginService.logout();
  }
}
