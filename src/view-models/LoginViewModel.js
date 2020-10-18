import LoginService from "../services/LoginService";

export default class LoginViewModel {
  constructor() {
    this.loginService = new LoginService();
  }
  async login(username, password) {
    return this.loginService
      .login(username, password)
      .then((loginSuccess) => loginSuccess)
      .catch((loginSuccess) => loginSuccess);
  }

  logout() {
    this.loginService.logout();
  }

  isLogin() {
    return this.loginService.isLogin();
  }
}
