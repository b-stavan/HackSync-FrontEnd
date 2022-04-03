import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import immutablePersistenceTransform from "../services/immutablePersistanceTransform";
import rootReducer from "./index";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware({});
const middleWare = [sagaMiddleware];

const persistConfig = {
  key: "@reduxsagaassignment",
  storage: AsyncStorage,
  transforms: [immutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Adding middleware to redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(...middleWare);

const enhancers = __DEV__
  ? composeEnhancers(middlewares)
  : compose(middlewares);

const store = createStore(persistedReducer, enhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// Enable Persistence
export default { store, persistor };
