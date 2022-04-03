import { all } from "redux-saga/effects";
import APICalls from "./apiCall";

export default function* rootSaga() {
  yield all([...APICalls]);
}
