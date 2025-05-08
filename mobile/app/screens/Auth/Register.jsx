import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from "../../assets/icons/google.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import { API_URL } from "@env";
import axios from "axios";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    axios
      .post(`${API_URL}/api/users/register`, {
        firstName: firstName,
        lastName: lastName,
        emailOrPhone: emailOrPhone,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Login");
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
                Join Palenque! Register to Our App Today
              </Text>
            </View>

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                className="px-4 mb-4"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                className="px-4 mb-4"
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
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
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
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: "#EEEEEE",
    color: "#9E9E9E",
  },
});

export default Register;
