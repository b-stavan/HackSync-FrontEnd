import { call, put } from "redux-saga/effects";

export function* apiHandler(response, onSuccess, onFailure) {
  console.log(response, "<== After API CALL RESPONSE");
  if (response?.ok) {
    yield put(onSuccess(response?.data));
  } else {
    const error = yield call(response);
    yield put(onFailure(error));
  }
}

export function* apiCall(apiFn, action, onSuccess, onFailure) {
  const response = yield call(apiFn, action);
  yield* apiHandler(response, onSuccess, onFailure);
}
