import React, { useState, useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import GuideInput from '../components/GuideInput';
import GuideButton from '../components/GuideButton';


export default function LoginScreen({ navigation }) {

    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log('login screen')
    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Welcome to Chat app</Title>
            <GuideInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <GuideInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <GuideButton
                title='Login'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => login(email, password)}
            />
            <GuideButton
                title='New user? Join here'
                modeValue='text'
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10
    },
    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 16
    }
});