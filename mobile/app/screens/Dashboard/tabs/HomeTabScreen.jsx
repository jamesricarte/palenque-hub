import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import CustomText from "../../../components/CustomText";
import TopNav from "../../../components/TopNav";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { StatusBar } from "react-native";

export const categories = [
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

export const vendors = Array(6).fill({
  name: "Vendor Shop Name",
  location: "Location",
});

const HomeTabScreen = () => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        StatusBar.setBarStyle("light-content");
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

      <View className="items-center justify-center flex-1">
        <TopNav />
        <View className="flex-1 bg-primary-color">
          <View className="flex-1 bg-white rounded-t-3xl">
            <ScrollView>
              {/* Categories */}
              <View className="flex-row justify-between gap-3 mx-6 mt-8 mb-1">
                {categories.map((item, index) => (
                  <TouchableOpacity key={index} className="items-center">
                    <Image
                      source={item.image}
                      className="w-16 h-16 border rounded-md border-primary-color"
                    />
                    <CustomText className="mt-1 text-sm">
                      {item.label}
                    </CustomText>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Vendor Grid */}

              <View className="flex-row flex-wrap justify-between p-6">
                {vendors.map((vendor, index) => (
                  <TouchableOpacity key={index} className="w-[48%] mb-4">
                    <View className="bg-[#D9D9D9] rounded-md h-28" />
                    <CustomText className="mt-2 font-semibold">
                      {vendor.name}
                    </CustomText>
                    <CustomText className="text-tertiary-color">
                      {vendor.location}
                    </CustomText>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeTabScreen;
