import { useCallback, useState } from "react";
import { View, TouchableOpacity, Pressable, Image, Alert } from "react-native";
import GoogleLogo from "../../../assets/icons/google.png";
import FacebookLogo from "../../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../styles/colors";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

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
    <>
      <StatusBar style="dark" />
      <View className="flex-1 px-6 py-10 bg-white">
        <View className="justify-between flex-1 ">
          {/* Top content */}
          <View>
            <View className="mb-20" />
            <View className="absolute z-10 top-5">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-light-grey rounded-full p-1.5"
              >
                <ChevronLeftIcon
                  size={20}
                  strokeWidth={3}
                  color={colors.darkGrey}
                />
              </TouchableOpacity>
            </View>

            <View className="mb-8">
              <CustomText className="text-3xl font-bold">
                Login your account
              </CustomText>
              <CustomText className="text-primary-color">
                Your market access starts here.
              </CustomText>
            </View>

            <InputField
              className="mb-6"
              placeholder="Email Address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <InputField
              placeholder="Password"
              className="mb-6"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            {loginMessage && (
              <CustomText
                className={`${
                  loginMessage.type === "success"
                    ? "text-tertiary-color"
                    : "text-red-errors "
                }`}
              >
                {loginMessage.message}
              </CustomText>
            )}

            <TouchableOpacity className="mb-4">
              <CustomText className="text-right text-primary-color">
                Forgot Password?
              </CustomText>
            </TouchableOpacity>

            <Button buttonClassName="mb-8" onPress={handleLogin}>
              Login
            </Button>

            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-0.5 bg-light-grey" />
              <CustomText className="mx-4 text-dark-grey">
                Or login with
              </CustomText>
              <View className="flex-1 h-0.5 bg-light-grey" />
            </View>

            <View className="mb-6">
              <Button variant="socials">Continue with Google</Button>
              <Image
                source={GoogleLogo}
                className="absolute w-5 h-5 mr-24 transform -translate-y-1/2 top-1/2 left-4"
              />
            </View>

            <View className="mb-6">
              <Button variant="socials">Continue with Facebook</Button>
              <Image
                source={FacebookLogo}
                className="absolute w-6 h-6 transform -translate-y-1/2 top-1/2 left-4"
              />
            </View>
          </View>

          <View className="flex-row justify-center mt-3 mb-4">
            <CustomText>Don’t have an account? </CustomText>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <CustomText className="text-primary-color">Register</CustomText>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
