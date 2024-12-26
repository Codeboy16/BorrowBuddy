import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Favourite = () => {
  const [favouriteItems, setFavouriteItems] = useState([
    { id: 1, name: 'Apple iPhone 14 Pro', image: 'https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg' },
    { id: 2, name: 'vivo Y22 (Starlit Blue)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaFrd1qXGgFMH0jYYLjO4gD0Jk-SmRRNRIg&s' },
    { id: 3, name: 'Lymio Casual Shirt Men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjj89yeTTrehcJR4tC6c3SgPlg_NO0W2Q2Q&s' },
    { id: 4, name: 'M1 Smart Watch for Men', image: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg' },
    { id: 5, name: 'Nike Shoes. Nike IN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7BjD5m7Ioaf5cCf6yMitjAGFfRnrJXJMaQ&s' },
  ]);

  const removeItem = (id) => {
    setFavouriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity className="flex-row bg-white p-4 mb-4 rounded-lg shadow-lg items-center" activeOpacity={0.8}>
      <Image source={{ uri: item.image }} className="w-16 h-16 rounded-lg mr-4 bg-gray-300" />
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
      </View>
      {/* Remove button with onPress handler */}
      <TouchableOpacity className="ml-2" onPress={() => removeItem(item.id)}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-5 bg-gray-50">
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">My Favourite Items</Text>
      <FlatList
        data={favouriteItems}
        renderItem={renderFavouriteItem}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
      />
    </View>
  );
};

export default Favourite;
