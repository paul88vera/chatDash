import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:5500/api",
});
