import { configureStore } from "@reduxjs/toolkit";
import { restarauntSlice } from "./entities/restaraunt";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";

export const store = configureStore({
    reducer: {
        [restarauntSlice.name]: restarauntSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer
    },

});
