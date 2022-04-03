import { createActions, createReducer } from "reduxsauce";
import Immutable, { ImmutableObject } from "seamless-immutable";
import { RootState } from ".";
import { InitialStateInterface, UpdatedDataInterface } from "./Types";
import { getData } from "../services/api";

/* ------------------ Types and Action Creators ------------------ */
const { Types, Creators } = createActions({
  fetchApi: ["data"],
  requestSuccess: ["data"],
  requestFailure: ["data"],
});

export const ActionTypes = Types;
export default Creators;

/* --------------- Initial State --------------- */
export const INITIAL_STATE = Immutable({
  list: [],
  error: false,
});

/* ---------- Selectors ---------- */
export const ApiSelectors = {
  getData: (state) => state.api.list,
  fetching: (state) => state.api.fetching,
};

/*----------- Reducers ---------- */
const addData = (state, { data }) => {
  console.log(data);
  return state.merge({
    list: data,
    fetching: false,
  });
};

const failData = (state, response) => {
  return state.merge({});
};

const request = (state, { data }) => {
  return state.merge({ fetching: true });
};

/* ---------- Hookup Reducers To Types ---------- */
export const apiReducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_API]: request,
  [Types.REQUEST_SUCCESS]: addData,
  [Types.REQUEST_FAILURE]: failData,
});
