import { Text, View, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="p-5 text-3xl text-black">WelcomeScreen</Text>
        <View className="flex-row gap-3 mt-5">
          <Pressable
            className="bg-orange-400 p-3 rounded-lg"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-white">Login</Text>
          </Pressable>

          <Pressable
            className="bg-blue-400 p-3 rounded-lg"
            onPress={() => navigation.navigate("Register")}
          >
            <Text className="text-white">Register</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;
