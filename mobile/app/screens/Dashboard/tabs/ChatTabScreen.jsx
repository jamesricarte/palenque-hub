import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ChatTabScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>ChatTabScreen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ChatTabScreen;
