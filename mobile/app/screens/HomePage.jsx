import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeIcon, VideoCameraIcon, ChatBubbleOvalLeftIcon, UserIcon, BellIcon, ShoppingBagIcon } from "react-native-heroicons/outline";

const categories = [
  { label: "Meat", image: require("../assets/categories/meat.jpg") },
  { label: "Poultry", image: require("../assets/categories/poultry.jpg") },
  { label: "Sea Food", image: require("../assets/categories/seafood.jpg") },
  { label: "Vegetables", image: require("../assets/categories/vegetables.jpg") },
];

const vendors = Array(6).fill({ name: "Vendor Shop Name", location: "Location" });

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="items-center justify-center flex-1">
         <View className="flex-1 bg-white">
          {/* Header */}
          <View className="flex-row items-center p-4 bg-orange-500 rounded-b-3xl">
            <TextInput
              placeholder="Search for products"
              className="flex-1 bg-white rounded-lg px-4 py-2 mr-3"
            />
            <TouchableOpacity className="mr-2">
              <ShoppingBagIcon size={24} color="white" className="bg-gray-200 rounded-full p-1" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BellIcon size={24} color="white" className="bg-gray-200 rounded-full p-1" />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <View className="flex-row justify-around px-4 mt-4">
            {categories.map((item, index) => (
              <View key={index} className="items-center">
                <Image source={item.image} className="w-14 h-14 rounded-full" />
                <Text className="mt-1 text-sm">{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Vendor Grid */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <View className="flex-row flex-wrap justify-between">
              {vendors.map((vendor, index) => (
                <View key={index} className="w-[48%] mb-4">
                  <View className="bg-gray-200 h-28 rounded-md" />
                  <Text className="mt-2 font-semibold">{vendor.name}</Text>
                  <Text className="text-green-500">{vendor.location}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Bottom Navigation */}
          <View className="flex-row justify-around py-3 border-t border-gray-200">
            <TouchableOpacity className="items-center">
              <HomeIcon size={24} color="#FF5733" />
              <Text className="text-xs">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
              <VideoCameraIcon size={24} color="#aaa" />
              <Text className="text-xs">Watch Live</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
              <ChatBubbleOvalLeftIcon size={24} color="#aaa" />
              <Text className="text-xs">Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center" onPress={() => navigation.navigate("Account")}>
              <UserIcon size={24} color="#aaa" />
              <Text className="text-xs">Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomePage;
