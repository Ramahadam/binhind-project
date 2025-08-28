import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { binhindApi } from "./binhindApi";
import languageRedcer from "../features/languageSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [binhindApi.reducerPath]: binhindApi.reducer,
    language: languageRedcer,
  },
  // Adding the api middleware enables caching, invalidation, polling,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(binhindApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors

setupListeners(store.dispatch);
