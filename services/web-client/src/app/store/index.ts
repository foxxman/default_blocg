import { thunk } from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import modalsReducer from "./reducers/modalsReducers";
import userReducer from "./reducers/userReducer";

import websocketMiddleware from "../middlewares/websocketMiddleware";

const rootReducer = combineReducers({
  modals: modalsReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(websocketMiddleware, thunk),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function createStore() {
  return store;
}