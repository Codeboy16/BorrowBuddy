import {
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import react from "react";
import { Link, router } from "expo-router";
import "../../global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState, useEffect } from "react";
import CartBox from "../../components/Cartbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Shopbox from "../../components/Shopbox";
import Animated,{ FlipInXDown, FlipInXUp} from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';

export default function HomeScreen() {
  const [msg, setMsg] = useState(true);
  const navigation = useNavigation();

//Notification Code 
useEffect(() => {
  const subscription = Notifications.addNotificationReceivedListener(notification => {
    console.log('Notification received:', notification);
  });

  const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
    console.log('Notification tapped:', response);
  });

  return () => {
    subscription.remove();
    responseListener.remove();
  };
}, []);
  // Function to trigger the local notification
  const triggerNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "New Notification", // Title of the notification
        body: "This is An Borrow Buddy Notification", // Body content
      },
      trigger: { seconds: 1 }, // Notification will show after 1 second
    });
  };

  return (
    <ThemedView>
    <ThemedView className="mx-3 mt-5 pt-5">
      <ScrollView>
        {/* Header Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginHorizontal: 2,
          }}
        >
           {/* Menu Icon to Open Drawer */}
           <Ionicons
              name="menu"
              size={46}
              color="#cbcbcb"
              onPress={() => navigation.openDrawer()} // Open drawer on press
            />
          <TextInput
            style={{
              flex: 1,
              marginHorizontal: 2,
              marginVertical:13,
              borderWidth: 2,
              height: 45,
              borderRadius: 25,
              paddingHorizontal: 15,
              fontSize: 20,
              color:"white",
              borderColor:"#cbcbcb"
            }}
            placeholder="Search here...."
            placeholderTextColor="#cbcbcb"
            autoComplete="off"
            maxLength={25}
          />
          {msg ? (
            <Ionicons
              name="notifications-sharp"
              size={35}
              color="#cbcbcb"
              onPress={() => {
                setMsg(false);
                triggerNotification();
              }}
            />
          ) : (
            <MaterialIcons
              name="notifications-active"
              size={35}
              color="#cbcbcb"
              onPress={() => {
                setMsg(true);
                }}
            />
          )}
        </View>
        {/* Body Section */}
        <View className="my-4 mx-4">
          <Text className="text-3xl font-medium text-white">Hi' Borrow Buddy 👋</Text>
          <Text className="text-2xl font-medium py-2 text-white">
            Why Buy New When One Can Share😊
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/poster.png")}
            style={styles.image}
            resizeMode="cover" // or "contain" depending on your needs
          />
        </View>
        {/* Caterogry Section */}
        <View className="my-5 mx-1">
          <View className="flex-1 flex-row justify-between ">
            <Text className="text-2xl font-medium text-white">Categories</Text>
            <Text
              className="text-2xl font-medium underline text-amber-600"
              onPress={() => {
                router.push("../screens/Categories");
              }}
            >
              SeeAll→
            </Text>
          </View>
          {/* CartBox */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="my-4 flex-1 flex-row justify-around flex-wrap ">
              <Animated.View entering={FlipInXDown.delay(10).duration(1000)}>
              <CartBox
                color="red"
                icon={
                  <FontAwesome5
                    name="home"
                    size={70}
                    color="white"
                    className="text-center"
                  />
                }
                name="Home"
              />
              </Animated.View>
              {/* second */}
              <Animated.View entering={FlipInXUp.delay(10).duration(1000)}>
              <CartBox
                color="purple"
                icon={
                  <FontAwesome6
                    name="shirt"
                    size={74}
                    color="white"
                    className="text-center"
                  />
                }
                name="Cloths"
              />
              </Animated.View>
              <CartBox
                color="blue"
                icon={
                  <AntDesign
                    name="copy1"
                    size={74}
                    color="white"
                    className="text-center"
                  />
                }
                name="Notes"
              />
              <CartBox
                color="green"
                icon={
                  <FontAwesome5
                    name="donate"
                    size={74}
                    color="white"
                    className="text-center"
                  />
                }
                name="Donate"
              />
            </View>
          </ScrollView>
          {/* Recommended */}
          <View>
            <View className="flex-1 flex-row justify-between py-2">
              <Text className="text-2xl font-medium text-white">Suggested😄</Text>
              <Text
                className="text-2xl font-medium underline text-amber-600"
                onPress={() => {
                  router.push("../screens/MoreItem");
                }}
              >
                MoreItem→
              </Text>
            </View>
            {/* Import Shop Box --Suggested Box*/}
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Shopbox />
                <Shopbox />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Use full width of the container
    height: 200, // Set a fixed height or use a percentage if needed
    borderRadius: 5, // optional: adds rounded corners
  },
});
