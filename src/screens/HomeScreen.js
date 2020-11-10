import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import GuideButton from '../components/GuideButton';


export default function HomeScreen(props) {

    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Title>Home Screen</Title>
            <Title>All chat rooms will be listed here</Title>
            <Title>{user.uid}</Title>
            <GuideButton modeValue='contained' title='Logout'
                onPress={() => logout()}
            />
            {/* <GuideButton
                modeValue='contained'
                title='Add Room'
                onPress={() => props.navigation.navigate('AddRoom')}
            /> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});