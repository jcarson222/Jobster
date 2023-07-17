import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
