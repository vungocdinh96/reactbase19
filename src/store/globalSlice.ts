import CONSTANTS from "@/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GlobalSlice {
  selectedTheme: string;
  currentPath: string;
}

const initialState = {
  selectedTheme: CONSTANTS.DEFAULT_THEME,
  currentPath: "/",
} satisfies GlobalSlice as GlobalSlice;

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateSelectedTheme: (state, action: PayloadAction<string>) => {
      state.selectedTheme = action.payload;
    },

    updateCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
  },
});

export const { updateSelectedTheme, updateCurrentPath } = globalSlice.actions;

export default globalSlice.reducer;
