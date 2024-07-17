import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import otpVerificationReducer from "./OtpSlice";
import createProjectReducer from "./CreateProjectSlice";

const store = configureStore({
  reducer: {
    signupReducer: signupReducer,
    otpVerificationReducer: otpVerificationReducer,
    createProjectReducer: createProjectReducer,
  },
});

export default store;
