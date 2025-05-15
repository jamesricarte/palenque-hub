import { TextInput } from "react-native";
import { getTextStyle } from "../utils/getTextStyle";
import { colors } from "../styles/colors";

const InputField = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  className,
}) => {
  return (
    <TextInput
      style={getTextStyle()}
      className={`px-4 py-4 border-none rounded-md bg-light-grey text-[#393939] ${className}`}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.darkGrey}
      includeFontPadding={false}
    ></TextInput>
  );
};

export default InputField;
