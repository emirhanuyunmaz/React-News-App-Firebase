import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api/newsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import signUpSlice from "./slices/signUpSlice";
import signInSlice from "./slices/signInSlice";
import { activeUser } from "./slices/activeUserSlice";


export const store = configureStore({
    reducer:{
        signUp : signUpSlice,

        signIn: signInSlice,

        activeUser : activeUser,

        [newsApi.reducerPath] : newsApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware)
})

setupListeners(store.dispatch)