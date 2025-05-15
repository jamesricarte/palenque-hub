import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../../assets/icons/google.png";
import FacebookLogo from "../../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { CommonActions, useNavigation } from "@react-navigation/native";
import CustomText from "../../../components/CustomText";
import { getTextStyle } from "../../../utils/getTextStyle";

const RegisterScreen = ({ navigation }) => {
  const customNavigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState(null);

  const goToLogin = () => {
    customNavigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "WelcomeScreen" }, { name: "Login" }],
      })
    );
  };

  const handleRegister = async () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Validation Error", "All fields required!");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/api/users/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      console.log(response.data);
      setRegisterMessage({ type: "success", message: response.data.message });
      navigation.navigate("Login");
    } catch (error) {
      console.error(error.response.data);
      setRegisterMessage({
        type: "error",
        message: error.response.data.message,
      });
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
                Create your account
              </CustomText>
              <CustomText style={{ color: "#F16B44" }}>
                Be part of something fresh.
              </CustomText>
            </View>

            <View className="flex-row gap-3">
              <TextInput
                style={getTextStyle({
                  backgroundColor: "#EEEEEE",
                  borderColor: "#fff",
                })}
                placeholder="First Name"
                className="flex-1 px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={getTextStyle({
                  backgroundColor: "#EEEEEE",
                  borderColor: "#fff",
                })}
                placeholder="Last Name"
                className="flex-1 px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>

            <TextInput
              style={getTextStyle({
                backgroundColor: "#EEEEEE",
                borderColor: "#fff",
              })}
              className="px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={getTextStyle({
                backgroundColor: "#EEEEEE",
                borderColor: "#fff",
              })}
              className="px-4 py-3 mb-5 text-base border border-gray-300 rounded-md"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              style={getTextStyle({
                backgroundColor: "#EEEEEE",
                borderColor: "#fff",
              })}
              className="px-4 py-3 mb-5 text-base border border-gray-300 rounded-md"
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            {registerMessage && (
              <CustomText
                className={`${
                  registerMessage.type === "success"
                    ? "text-green-500"
                    : "text-red-500 "
                } mb-5`}
              >
                {registerMessage.message}
              </CustomText>
            )}

            <TouchableOpacity
              style={{ backgroundColor: "#FF5733" }}
              className="py-4 mb-8 rounded-md"
              onPress={handleRegister}
            >
              <CustomText className="text-base font-bold text-center text-white">
                Register
              </CustomText>
            </TouchableOpacity>

            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-px bg-gray-300" />
              <CustomText className="mx-4 text-gray-500">
                Or register with
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
              <CustomText style={{ color: "#FF5733" }} className="text-base">
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

          <View className="flex-row justify-center mt-10 mb-4">
            <CustomText>Already have an account? </CustomText>
            <Pressable onPress={goToLogin} className="mb-2">
              <CustomText style={{ color: "#FF5733" }}>Login</CustomText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RegisterScreen;
