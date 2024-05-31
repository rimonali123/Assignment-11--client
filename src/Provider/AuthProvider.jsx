import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import axios from "axios";
// import { set } from "react-hook-form";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true);
        setLogged(null)
        return signOut(auth);

    }

    useEffect(() => {
        if (user) {
            setLogged(user);
        }
        else {
            setLogged(null)
        }
    }, [user])


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current value of the user :", currentUser);

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            // if user is exsit then issue a token
            if (currentUser) {

                axios.post('https://assignment-11-server-side-theta.vercel.app/jwt', loggedUser, 
                { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            else {
                axios.post('https://assignment-11-server-side-theta.vercel.app/logOut', loggedUser, 
                { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        singInUser,
        signInWithGoogle,
        logOut,
        loading,
        logged
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;