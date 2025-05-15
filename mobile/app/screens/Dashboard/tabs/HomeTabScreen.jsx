import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

import { BellIcon, ShoppingBagIcon } from "react-native-heroicons/outline";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getTextStyle } from "../../../utils/getTextStyle";
import CustomText from "../../../components/CustomText";

const categories = [
  { label: "Meat", image: require("../../../assets/categories/meat.jpg") },
  {
    label: "Poultry",
    image: require("../../../assets/categories/poultry.jpg"),
  },
  {
    label: "Sea Food",
    image: require("../../../assets/categories/seafood.jpg"),
  },
  {
    label: "Vegetables",
    image: require("../../../assets/categories/vegetables.jpg"),
  },
];

const vendors = Array(6).fill({
  name: "Vendor Shop Name",
  location: "Location",
});

const HomeTabScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="items-center justify-center flex-1">
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="flex-row items-center p-4 bg-[#F16B44] rounded-b-3xl">
            <TextInput
              style={getTextStyle()}
              placeholder="Search for products"
              className="flex-1 px-4 py-2 mr-3 bg-white rounded-lg"
            />
            <TouchableOpacity className="mr-2">
              <ShoppingBagIcon
                size={24}
                color="white"
                className="p-1 bg-gray-200 rounded-full"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <BellIcon
                size={24}
                color="white"
                className="p-1 bg-gray-200 rounded-full"
              />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <View className="flex-row justify-around px-4 mt-4">
            {categories.map((item, index) => (
              <View key={index} className="items-center">
                <Image source={item.image} className="rounded-full w-14 h-14" />
                <CustomText className="mt-1 text-sm">{item.label}</CustomText>
              </View>
            ))}
          </View>

          {/* Vendor Grid */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <View className="flex-row flex-wrap justify-between">
              {vendors.map((vendor, index) => (
                <View key={index} className="w-[48%] mb-4">
                  <View className="bg-gray-200 rounded-md h-28" />
                  <CustomText className="mt-2 font-semibold">
                    {vendor.name}
                  </CustomText>
                  <CustomText className="text-green-500">
                    {vendor.location}
                  </CustomText>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeTabScreen;
