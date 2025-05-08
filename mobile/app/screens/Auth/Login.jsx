import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Login</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
