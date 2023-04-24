import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface CountState {
  count: number;
  isDisabled: boolean;
}

const initialState: CountState = {
  count: 0,
  isDisabled: false,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    countAddOne: (
      state: Draft<typeof initialState>,
      action: PayloadAction<void>
    ) => {
      state.count = state.count + 1;
    },
    countClear: (
      state: Draft<typeof initialState>,
      action: PayloadAction<void>
    ) => {
      state.count = 0;
    },
    countStateToggle: (
      state: Draft<typeof initialState>,
      action: PayloadAction<void>
    ) => {
      state.isDisabled = !state.isDisabled;
    },
  },
});

export const { countAddOne, countClear, countStateToggle } = countSlice.actions;

export default countSlice.reducer;
