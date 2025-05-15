import { View, ImageBackground, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "../../components/CustomText";
import Button from "../../components/Button";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const WelcomeScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <>
      <StatusBar style="light" />
      <View className="justify-center flex-1">
        <ImageBackground
          source={require("../../assets/backgrounds/market-bg-orig.png")}
          className="justify-end flex-1 object-cover"
        >
          <View className="px-6 pb-10">
            <View className="items-center mb-6">
              <Image
                source={require("../../assets/logos/logo.png")}
                className="w-[240px] h-16"
              />
              <CustomText className="text-lg text-dark-grey">
                From Market to Your Doorstep
              </CustomText>
            </View>

            <Button
              variant="primary"
              buttonClassName="mb-3"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>

            <Button
              variant="secondary"
              buttonClassName="mb-6"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>

            {/* Social Icons */}
            <View className="flex-row justify-center mb-2">
              <FontAwesome
                name="facebook-square"
                size={24}
                color="#9E9E9E"
                className="mx-2"
              />
              <FontAwesome
                name="instagram"
                size={24}
                color="#9E9E9E"
                className="mx-2"
              />
            </View>
            <CustomText className="text-sm text-center text-dark-grey">
              Connect with us
            </CustomText>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default WelcomeScreen;
