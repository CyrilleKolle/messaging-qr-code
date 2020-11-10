import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogupScreen from '../screens/LogupScreen';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();


export default function AuthStackNav() {
    return (
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={LogupScreen} />
        </Stack.Navigator>
    );
}