import { configureStore } from "@reduxjs/toolkit";

import api from "./rootApi";

import { playerReducer, matchReducer } from "./slices";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    playerSlice: playerReducer,
    matchSlice: matchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
