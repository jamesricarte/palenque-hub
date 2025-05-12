import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountPage = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-between bg-white px-6 py-4">
      <View>
        <Text className="text-2xl font-bold mb-4">Account Settings</Text>
        {/* Add more account info/settings here if needed */}
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#FF5733" }}
        className="p-3 rounded-md"
        onPress={() => navigation.navigate("Login")} // or your logout logic
      >
        <Text className="text-white text-center font-bold text-base">
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountPage;
