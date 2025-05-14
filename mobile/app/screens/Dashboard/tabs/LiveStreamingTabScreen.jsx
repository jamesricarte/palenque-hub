import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const LiveStreamingTabScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>LiveStreamingTabScreen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LiveStreamingTabScreen;
