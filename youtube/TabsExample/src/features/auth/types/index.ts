import { ReactNode } from "react";

export type AuthState = {
    isAuthenticated: boolean;
    user : {
        token:string;
    };
    signIn :({email, password} : {email:string,password:string}) => void;
    signUp:({email, password} : {email:string,password:string}) => void;
    signOut: ()  => void;
    isLoading:false;
    restoreToken: ()  => void;
    

}

export type AuthProviderProps =  {
    children?: ReactNode
}