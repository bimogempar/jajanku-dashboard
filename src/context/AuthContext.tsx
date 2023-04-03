import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeUser, setUser } from "@/store/user";

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.users);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(
                    {
                        email: user.email,
                        uid: user.uid,
                    }
                ));
            } else {
                dispatch(removeUser());
            }
        });
        setLoading(false);

        return () => unsubscribe();
    }, []);

    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser({ email: null, uid: null });
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};