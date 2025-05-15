import {
  View,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useState, useCallback } from "react";
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

const RegisterScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

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
    <>
      <StatusBar style="dark" />
      <View className="flex-1 px-6 py-10 bg-white">
        <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
          {/* Top content */}
          <View className="justify-between">
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
                  Create your account
                </CustomText>
                <CustomText className="text-primary-color">
                  Be part of something fresh.
                </CustomText>
              </View>

              <View className="flex-row gap-3">
                <InputField
                  className="flex-1 mb-6"
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <InputField
                  className="flex-1 mb-6"
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>

              <InputField
                className="mb-6"
                placeholder="Email Address"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />

              <InputField
                className="mb-6"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />

              <InputField
                className="mb-6"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              {registerMessage && (
                <CustomText
                  className={`${
                    registerMessage.type === "success"
                      ? "text-tertiary-color"
                      : "text-red-errors"
                  } mb-5`}
                >
                  {registerMessage.message}
                </CustomText>
              )}

              <Button buttonClassName="mb-8" onPress={handleRegister}>
                Register
              </Button>

              <View className="flex-row items-center mb-8">
                <View className="flex-1 h-0.5 bg-light-grey" />
                <CustomText className="mx-4 text-dark-grey">
                  Or register with
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
              <CustomText>Already have an account? </CustomText>
              <Pressable onPress={goToLogin} className="mb-2">
                <CustomText className="text-primary-color">Login</CustomText>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterScreen;
