import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name:"singUp",
    initialState:{
        name:"",
        email:"",
        password:"",
        passwordAgain:""
    },
    reducers:{
        changeName : (state , action) => {
           state.name = action.payload
        },
        
        changeEmail : (state , action) => {
            state.email = action.payload
         },
        
         changePassword : (state , action) => {
        state.password = action.payload
        },

        changePasswordAgain : (state , action) => {
        state.passwordAgain = action.payload
        },

    }
})

export const { changeEmail, changeName , changePassword , changePasswordAgain } =signUpSlice.actions

export default signUpSlice.reducer