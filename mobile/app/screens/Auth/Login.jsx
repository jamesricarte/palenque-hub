import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../assets/icons/google.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";

const Login = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(`${API_URL}/api/users/login`, {
        emailOrPhone: emailOrPhone,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("HomePage");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6 bg-white">
        <View className="justify-between flex-1">
          {/* Top content */}
          <View>
            <View className="mb-20" />
            <View className="mb-8">
              <Text className="text-3xl font-bold">
                Welcome Back! Log In to Palenque
              </Text>
            </View>

            <TextInput
              style={{ backgroundColor: "#EEEEEE" }}
              className="px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
              placeholder="Email or Phone Number"
              keyboardType="email-address"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />

            <TextInput
              style={{ backgroundColor: "#EEEEEE" }}
              className="px-4 py-3 mb-5 text-base border border-gray-300 rounded-md"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Pressable className="mb-8">
              <Text className="text-right text-red-400">Forgot Password?</Text>
            </Pressable>

            <TouchableOpacity
              style={{ backgroundColor: "#FF5733" }}
              className="py-4 mb-8 rounded-md"
              onPress={handleLogin}
            >
              <Text className="text-base font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">Or login with</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            <TouchableOpacity className="flex-row px-4 py-3 mb-6 border border-gray-300 rounded-md">
              <Image
                source={GoogleLogo}
                style={{ width: 20, height: 20, marginRight: 90 }}
              />
              <Text style={{ color: "#FF5733" }} className="text-base">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row px-4 py-3 border border-gray-300 rounded-md">
              <Image
                source={FacebookLogo}
                style={{ width: 20, height: 20, marginRight: 83 }}
              />
              <Text style={{ color: "#FF5733" }} className="text-base">
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View className="items-center mt-10 mb-4">
            <Text>
              Don’t have an account?{" "}
              <Pressable
                onPress={() => navigation.navigate("Register")}
                className="mb-2"
              >
                <Text style={{ color: "#FF5733" }}>Register</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
