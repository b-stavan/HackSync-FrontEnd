import { takeLatest } from "redux-saga/effects";
import Actions, { ActionTypes } from "../redux/apiRedux";
import { getData } from "../services/api";
import { apiCall } from "./handleSagaResponse";

export function* getAllData(action) {
  yield* apiCall(
    getData,
    action.data,
    Actions.requestSuccess,
    Actions.requestFailure
  );
}

export default [takeLatest(ActionTypes.FETCH_API, getAllData)];
