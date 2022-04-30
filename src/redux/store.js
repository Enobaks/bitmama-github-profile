import { createStore, applyMiddleware } from "redux"; //use during development and remove it during build
import logger from "redux-logger"; //use during development and remove it during build
import thunk from "redux-thunk";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [thunk, logger]; //use looger object during development and remove it during build

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //use during development and remove it during build

export const persistor = persistStore(store);
