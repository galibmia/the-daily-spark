import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    const user = {displayName: "Galib"}
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(null);

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    // Sign Up / Create account with Email and Password
    const signUpWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Sign In account with Email and Password
    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {
        user,
        // setUser,
        logInWithGoogle,
        signUpWithEmailPassword,
        logInWithEmailPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;