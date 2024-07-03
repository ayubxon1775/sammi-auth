import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useMemo, ReactNode, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export interface AuthContextState {
    user: User;
    isLoading: boolean; 
}
export const authContext = createContext<AuthContextState>({
    isLoading: false,
    user: {} as User,
});
export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(true)
    const { user, isLoading, setUser, setLoading } = useAuthStore();
    const navigate = useNavigate();

    const value = useMemo(
        () => ({
        user,
        isLoading
    }),
    [user, isLoading]
); 
    useEffect(
        () =>
     onAuthStateChanged(auth, user =>{
        if (user) {
            setUser(user);
            navigate('/')
        }else {
            setLoading(true);
            setUser({} as User);
            navigate('/auth')
        }
        setInitialLoader(false);
        setLoading(false)
    }), 
  []
)
    return <authContext.Provider value={value}> { initialLoader ? "Loading..." : children}</authContext.Provider>
};