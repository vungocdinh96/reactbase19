import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface GlobalSlice {
  currentPath: string;
}

const initialState = {
  currentPath: '/',
} satisfies GlobalSlice as GlobalSlice;

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
  },
});

export const { updateCurrentPath } = globalSlice.actions;

export default globalSlice.reducer;
