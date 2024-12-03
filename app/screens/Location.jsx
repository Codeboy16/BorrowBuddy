import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Location = () => {
  // Initial state with default address
  const [address, setAddress] = useState('123 Main Street, City, Country');
  const [isEditing, setIsEditing] = useState(false);

  // Handle address change
  const handleAddressChange = (text) => {
    setAddress(text);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Location</Text>

      {/* If in edit mode, show input field, else show the default address */}
      {isEditing ? (
        <TextInput
          style={styles.addressInput}
          value={address}
          onChangeText={handleAddressChange}
        />
      ) : (
        <Text style={styles.addressText}>{address}</Text>
      )}
      {/* Edit/Save Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={toggleEditMode}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Save Address' : 'Edit Address'}</Text>
      </TouchableOpacity>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  addressText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    borderRadius:10
  },
  addressInput: {
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Location;
