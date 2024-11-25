import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import Mycart from '../../components/Mycart';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const Carts = () => {
  return (
    <ThemedView>
    <View className="p-4">
      <Text className="text-center text-2xl font-semibold py-2 mt-10 rounded-lg bg-teal-500">
        My Carts
      </Text>
      <View className="flex flex-row justify-between mx-3 my-2">
        <ThemedText className="text-2xl font-medium">Total</ThemedText>
        <ThemedText className="text-2xl font-medium">₹4800/-</ThemedText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} className="mb-52">
        <Mycart />
        <Mycart />
        <Mycart />
        <Mycart />
      </ScrollView>
      <View style={styles.footer}>
        <View className="flex-row justify-between">
          <Text className="text-xl font-medium">Total ₹4800/-</Text>
          <TouchableOpacity className="rounded-md bg-blue-500 py-1 px-10 w-auto" activeOpacity={0.6}>
            <Text className="text-center font-medium text-lg text-white py-1">Proceed</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80, // Adjust padding for the footer space
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Carts;
