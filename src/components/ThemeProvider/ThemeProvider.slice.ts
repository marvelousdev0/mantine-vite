import { ColorScheme } from "@mantine/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const initialState: { colorScheme: ColorScheme } = {
  colorScheme: "light",
};

const themeProviderSlice = createSlice({
  name: "themeProvider",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setColorScheme } = themeProviderSlice.actions;

export const colorScheme = (state: RootState) =>
  state.themeProvider.colorScheme;

export default themeProviderSlice.reducer;
