import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export function useAuth() {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return () => unsubscribe();
    }, []);

    const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
    return signOut(auth);
    };

    const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };

    return { user, login, logout, register };
}
