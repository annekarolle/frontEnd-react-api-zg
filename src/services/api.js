import axios from "axios";

const api = axios.create({
  baseURL: "url",
  timeout: 5000, // 5 segundos
});

export default api;