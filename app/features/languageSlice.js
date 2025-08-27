import { createSlice } from "@reduxjs/toolkit";

import i18n from "../i18next";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: i18n.language || "eng" },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload); // keep i18n in sync
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
