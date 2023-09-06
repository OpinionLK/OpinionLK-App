import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ( { navigation } ) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Logo.png')} // Replace with your logo source
          style={styles.logo}
        />
        <Text style={styles.headerText}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, isFocused && styles.focusedInput]}
          placeholder="Email"
          placeholderTextColor="#3F3D56"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextInput
          style={[styles.input, isFocused && styles.focusedInput]}
          placeholder="Username"
          placeholderTextColor="#3F3D56"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, styles.passwordInput, isFocused && styles.focusedInput]}
            placeholder="Password"
            placeholderTextColor="#3F3D56"
            secureTextEntry={true}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TextInput
            style={[styles.input, styles.passwordInput, isFocused && styles.focusedInput]}
            placeholder="Retype Password"
            placeholderTextColor="#3F3D56"
            secureTextEntry={true}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.alternateLink}>
            <TouchableOpacity>
                <Text style={styles.linkText}>
                    Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Sign in</Text> here
                </Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#3F3D56',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    marginTop: 40,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#00BFA6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    color: '#3F3D56',
  },
  focusedInput: {
    borderWidth: 2,
  },
  passwordRow: {
    flexDirection: 'row', // Arrange the password fields in a row
  },
  passwordInput: {
    flex: 1, // Make both password fields take equal width
    marginRight: 10, // Add margin between the password fields
  },
  button: {
    backgroundColor: '#00BFA6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  alternateLink: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    width: '100%',
    },
});

export default RegisterScreen;
