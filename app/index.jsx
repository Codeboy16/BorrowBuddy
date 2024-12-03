import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router'; // To handle navigation

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // This will help in navigation to the tabs
  const [loader, setLoader] = useState(false);

  // Simple login validation (you can extend this)
  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    setLoader(true); // Show loader
    setTimeout(() => {
      setLoader(false); // Hide loader after a delay (simulating a network request)
      
      // On successful login, navigate to (tabs)
      router.push('(tabs)');
    }, 1000); // Simulating a delay of 1 second for the loader
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/user.png")}
        resizeMode="contain" // or "cover" depending on your needs
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title} className="underline py-4">Login</Text>

      {/* Username Input */}
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        {
          loader ? (
            <ActivityIndicator size="25" color="#FFFFFF" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )
        }
      </TouchableOpacity>
      {/* Google Login Button */}
      <TouchableOpacity className="border rounded-full flex flex-row items-center justify-center px-4 py-2">
        <Image
          source={require("../assets/images/google.png")}
          className="w-8 h-8 mr-2" // Add margin-right to separate image and text
        />
        <Text className="text-center text-xl font-medium">Login with Google</Text>
      </TouchableOpacity>

      {/* SignUp Button */}
      <TouchableOpacity onPress={() => { router.push('signup'); }} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>SignUp</Text>
      </TouchableOpacity>

      <StatusBar backgroundColor="#151718" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  loginButton: {
    backgroundColor: '#3b82f6', // Tailwind Blue 500
    borderRadius: 12,
    marginVertical: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#EF4444', // Tailwind Red 500
    borderRadius: 12,
    marginVertical: 10,
    paddingVertical: 10,
  },
  signupButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
