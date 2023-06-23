import { configureStore } from "@reduxjs/toolkit";
import themeProviderReducer from "components/ThemeProvider/themeProviderSlice";

export const store = configureStore({
  reducer: {
    themeProvider: themeProviderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
