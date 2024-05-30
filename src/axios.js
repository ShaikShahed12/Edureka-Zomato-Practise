import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8900/api",
  timeout: 10000, // optional timeout
});

export default instance;
