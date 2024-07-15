import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import otpVerificationReducer from "./OtpSlice";

const store = configureStore({
  reducer: {
    signupReducer: signupReducer,
    otpVerificationReducer: otpVerificationReducer,
  },
});

export default store;
