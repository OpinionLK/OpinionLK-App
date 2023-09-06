// LoginScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.test}>
        <View style={styles.ImageContainer}>
            <Image source={require('../assets/Logo.png')} style={{ width:200, resizeMode:"contain", margin:"auto"}} />
        </View>

        <View style={styles.NavContainer}>
            <Text style={styles.WelcomeText}>Welcome</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.SignUpButton]}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Sign me up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.LoginButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaProvider>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },

    ImageContainer: {
        flex: 1,
        height:'auto',
        marginTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#fff',
    },

    NavContainer: {
        flex: 1,
        height:320,
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#fff',
    },

    WelcomeText:{
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        width: 206,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10, // Add margin between buttons in the column
    },
    SignUpButton: {
        backgroundColor: '#00BFA6',
    },
    LoginButton: {
        backgroundColor: '#6259F5',
    },

    buttonContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 150,
        marginTop: 40,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    
});
