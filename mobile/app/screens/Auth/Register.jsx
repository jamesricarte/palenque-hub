import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Register</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;
