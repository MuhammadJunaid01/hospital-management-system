import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface bgState {
//   BG: boolean;
// }
const initialState = {
  BG: true,
  selectLang: true,
};
export const toggleBGSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleBg: (state) => {
      console.log(state.BG);
      state.BG = !state.BG;
    },
    selectLang: (state) => {
      console.log("Callsed");
      state.selectLang = !state.selectLang;
    },
  },
});
export const { toggleBg, selectLang } = toggleBGSlice.actions;
export default toggleBGSlice.reducer;
