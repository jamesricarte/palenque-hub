import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { View, Text, StatusBar } from "react-native";

const LiveStreamingTabScreen = () => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        StatusBar.setBarStyle("dark-content");
      }, 10);
      return () => {};
    }, [])
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View className="p-6 pt-12">
        <Text>LiveStreamingTabScreen</Text>
      </View>
    </>
  );
};

export default LiveStreamingTabScreen;
