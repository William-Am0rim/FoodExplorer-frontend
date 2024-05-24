import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-backend-v0dv.onrender.com'
});
