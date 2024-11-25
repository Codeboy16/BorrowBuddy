import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <ThemedView style={styles.container}>
        <Fontisto
          name="photograph"
          size={75}
          color="#3b82f6"
          className="mx-auto my-5 text-center"
        />
        <ThemedText
          style={styles.message}
          className="text-xl font-medium mx-10 my-4"
        >
          Borrow Buddy We need your permission to Acess the camera
        </ThemedText>
        <TouchableOpacity
          onPress={requestPermission}
          className="mx-4 py-4 px-10 rounded-md bg-blue-500"
        >
          <ThemedText className="text-white font-bold text-xl text-center">
            Grant Permission
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <Animated.View
      entering={FadeIn.delay(100).duration(1000)}
      exiting={FadeOut}
      style={styles.container}
    >
      <CameraView
        style={styles.camera}
        facing={facing}
        ratio="16:9"
        flashMode="on"
      >
        <View style={styles.footer}>
          {/* Access The File */}
          <TouchableOpacity>
            <FontAwesome name="photo" size={44} color="white" />
          </TouchableOpacity>
          {/* Click The Photo */}
          <TouchableOpacity>
            <MaterialIcons name="camera" size={44} color="white" />
          </TouchableOpacity>
          {/* Reverse The Camera */}
          <TouchableOpacity onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse-outline" size={44} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 14,
    // backgroundColor: 'grey',
  },
});
