import { Children, createContext, useContext , ReactNode} from "react";
import { AuthState } from "../types";


export const initialState: AuthState = {
    isAuthenticated: false,
    signIn :() => {},
    signOut :() => {},
    signUp : () => {},
    restoreToken : () => {},
    user : null,
    isLoading: false,
};


export const AuthContext = createContext<AuthState>(initialState);

// use function for context globla
export const useAuth = () => useContext(AuthContext);
