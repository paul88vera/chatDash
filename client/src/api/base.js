import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://127.0.0.1:5500/api",
});
