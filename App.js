import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthStackNav from './src/navigation/AuthStackNav'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/LoginScreen'
import Logup from './src/screens/LogupScreen'
import Route from './src/navigation/Route'
import Providers from './src/navigation/Providers'


export default function App() {
  // console.log(Providers())
  return (
    <View style={styles.container}>

      {/* <AuthStackNav /> */}
      {/* <Route/> */}
      <Providers />



      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    marginTop: 150

  },
});
