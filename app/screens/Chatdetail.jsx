import React from "react";
import { View, Text } from "react-native";

const ChatDetail = ({ route }) => {
  const { name, notifi } = route.params;

  return (
    <View>
      <Text>Chat with: {name}</Text>
      <Text>Notifications: {notifi}</Text>
    </View>
  );
};

export default ChatDetail;
