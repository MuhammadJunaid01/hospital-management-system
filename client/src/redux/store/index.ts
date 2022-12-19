import { configureStore } from "@reduxjs/toolkit";

import toggleBGSlice from "../reduicers/toggleBG";

export const store = configureStore({
  reducer: {
    toggleBG: toggleBGSlice,
  },
});
export type Tstore = ReturnType<typeof store.getState>;
