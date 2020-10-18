import LoginService from "../services/LoginService";

export default class LoginViewModel {
  constructor() {
    this.loginService = new LoginService();
  }
  login(username, password) {
    return this.loginService.login(username, password);
  }

  logout() {
    this.loginService.logout();
  }

  isLogin() {
    return this.loginService.isLogin();
  }
}
