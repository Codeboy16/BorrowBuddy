import { View, Text, ActivityIndicator, ScrollView, Alert, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Moreitem from "../../components/Moreitemcart";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const MoreItem = () => {
  const [productdata, setProductData] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state
  const [productname, setProductName] = useState(""); // Update to store a single product name

  useEffect(() => {
    const Api = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const product_data = await response.json();
        setProductData(product_data);
      } catch (err) {
        Alert.alert("Something Went Wrong. Please Try Again...");
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    
    Api();
  }, []);

  const handleSearch = (text) => {
    setProductName(text);
  };

  // Filter products based on search text
  const filteredProducts = productdata.filter(product => 
    product.title.toLowerCase().includes(productname.toLowerCase())
  );

  return (
    <ScrollView>
      <ThemedView className="flex-1 flex-row justify-evenly flex-wrap">
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#cbcbcb"
          autoComplete="off"
          maxLength={25}
          className="px-4 w-96 my-3 border-white border rounded-xl text-white"
          onChangeText={handleSearch}
          value={productname}
        />
        {loading ? (
          <ActivityIndicator size="100" color="#90ee90" />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((val) => (
            <Moreitem
              key={val.id}
              title={val.title}
              image={val.image}
              description={val.description}
              price={val.price}
            />
          ))
        ) : (
          <View className="w-full items-center my-4">
            <MaterialIcons name="error" size={34} color="white" />
            <Text className="text-white text-lg h-10">
              No products found</Text>
              <Text className="text-white text-lg h-10">Search Something Else</Text>
          </View>
        )}
      </ThemedView>
    </ScrollView>
  );
};

export default MoreItem;
