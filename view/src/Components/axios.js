import axios from "axios"

const instance = axios.create({
  baseURL: "localhost:3003/api",
});
export default instance