import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from '../../assets/icons/google.png';
import FacebookLogo from '../../assets/icons/facebook.png';

const Login = ({ navigation }) => {
  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-1 justify-between">
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
            className="border border-gray-300 rounded-md px-4 py-3 mb-6 text-base"
            placeholder="Email or Phone Number"
            keyboardType="email-address"
          />

          <TextInput
            style={{ backgroundColor: "#EEEEEE" }}
            className="border border-gray-300 rounded-md px-4 py-3 mb-5 text-base"
            placeholder="Password"
            secureTextEntry
          />

          <Pressable className="mb-8">
            <Text className="text-right text-red-400">Forgot Password?</Text>
          </Pressable>

          <TouchableOpacity
            style={{ backgroundColor: "#FF5733" }}
            className="py-4 rounded-md mb-8"
          >
            <Text className="text-center text-white font-bold text-base">Login</Text>
          </TouchableOpacity>

          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500">Or login with</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          <TouchableOpacity className="border border-gray-300 rounded-md py-3 px-4 flex-row mb-6">
            <Image source={GoogleLogo} style={{ width: 20, height: 20, marginRight: 90 }} />
            <Text style={{ color: "#FF5733" }} className="text-base">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="border border-gray-300 rounded-md py-3 px-4 flex-row">
            <Image source={FacebookLogo} style={{ width: 20, height: 20, marginRight: 83 }} />
            <Text style={{ color: "#FF5733" }} className="text-base">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          </View>

          <View className="items-center mt-10 mb-4">
          <Text>
            Don’t have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Register")} className="mb-2">
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
