import React, { useContext, useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './AuthStackNav';
import * as firebase from 'firebase'
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import authKey from '../apis/authKey'



export default function Route() {
    if (!firebase.apps.length) {
        firebase.initializeApp(authKey.FirebaseConfig);

    }
    const auth = firebase.auth()

    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {user ? <HomeStack /> : <AuthStackNav />}
        </NavigationContainer>
    );
}