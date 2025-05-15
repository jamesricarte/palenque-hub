import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  VideoCameraIcon,
  ChatBubbleOvalLeftIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import HomeTabScreen from "./tabs/HomeTabScreen";
import LiveStreamingTabScreen from "./tabs/LiveStreamingTabScreen";
import ChatTabScreen from "./tabs/ChatTabScreen";
import AccountTabScreen from "./tabs/AccountTabScreen";

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  const activeTintColor = "#FF5733";
  const inActiveTintColor = "#aaa";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeTintColor,
        tabBarInactiveTintColor: inActiveTintColor,
        tabBarLabelStyle: {
          fontFamily: "Poppins",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? activeTintColor : inActiveTintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="LiveStream"
        component={LiveStreamingTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <VideoCameraIcon
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatBubbleOvalLeftIcon
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon color={focused ? activeTintColor : inActiveTintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
