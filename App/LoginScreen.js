import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors, fonts, textStyles } from './styles';

const LoginScreen = ( { navigation } ) => {
    const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/Logo.png')} style={{ width:200, resizeMode:"contain"}} />
            <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#3F3D56"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#3F3D56"
                secureTextEntry={true}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity style={styles.forgotpassword}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.alternateLink}>
            <TouchableOpacity>
                <Text style={styles.linkText}>
                Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text> here
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 100, // Set the width of your logo
    height: 100, // Set the height of your logo
  },
  headerText: {
    color: "#3F3D56",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    marginTop: 40,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#6259F5',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 17,
    color: '#3F3D56',
  },
  button: {
    backgroundColor: '#6259F5',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  focusedInput: {
    borderWidth: 2, // Increase border thickness when input is focused
  },

  alternateLink: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    width: '100%',
    },

    forgotpassword:{
        marginBottom: 20,
    },

    link: {
        color: '#3F3D56',
    },
});

export default LoginScreen;