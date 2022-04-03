import { create } from "apisauce";
import ApiConstant from "../constants/ApiConstant";

const api = create({
  baseURL: ApiConstant.baseUrl,
});

// const getData = (endPoint) => api.post(endPoint);
const getData = (endpoint) => api.get(endpoint);
export { getData };
export default api;
