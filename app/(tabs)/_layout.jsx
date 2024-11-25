import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height:70, 
            marginBottom: 2, 
          },
        }),
        tabBarLabelStyle: {
          fontSize: 13, // Make the label size a bit larger
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Carts"
        options={{
          title: 'Carts',
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
