import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router'; // To handle navigation

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter(); // To navigate to the tabs page

  // Simple validation for the sign-up form
  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // If all validation passes, navigate to (tabs)
    router.push('index');
  };

  return (
    <View className="flex-1 justify-center items-center p-5 bg-gray-100">
      <Text className="text-4xl font-bold text-center text-gray-800 my-12 underline">Sign Up</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="w-full bg-white rounded-lg p-4 my-4 text-lg shadow-md border border-gray-300"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="w-full bg-white rounded-lg p-4 mb-4 text-lg shadow-md border border-gray-300"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full bg-white rounded-lg p-4 mb-4 text-lg shadow-md border border-gray-300"
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="w-full bg-white rounded-lg p-4 mb-6 text-lg shadow-md border border-gray-300"
      />

      {/* Sign-Up Button */}
      <TouchableOpacity onPress={handleSignUp} className="w-full bg-blue-500 rounded-lg py-3 mb-6 shadow-lg">
        <Text className="text-center text-white text-2xl font-medium">Sign Up</Text>
      </TouchableOpacity>

      {/* Link to Login Page */}
      <TouchableOpacity onPress={() => router.push('/')} className="mt-4">
        <Text className="text-blue-500 text-lg font-medium">Already have an account? Login</Text>
      </TouchableOpacity>

      <StatusBar backgroundColor="black" />
    </View>
  );
};

const styles = {
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
};

export default SignUpPage;
