import { View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "../../components/CustomText";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="justify-center flex-1">
        <ImageBackground
          source={require("../../assets/backgrounds/market-bg-orig.png")} // Your gradient-included image
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          {/* Content container */}
          <View style={{ paddingHorizontal: 24, paddingBottom: 40 }}>
            {/* Logo and Subtitle */}
            <View style={{ alignItems: "center", marginBottom: 24 }}>
              <Image
                source={require("../../assets/logos/logo.png")}
                style={{ width: 240, height: 60 }}
              />
              <CustomText style={{ color: "#9E9E9E", fontSize: 18 }}>
                From Market to Your Doorstep
              </CustomText>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#FF5733",
                paddingVertical: 14,
                borderRadius: 8,
                marginBottom: 12,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <CustomText
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
                className="font-semibold"
              >
                Login
              </CustomText>
            </TouchableOpacity>

            {/* Register Button */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#FF5733",
                paddingVertical: 14,
                borderRadius: 8,
                marginBottom: 24,
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <CustomText
                style={{
                  color: "#FF5733",
                  textAlign: "center",
                  fontSize: 16,
                }}
                className="font-semibold"
              >
                Register
              </CustomText>
            </TouchableOpacity>

            {/* Social Icons */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <FontAwesome
                name="facebook-square"
                size={24}
                color="#9E9E9E"
                style={{ marginHorizontal: 10 }}
              />
              <FontAwesome
                name="instagram"
                size={24}
                color="#9E9E9E"
                style={{ marginHorizontal: 10 }}
              />
            </View>
            <CustomText
              style={{ textAlign: "center", color: "#9E9E9E", fontSize: 12 }}
            >
              Connect with us
            </CustomText>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;
