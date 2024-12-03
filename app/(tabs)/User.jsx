import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Animated, {
  LightSpeedInLeft,
  LightSpeedInRight,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router"; // To handle navigation
const User = () => {
  const router = useRouter(); // To navigate to the tabs page
  return (
    <ThemedView>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
        <View className="my-auto justify-center">
          <Image
            source={require("../../assets/images/UserMaleProfile.png")}
            className="w-48 h-52 mx-auto bg-cover rounded-full"
          />
          <ThemedText className="text-lg text-center font-medium pt-3">
            22IT102030
          </ThemedText>
          <ThemedText className="text-2xl text-center font-semibold">
            Rohit Singh
          </ThemedText>
          <ThemedText className="text-base text-center font-medium">
            roithm_singh@srmus.edu.in
          </ThemedText>
          {/* User Carts Section */}

            <TouchableOpacity
              className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-blue-700 border-blue-600 my-2 mt-5"
              onPress={() => {
                router.push("../screens/Myprofile");
              }}
            >
              <AntDesign name="user" size={30} color="white" />
              <ThemedText className="text-2xl font-medium mx-2 text-white">
                My Profile
              </ThemedText>
              <FontAwesome5 name="arrow-right" size={20} color="white" />
            </TouchableOpacity>

          {/* Section 2 */}
            <TouchableOpacity
              className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-green-700 border-green-600"
              onPress={() => {
                router.push("Chats");
              }}
            >
              <AntDesign name="message1" size={27} color="white" />
              <ThemedText className="text-2xl font-medium mx-2 text-white">
                Message
              </ThemedText>
              <FontAwesome5 name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          {/* Section 3 */}
            <TouchableOpacity
              className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-orange-600 border-orange-500 mt-2"
              onPress={() => {
                router.push("../screens/Favourite");
              }}
            >
              <AntDesign name="hearto" size={26} color="white" />
              <ThemedText className="text-2xl font-medium mx-2 text-white">
                Favourite
              </ThemedText>
              <FontAwesome5 name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          {/* Section 4 */}
            <TouchableOpacity
              className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-indigo-600 border-indigo-500 my-2"
              onPress={() => {
                router.push("../screens/Location");
              }}
            >
              <Ionicons name="location-outline" size={29} color="white" />
              <ThemedText className="text-2xl font-medium mx-2 text-white">
                Location
              </ThemedText>
              <FontAwesome5 name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          {/* Section 5 */}
            <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-gray-800 border-gray-700">
              <Feather name="settings" size={25} color="white" />
              <ThemedText className="text-2xl font-semibold mx-2 text-white">
                Settings
              </ThemedText>
              <FontAwesome5 name="arrow-right" size={20} color="white" />
            </View>
          {/* Logout */}
          <TouchableOpacity
            className="flex flex-row justify-center py-1 mx-6 my-2 rounded-3xl bg-red-600"
            onPress={() => {
              router.push("/");
            }}
          >
            <MaterialIcons
              name="logout"
              size={28}
              color="white"
              className="py-1"
            />
            <ThemedText className="text-2xl px-2 font-medium text-white py-1">
              Logout
            </ThemedText>
          </TouchableOpacity>
          {/* end */}
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default User;
