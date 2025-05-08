import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="items-center justify-center flex-1">
        <Text className="text-2xl">HomePage</Text>

        <TouchableOpacity
          style={{ backgroundColor: "#FF5733" }}
          className="p-2 mt-3 mb-8 rounded-md"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-base font-bold text-center text-white">
            Logout
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomePage;
