import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../assets/icons/google.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState(null);

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
            <View className="mb-20"/>
            <View className="absolute top-5 z-10">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={25} color="#9E9E9E" />
              </TouchableOpacity>
            </View>
            <View className="mb-8">
              <Text className="text-3xl font-bold">
                Create your account
              </Text>
              <Text style={{ color: "#F16B44" }} className="text">
                Be part of something fresh.
              </Text>
            </View>

            <View className="flex-row gap-3">
              <TextInput
                style={{
                  backgroundColor: "#EEEEEE",
                  color: "#9E9E9E",
                  borderColor: "#fff",
                }}
                placeholder="First Name"
                className="flex-1 px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={{
                  backgroundColor: "#EEEEEE",
                  color: "#9E9E9E",
                  borderColor: "#fff",
                }}
                placeholder="Last Name"
                className="flex-1 px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>

            <TextInput
              style={{
                backgroundColor: "#EEEEEE",
                color: "#9E9E9E",
                borderColor: "#fff",
              }}
              className="px-4 py-3 mb-6 text-base border border-gray-300 rounded-md"
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={{
                backgroundColor: "#EEEEEE",
                color: "#9E9E9E",
                borderColor: "#fff",
              }}
              className="px-4 py-3 mb-5 text-base border border-gray-300 rounded-md"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              style={{
                backgroundColor: "#EEEEEE",
                color: "#9E9E9E",
                borderColor: "#fff",
              }}
              className="px-4 py-3 mb-5 text-base border border-gray-300 rounded-md"
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            {registerMessage && (
              <Text
                className={`${
                  registerMessage.type === "success"
                    ? "text-green-500"
                    : "text-red-500 "
                } mb-5`}
              >
                {registerMessage.message}
              </Text>
            )}

            <TouchableOpacity
              style={{ backgroundColor: "#FF5733" }}
              className="py-4 mb-8 rounded-md"
              onPress={handleRegister}
            >
              <Text className="text-base font-bold text-center text-white">
                Register
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">Or register with</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            <TouchableOpacity style={{ borderColor: "#F16B44" }} className="flex-row px-4 py-3 mb-6 border border-gray-300 rounded-md">
              <Image
                source={GoogleLogo}
                style={{ width: 20, height: 20, marginRight: 90 }}
              />
              <Text style={{ color: "#FF5733" }} className="text-base">
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
              Already have an account?{" "}
              <Pressable
                onPress={() => navigation.navigate("Login")}
                className="mb-2"
              >
                <Text style={{ color: "#FF5733" }}>Login</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;
