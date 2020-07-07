import axios from "axios";

export const API_URL = "https://chatappbackend2298.herokuapp.com";

export default async (req, header, body) => {
  switch (req) {
    case "LOGIN":
      try {
        const response = await axios.post(`${API_URL}/auth/login`, body);
        return response;
      } catch (e) {
        return e.response.data;
      }
    case "SIGNUP":
      try {
        const response = await axios.post(`${API_URL}/auth/signup`, body);
        return response;
      } catch (e) {
        return e.response.data;
      }
    default:
      return null;
  }
};
