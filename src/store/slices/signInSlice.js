import { createSlice } from "@reduxjs/toolkit";


export const signInSlice = createSlice({
    name:"signInSlice",
    initialState : {
        email:"",
        password:""
    },
    reducers : {
        changeEmail:(state ,action) => {
            state.email = action.payload
        },

        changePassword : (state , action) => {
            state.password = action.payload
        }
    }
})

export const { changeEmail , changePassword } = signInSlice.actions

export default signInSlice.reducer