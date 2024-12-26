import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const Location = () => {
  // Initial state with default values for each field
  const [name, setName] = useState('John Doe');
  const [pinCode, setPinCode] = useState('123456');
  const [state, setState] = useState('California');
  const [city, setCity] = useState('Los Angeles');
  const [place, setPlace] = useState('123 Main Street');
  const [isEditing, setIsEditing] = useState(false);

  // Handle text change for each field
  const handleChange = (field, value) => {
    if (field === 'name') setName(value);
    if (field === 'pinCode') setPinCode(value);
    if (field === 'state') setState(value);
    if (field === 'city') setCity(value);
    if (field === 'place') setPlace(value);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    if (isEditing && (name.trim() === '' || pinCode.trim() === '' || state.trim() === '' || city.trim() === '' || place.trim() === '')) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    setIsEditing(!isEditing);
  };

  return (
    <View className="flex-1 p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">Your Location</Text>

      {/* Name */}
      <Text className="text-lg text-gray-700 mb-2">Name</Text>
      {isEditing ? (
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-5 bg-white"
          value={name}
          onChangeText={(text) => handleChange('name', text)}
          placeholder="Enter your name"
        />
      ) : (
        <Text className="text-base text-gray-600 p-3 mb-5 rounded-lg bg-white border border-gray-300">{name}</Text>
      )}

      {/* Pin Code */}
      <Text className="text-lg text-gray-700 mb-2">Pin Code</Text>
      {isEditing ? (
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-5 bg-white"
          value={pinCode}
          onChangeText={(text) => handleChange('pinCode', text)}
          placeholder="Enter your pin code"
          keyboardType="numeric"
        />
      ) : (
        <Text className="text-base text-gray-600 p-3 mb-5 rounded-lg bg-white border border-gray-300">{pinCode}</Text>
      )}

      {/* State */}
      <Text className="text-lg text-gray-700 mb-2">State</Text>
      {isEditing ? (
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-5 bg-white"
          value={state}
          onChangeText={(text) => handleChange('state', text)}
          placeholder="Enter your state"
        />
      ) : (
        <Text className="text-base text-gray-600 p-3 mb-5 rounded-lg bg-white border border-gray-300">{state}</Text>
      )}

      {/* City */}
      <Text className="text-lg text-gray-700 mb-2">City</Text>
      {isEditing ? (
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-5 bg-white"
          value={city}
          onChangeText={(text) => handleChange('city', text)}
          placeholder="Enter your city"
        />
      ) : (
        <Text className="text-base text-gray-600 p-3 mb-5 rounded-lg bg-white border border-gray-300">{city}</Text>
      )}

      {/* Place (Address) */}
      <Text className="text-lg text-gray-700 mb-2">Place</Text>
      {isEditing ? (
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-5 bg-white"
          value={place}
          onChangeText={(text) => handleChange('place', text)}
          placeholder="Enter your address"
        />
      ) : (
        <Text className="text-base text-gray-600 p-3 mb-5 rounded-lg bg-white border border-gray-300">{place}</Text>
      )}

      {/* Edit/Save Button */}
      <TouchableOpacity
        className={` ${isEditing ? 'bg-green-500' : 'bg-red-500'}  py-3 px-8 rounded-lg items-center`}
        onPress={toggleEditMode}
      >
        <Text className="text-white text-lg font-bold">{isEditing ? 'Save Address' : 'Edit Address'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Location;
