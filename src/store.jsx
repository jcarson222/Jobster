import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
