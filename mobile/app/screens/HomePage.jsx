import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>HomePage</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomePage;
