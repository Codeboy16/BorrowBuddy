import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const MyProfile = () => {
  // State to hold the user data that can be edited
  const [user, setUser] = useState({
    name: "Rohit Singh",
    email: "rs1644818@gmail.com",
    regNo: "22IT102030",
    address: "123 Main Street, City, Country",
    profileImage: require("../../assets/images/UserMaleProfile.png"), // Replace with your profile image path
  });

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      {/* Profile Image */}
      <Image source={user.profileImage} style={styles.profileImage} />

      <View style={styles.inputContainer}>
        {/* Registration No Input */}
        <Text style={styles.label}>Registration No</Text>
        <TextInput
          style={styles.input}
          value={user.regNo}
          onChangeText={(text) => handleInputChange("regNo", text)}
          maxLength={10}
        />

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        {/* Address Input */}
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={user.address}
          onChangeText={(text) => handleInputChange("address", text)}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => alert("Profile Saved!")}
      >
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 10, // Reduced the gap
    borderWidth: 2,
    borderColor: "#ddd",
  },
  inputContainer: {
    marginTop: 10, // Reduced gap between inputs
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    color: "#555",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MyProfile;
