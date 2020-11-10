import React, { createContext, useState } from 'react';
import * as firebase from 'firebase'
import authKey from '../apis/authKey'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    if (!firebase.apps.length) {
        firebase.initializeApp(authKey.FirebaseConfig);
    }

    const [user, setUser] = useState(null);

    const auth = firebase.auth()

    return (
        <AuthContext.Provider
            value={{

                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase.auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};