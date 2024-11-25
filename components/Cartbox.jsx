import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import "../global.css";

const Cartbox = ({ color, icon, name }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} className={`h-48 w-44 rounded-2xl bg-${color? color : "#ef5350"}-400 m-1`} style={{backgroundColor:color}}>
      <View className="flex-1 justify-center justify-items-center">
        {/* <FontAwesome name="home" size={84} color="white" className='text-center'/> */}
        {icon}
        <Text className="text-center text-4xl font-medium text-white pt-2">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cartbox;
