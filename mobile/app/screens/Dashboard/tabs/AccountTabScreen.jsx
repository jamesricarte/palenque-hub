import { CommonActions, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AccountTabScreen = ({ navigation }) => {
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
    <SafeAreaProvider>
      <SafeAreaView className="justify-between flex-1 px-6 py-4 bg-white">
        <View>
          <Text className="mb-4 text-2xl font-bold">Account Settings</Text>
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
    </SafeAreaProvider>
  );
};

export default AccountTabScreen;
