import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import user from "./user";

const reducers = combineReducers({
  users: user,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;