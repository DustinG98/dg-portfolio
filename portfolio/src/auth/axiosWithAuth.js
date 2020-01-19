import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("auth-token");

  return axios.create({
    baseURL: "",
    headers: {
      "auth-token": token
    }
  });
};