import { Text } from "react-native";

export default function CustomText({ className = "", children, ...props }) {
  let newClassName = className;
  let fontClass = "font-poppins";

  if (className.includes("font-bold")) {
    fontClass = "font-poppins-bold";
    newClassName = className.replace(/\bfont-bold\b/, "").trim();
  } else if (className.includes("font-semibold")) {
    fontClass = "font-poppins-semibold";
    newClassName = className.replace(/\bfont-semibold\b/, "").trim();
  }

  return (
    <Text
      className={`${fontClass} ${newClassName}`}
      {...props}
      includeFontPadding={false}
    >
      {children}
    </Text>
  );
}
