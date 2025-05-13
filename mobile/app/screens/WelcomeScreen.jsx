import { Text, View, Pressable,TouchableOpacity, ImageBackground, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center">

        <ImageBackground
        source={require("../assets/backgrounds/market-bg-orig.png")} // Your gradient-included image
        style={{ flex: 1, justifyContent: "flex-end" }}
        resizeMode="cover">
        {/* Content container */}
        <View style={{ paddingHorizontal: 24, paddingBottom: 40 }}>
          {/* Logo and Subtitle */}
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <Image
              source={require("../assets/logos/logo.png")}
              style={{ width: 240, height: 60 }}
            />
            <Text style={{ color: "#9E9E9E", fontSize: 18 }}>
              From Market to Your Doorstep
            </Text>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#FF5733",
              paddingVertical: 14,
              borderRadius: 8,
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#FF5733",
              paddingVertical: 14,
              borderRadius: 8,
              marginBottom: 24,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#FF5733", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>
              Register
            </Text>
          </TouchableOpacity>

          {/* Social Icons */}
          <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 8 }}>
            <FontAwesome name="facebook-square" size={24} color="#9E9E9E" style={{ marginHorizontal: 10 }} />
            <FontAwesome name="instagram" size={24} color="#9E9E9E" style={{ marginHorizontal: 10 }} />
          </View>
          <Text style={{ textAlign: "center", color: "#9E9E9E", fontSize: 12 }}>Connect with us</Text>
        </View>
      </ImageBackground>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;
