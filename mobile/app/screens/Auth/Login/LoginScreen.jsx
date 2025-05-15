import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../../assets/icons/google.png";
import FacebookLogo from "../../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { CommonActions, useNavigation } from "@react-navigation/native";
import CustomText from "../../../components/CustomText";
import { getTextStyle } from "../../../utils/getTextStyle";

const LoginScreen = ({ navigation }) => {
  const customNavigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);

  const navigateToHomeScreen = () => {
    customNavigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      })
    );
  };

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert("Validation Error", "Email is required.");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Validation Error", "Password is required.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      setLoginMessage({ type: "success", message: response.data.message });
      navigateToHomeScreen();
    } catch (error) {
      console.error(error.response.data);
      setLoginMessage({ type: "error", message: error.response.data.message });
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6 bg-white">
        <View className="justify-between flex-1">
          {/* Top content */}
          <View>
            <View className="mb-20" />
            <View className="absolute z-10 top-5">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-[#F5F5F5] rounded-full p-1.5"
              >
                <ChevronLeftIcon size={20} strokeWidth={3} color="#9E9E9E" />
              </TouchableOpacity>
            </View>
            <View className="mb-8">
              <CustomText className="text-3xl font-bold">
                Login your account
              </CustomText>
              <CustomText style={{ color: "#F16B44" }}>
                Your market access starts here.
              </CustomText>
            </View>

            <TextInput
              style={getTextStyle({
                backgroundColor: "#EEEEEE",
                borderColor: "#fff",
              })}
              className="px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
              placeholder="Email Address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={getTextStyle({
                backgroundColor: "#EEEEEE",
                borderColor: "#fff",
              })}
              className="px-4 py-3 mb-3 text-base border border-gray-300 rounded-md"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {loginMessage && (
              <CustomText
                className={`${
                  loginMessage.type === "success"
                    ? "text-green-500"
                    : "text-red-500 "
                }`}
              >
                {loginMessage.message}
              </CustomText>
            )}

            <Pressable className="mb-8">
              <CustomText className="text-right text-red-400">
                Forgot Password?
              </CustomText>
            </Pressable>

            <TouchableOpacity
              style={{ backgroundColor: "#FF5733" }}
              className="py-4 mb-8 rounded-md"
              onPress={handleLogin}
            >
              <CustomText className="text-base font-bold text-center text-white">
                Login
              </CustomText>
            </TouchableOpacity>

            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-px bg-gray-300" />
              <CustomText className="mx-4 text-gray-500">
                Or login with
              </CustomText>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            <TouchableOpacity
              style={{ borderColor: "#F16B44" }}
              className="flex-row px-4 py-3 mb-6 border border-gray-300 rounded-md"
            >
              <Image
                source={GoogleLogo}
                style={{ width: 20, height: 20, marginRight: 90 }}
              />
              <CustomText
                style={{ color: "#FF5733", borderColor: "#F16B44" }}
                className="text-base"
              >
                Continue with Google
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ borderColor: "#F16B44" }}
              className="flex-row px-4 py-3 border border-gray-300 rounded-md"
            >
              <Image
                source={FacebookLogo}
                style={{ width: 20, height: 20, marginRight: 83 }}
              />
              <CustomText style={{ color: "#FF5733" }} className="text-base">
                Continue with Facebook
              </CustomText>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-10 mb-4 ">
            <CustomText>Don’t have an account? </CustomText>
            <Pressable
              onPress={() => navigation.navigate("Register")}
              className="p-0 mb-0"
            >
              <CustomText style={{ color: "#FF5733" }}>Register</CustomText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
