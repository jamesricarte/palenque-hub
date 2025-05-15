import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const Button = ({
  onPress,
  variant = "primary",
  children = "button",
  buttonClassName,
  textClassName,
}) => {
  const styles = {
    primary: {
      button: "bg-primary-color py-3.5 rounded-lg",
      text: "text-lg font-semibold text-center text-white",
    },
    secondary: {
      button: "py-3 border rounded-lg border-primary-color",
      text: "text-lg font-semibold text-center text-primary-color",
    },
    socials: {
      button: "py-3 border rounded-lg border-primary-color",
      text: "text-base text-primary-color text-center",
    },
  };

  return (
    <TouchableOpacity
      className={`${styles[variant].button} ${buttonClassName}`}
      onPress={onPress}
    >
      <CustomText className={`${styles[variant].text} ${textClassName}`}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
