import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const reducers = combineReducers({
  search: searchSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
