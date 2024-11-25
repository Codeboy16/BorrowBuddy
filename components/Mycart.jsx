import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Mycart = () => {
  return (
    <View className="mx-2 my-2 rounded-xl px-2 py-1 shadow-lg bg-gray-200" style={{ elevation: 5 }}>
      <View className="flex flex-row">
        <Image 
          source={require("../assets/images/phone.png")} 
          className="w-28 h-28" 
          style={{ borderRadius: 10 }} 
        />
        <View className="flex flex-col justify-around ml-3">
          <Text className="text-xl font-medium">Samsung Galaxy A10</Text>
          <Text className="text-xl font-medium">₹1200/-</Text>
          <View className="flex flex-row justify-evenly">
            <TouchableOpacity className="rounded-md bg-red-500 py-1 px-3 w-auto mx-2" activeOpacity={0.6}>
              <Text className="text-center font-medium text-lg text-white">Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-md bg-blue-500 py-1 px-5 w-auto" activeOpacity={0.6}>
              <Text className="text-center font-medium text-lg text-white">Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Mycart;
