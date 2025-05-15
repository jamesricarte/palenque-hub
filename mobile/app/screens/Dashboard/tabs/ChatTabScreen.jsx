import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StatusBar } from "react-native";
import { useCallback } from "react";

const ChatTabScreen = () => {
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
        <Text>ChatTabScreen</Text>
      </View>
    </>
  );
};

export default ChatTabScreen;
