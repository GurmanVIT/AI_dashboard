import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import otpVerificationReducer from "./OtpSlice";
import createProjectReducer from "./CreateProjectSlice";
import getProjectListReducer from "./GetProjectListSlice";
import chatHistoryReducer from "./GetChatHistorySlice";
import askQuestionReducer from "./AskQuestionSlice";
import googleLoginReducer from "./GoogleSignInSlice";

const store = configureStore({
  reducer: {
    signupReducer: signupReducer,
    otpVerificationReducer: otpVerificationReducer,
    createProjectReducer: createProjectReducer,
    getProjectListReducer: getProjectListReducer,
    chatHistoryReducer: chatHistoryReducer,
    askQuestionReducer: askQuestionReducer,
    googleLoginReducer: googleLoginReducer,
  },
});

export default store;
