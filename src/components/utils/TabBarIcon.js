import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

//These generate the icons for the bottom navigation bar of the app.
export default (props) => {
  const { isDarkmode } = useTheme();
  return (
    <Ionicons
      name={props.icon}
      style={{ marginBottom: -7 }}
      size={24}
      //This color tag changes the color based on the Darkmode variable. Learn your ternary operators!
      color={
        props.focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)"
      }
    />
  );
};
