import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Up / Create account with Email and Password
    const signUpWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const changeProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    // Sign In account with Email and Password
    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        logInWithGoogle,
        signUpWithEmailPassword,
        logInWithEmailPassword,
        changeProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;