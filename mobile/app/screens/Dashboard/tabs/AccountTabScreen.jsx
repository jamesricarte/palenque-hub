import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { View, TouchableOpacity, StatusBar } from "react-native";
import CustomText from "../../../components/CustomText";
import { useCallback } from "react";

const AccountTabScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        StatusBar.setBarStyle("dark-content");
      }, 10);
      return () => {};
    }, [])
  );

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
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View className="justify-between flex-1 px-6 py-4 bg-white pt-14">
        <View>
          <CustomText className="mb-4 text-2xl font-bold">
            Account Settings
          </CustomText>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: "#FF5733" }}
          className="p-3 rounded-md"
          onPress={logout} // or your logout logic
        >
          <CustomText className="text-base font-bold text-center text-white">
            Logout
          </CustomText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountTabScreen;
