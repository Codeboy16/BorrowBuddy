import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Shopbox = () => {
  const [love, setLove] = useState(false);
  const [add,setAdd] = useState(false);
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#D1D5DB", // gray-300
        width: 220, // w-52
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        margin: 2,
        backgroundColor: "#e5e7eb",
        overflow: "hidden",
      }}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/images/phone.png")}
          style={{
            width: 192, // w-48
            height: 192, // h-48
            resizeMode: "cover",
            alignSelf: "center",
          }}
        />
        <AntDesign
          name="heart"
          size={29}
          color={love ? "red" : "gray"}
          style={{ position: "absolute", top: 8, right: 7 }}
          onPress={() => {
            setLove(!love);
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          paddingHorizontal: 13,
          marginTop: 8,
        }}
      >
        Samsung Galaxy A10
      </Text>
      <Text
        style={{ paddingHorizontal: 16, color: "#6B7280", paddingVertical: 5 }}
        className="py-1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderTopWidth: 2,
          borderTopColor: "#E5E7EB",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>₹2999/-</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text
            style={{
              backgroundColor:add? "red":"#3B82F6" , // blue-500
              color: "white",
              paddingHorizontal:add? 15 :25,
              paddingVertical: 4,
              borderRadius: 7,
              overflow:"hidden"
            }}
            className="text-2xl font-medium"
            onPress={()=>{setAdd(!add)}}
          >
            {
              add? 'Buyed' : 'Buy'  
             }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shopbox;
