import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; // For the remove icon (can use any library)

const favouriteItems = [
  { id: '1', name: 'Central Park, New York', image: 'https://similarpng.com/logo-google-icon-png/' },
  { id: '2', name: 'Eiffel Tower, Paris', image: 'https://example.com/eiffel.jpg' },
  { id: '3', name: 'Sydney Opera House, Australia', image: 'https://example.com/sydney.jpg' },
  { id: '4', name: 'Great Wall of China, China', image: 'https://example.com/greatwall.jpg' },
  { id: '5', name: 'Colosseum, Rome', image: 'https://example.com/colosseum.jpg' },
];

const Favourite = () => {
  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      {/* Optional remove button */}
      <TouchableOpacity style={styles.removeButton}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favourite Item</Text>
      <FlatList
        data={favouriteItems}
        renderItem={renderFavouriteItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#ddd', // Placeholder background if image fails to load
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  removeButton: {
    marginLeft: 10,
  },
});

export default Favourite;
