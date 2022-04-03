import { create } from "apisauce";
import ApiConstant from "../constants/ApiConstant";

const api = create({
  baseURL: ApiConstant.baseUrl,
});

const getData = (endPoint) => api.get(endPoint);
export { getData };
