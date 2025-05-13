import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountPage = ({ navigation }) => {
  const customNavigation = useNavigation();

  const logout = () => {
    customNavigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "WelcomeScreen" }, { name: "Login" }],
      })
    );
  };
  return (
    <SafeAreaView className="justify-between flex-1 px-6 py-4 bg-white">
      <View>
        <Text className="mb-4 text-2xl font-bold">Account Settings</Text>
        {/* Add more account info/settings here if needed */}
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#FF5733" }}
        className="p-3 rounded-md"
        onPress={logout} // or your logout logic
      >
        <Text className="text-base font-bold text-center text-white">
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountPage;
