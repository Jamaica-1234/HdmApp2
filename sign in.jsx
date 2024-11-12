import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Icon for eye

const LogIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility
  const router = useRouter(); // Initialize router

  const handleLogIn = () => {
    // Perform login logic here
    router.push('/home'); // Navigate to home screen
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle the password visibility
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Log In</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
         
            secureTextEntry={!isPasswordVisible} // Toggle password visibility
          />
          {/* Show/Hide eye icon */}
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <Button title="Log In" onPress={handleLogIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formBox: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#00FFFF',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
    color: 'black',
    position: 'relative', // To position the eye icon inside the input field
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    paddingRight: 40, // Make room for the eye icon inside the input
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 25,
    padding: 10,
  },
});

export default LogIn;
