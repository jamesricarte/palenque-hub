import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const WelcomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text className="text-white bg-orange-500 p-5">WelcomeScreen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;
