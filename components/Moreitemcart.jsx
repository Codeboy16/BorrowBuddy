import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Moreitem = ({title,image,description,price}) => {
    const [love, setLove] = useState(false);
    const [add,setAdd] = useState(false);
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#D1D5DB", // gray-300
          width: 170, // w-52
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          margin: 2,
          backgroundColor: "#e5e7eb",
          overflow: "hidden",
        }}

        className="my-2"
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{uri:image}}
            style={{
              width: 170, // w-48
              height: 170, // h-48
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
            fontSize: 15,
            fontWeight: "500",
            paddingHorizontal: 10,
            marginTop: 3,
            textAlign:'center'
          }}
        >
          {title.slice(0,20)}
        </Text>
        <Text
          style={{color: "#6B7280" }}
          className="py-1 px-2"
        >
          {description.slice(0,60)}
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
          <Text style={{ fontSize: 15, fontWeight: "600" }}>₹{Math.round(price*5)}/-</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text
              style={{
                backgroundColor:add? "red":"#3B82F6" , // blue-500
                color: "white",
                paddingHorizontal:add? 10 :20,
                paddingVertical: 4,
                borderRadius: 7,
                overflow:"hidden",
                marginHorizontal:12
              }}
              className="text-lg font-medium"
              onPress={()=>{setAdd(!add)}}
            >
              {
                add? 'Added' : 'Add'  
               }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Moreitem;