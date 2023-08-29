import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isAuthenticated: boolean;
    user : {
        token:string;
    };
    isLoading:false;
};


const initialState : AuthState = {
    isAuthenticated:false,
    user: null,
    isLoading: false
}

export const signIn = ( state = initialState) => {
   return {
    ...initialState,
    isAuthenticated: true
   };
}

export const signOut =(state , action) => {
  
}



export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        signIn,
        signOut,

    }
});

export default authSlice.reducer;


