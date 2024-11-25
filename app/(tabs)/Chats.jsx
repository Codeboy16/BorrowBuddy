import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import UserChat from "../../components/UserChat";
// import { Link } from "expo-router";
// import ChatDetail from "../screens/Chatdetail";

const Chats = () => {
  const [section, setSection] = useState(true);
  const navigation = useNavigation(); // Access navigation prop

  // Function to navigate to the ChatDetail screen
  const handleChatPress = (name, notifi) => {
    navigation.navigate("../screens/Chatdetail", { name, notifi });
    
    // <Link href="../screens/Chatdetail"/>
    router.push("../screens/Chat");
  };

  return (
    <ThemedView>
    <View className="py-5 my-5 mx-4">
      <View className="bg-white border border-gray-300 rounded-2xl shadow-lg py-1 my-3 mx-2 flex-row items-center">
        <TextInput
          placeholder="Search..."
          className="flex-1 py-2 text-lg text-gray-500 px-3"
          placeholderTextColor="gray"
          style={{ outline: "none" }} // To remove the default outline on focus
        />
        <Entypo
          name="magnifying-glass"
          size={30}
          color="gray"
          className="mx-2"
        />
      </View>

      {/* Chats Section */}
      <View className="flex flex-row justify-around px-4 py-2 my-1 rounded-lg bg-teal-500">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => {
            setSection(true);
          }}
        >
          {section ? (
            <>
              <Entypo name="chat" size={24} color="black" />
              <Text className="text-2xl font-medium ml-2 text-black">
                General
              </Text>
            </>
          ) : (
            <>
              <Entypo name="chat" size={24} color="white" />
              <Text className="text-2xl font-medium ml-2 text-white">
                General
              </Text>
            </>
          )}
        </TouchableOpacity>
        <Text className="text-3xl text-white">|</Text>
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => {
            setSection(false);
          }}
        >
          {section ? (
            <>
              <Entypo name="block" size={20} color="white" />
              <Text className="text-2xl font-medium ml-2 text-white">
                Blocked
              </Text>
            </>
          ) : (
            <>
              <Entypo name="block" size={20} color="black" />
              <Text className="text-2xl font-medium ml-2 text-black">
                Blocked
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* Chats Section chats */}
      <ScrollView>
        <View className="mt-3 mb-60">
          {section ? (
            <>
              <TouchableOpacity onPress={() => handleChatPress("Rohit Singh", 1)}>
                <UserChat name="Rohit Singh" notifi={1} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Amrit Lal", 10)}>
                <UserChat name="Amrit Lal" notifi={10} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Nima Lepcha", 5)}>
                <UserChat name="Nima Lepcha" notifi={5} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Abishek khulal", 8)}>
                <UserChat name="Sabina Dhakal" notifi={8} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Nima Lepcha", 5)}>
                <UserChat name="Shivam Singh" notifi={5} />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => handleChatPress("Suman Yadav", 1)}>
                <UserChat name="Suman Yadav" notifi={"🚫"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Anurag Kashyab", 3)}>
                <UserChat name="Anurag Kashyab" notifi={"🚫"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Anurag Kashyab", 3)}>
                <UserChat name="Sonam bhutia" notifi={"🚫"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChatPress("Anurag Kashyab", 3)}>
                <UserChat name="Sonu Gupta" notifi={"🚫"} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
    </ThemedView>
  );
};

export default Chats;
