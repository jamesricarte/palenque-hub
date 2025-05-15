import { View, TextInput, TouchableOpacity } from "react-native";
import { BellIcon, ShoppingBagIcon } from "react-native-heroicons/outline";
import { getTextStyle } from "../utils/getTextStyle";

const TopNav = () => {
  return (
    <View className="flex-row items-center px-5 pb-5 pt-14 bg-primary-color">
      <TextInput
        style={getTextStyle()}
        placeholder="Search for products"
        className="flex-1 px-4 py-2 mr-3 bg-white rounded-lg"
      />
      <TouchableOpacity className="mr-2">
        <ShoppingBagIcon
          size={24}
          color="white"
          className="p-1 bg-white rounded-full"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <BellIcon
          size={24}
          color="white"
          className="p-1 bg-white rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;
