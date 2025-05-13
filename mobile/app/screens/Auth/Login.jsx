import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../assets/icons/google.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);

  const handleLogin = async () => {
    // if (!email.trim()) {
    //   Alert.alert("Validation Error", "Email is required.");
    //   return;
    // }

    // if (!password.trim()) {
    //   Alert.alert("Validation Error", "Password is required.");
    //   return;
    // }

    // try {
    //   const response = await axios.post(`${API_URL}/api/users/login`, {
    //     email: email,
    //     password: password,
    //   });
    //   console.log(response.data);
    //   setLoginMessage({ type: "success", message: response.data.message });
    //   navigation.navigate("Homepage");
    // } catch (error) {
    //   console.error(error.response.data);
    //   setLoginMessage({ type: "error", message: error.response.data.message });
    // }
    navigation.navigate("Homepage");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6 bg-white">
        <View className="justify-between flex-1">
          {/* Top content */}
          <View>
            <View className="mb-20" />
            <View className="absolute top-5 z-10">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={25} color="#9E9E9E" />
              </TouchableOpacity>
            </View>
            <View className="mb-8">
              <Text className="text-3xl font-bold">
                Login your account
              </Text>
              <Text style={{ color: "#F16B44" }} className="text">
                Your market access starts here.
              </Text>
            </View>

            <TextInput
              style={{ backgroundColor: "#EEEEEE", borderColor: "#fff" }}
              className="px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
              placeholder="Email Address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={{ backgroundColor: "#EEEEEE", borderColor: "#fff" }}
              className="px-4 py-3 mb-3 text-base border border-gray-300 rounded-md"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {loginMessage && (
              <Text
                className={`${
                  loginMessage.type === "success"
                    ? "text-green-500"
                    : "text-red-500 "
                }`}
              >
                {loginMessage.message}
              </Text>
            )}

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

            <TouchableOpacity style={{ borderColor: "#F16B44" }} className="flex-row px-4 py-3 mb-6 border border-gray-300 rounded-md">
              <Image
                source={GoogleLogo}
                style={{ width: 20, height: 20, marginRight: 90 }}
              />
              <Text style={{ color: "#FF5733", borderColor: "#F16B44" }} className="text-base">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderColor: "#F16B44" }} className="flex-row px-4 py-3 border border-gray-300 rounded-md">
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
