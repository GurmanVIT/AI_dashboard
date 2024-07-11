import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";

const store = configureStore({
    reducer: {
        signupReducer: signupReducer,
    },
});

export default store;
