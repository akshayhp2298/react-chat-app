import request from "./Utils/axiosReq";

class Auth {
  constructor() {
    this.isAuthenticated = localStorage.getItem("token") ? true : false;
  }
  async logIn({ email, password }) {
    const data = await request("LOGIN", {}, { email, password });
    if (!data.error) {
      localStorage.setItem("token", data);
      this.isAuthenticated = true;
    }
    return data;
  }
  logOut() {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
  }
  isAuthenticatedCheck() {
    return this.isAuthenticated;
  }
}
export default new Auth();
