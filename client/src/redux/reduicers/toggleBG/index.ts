import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface bgState {
  BG: boolean;
}
const initialState: bgState = {
  BG: true,
};
export const toggleBGSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleBg: (state: bgState, action: PayloadAction<boolean>) => {
      state.BG = action.payload;
    },
  },
});
export const { toggleBg } = toggleBGSlice.actions;
export default toggleBGSlice.reducer;
