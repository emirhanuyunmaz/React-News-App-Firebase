import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";


export const activeUser = createSlice({
    name:"activeUser",
    initialState:{
        userEmail:""
    },
    reducers:{
        changeUser : (state , action) => {
            state.userEmail = action.payload
        },
        logoutUser : (state) => {
            const auth = getAuth()
            auth.signOut()
            state.userEmail = null
        }

    }
})

export const { changeUser } = activeUser.actions

export default activeUser.reducer 