import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="justify-center items-center flex-1">
        <Text className="text-2xl">Register page</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;
