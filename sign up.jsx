import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // Ensure correct import
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import eye icon

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter(); // Initialize router

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    // Perform your sign-up logic here (e.g., form validation, API call)
    router.push('/sign in'); // Ensure this route is correctly configured
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
           
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            
        
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
          
              secureTextEntry={!isPasswordVisible} // Toggle password visibility
            />
            <TouchableOpacity onPress={handlePasswordVisibilityToggle} style={styles.eyeIcon}>
              <Icon name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Sign Up" onPress={handleSignUp} />
        <Text style={styles.link}>
          <Text style={styles.linkText} onPress={() => router.push('/sign in')}>Go to Login</Text>
        </Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  passwordContainer: {
    position: 'relative', // Make the container of the password field relative
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10, // Position the icon on the right side of the input field
    top: '30%',
    transform: [{ translateY: -12 }], // Center the icon vertically
    padding: 10,
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    marginLeft:140,
  },
  linkText: {
    color: 'blue',
  },
});

export default SignUp;
