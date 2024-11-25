import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Animated,{ LightSpeedOutRight,SlideInLeft} from 'react-native-reanimated';

const UserChat = ({name,notifi}) => {
  return (
    <Animated.View entering={SlideInLeft.delay(5).duration(1000)} exiting={LightSpeedOutRight.delay(10).duration(1000)}>
    <TouchableOpacity activeOpacity={0.6} className="bg-gray-200 border border-gray-700 rounded-2xl shadow-lg py-4 my-1 mx-2 flex-row items-center p-4">
      <Image
        source={require("../assets/images/user.png")}
        className="w-16 h-16 rounded-full"
      />
      <View className="flex-1 ml-4">
        <Text className="text-lg font-semibold">{name}</Text>
        <Text className="text-gray-600" numberOfLines={3} ellipsizeMode="tail">
          This is a message preview text that is too long to be displayed fully.
        </Text>
      </View>
      {/* Notification */}
      <View className="bg-teal-500 rounded-full px-3 py-1">
        <Text className="text-white font-bold">{notifi}</Text>
      </View>
    </TouchableOpacity>
    </Animated.View>
  );
};

export default UserChat;
