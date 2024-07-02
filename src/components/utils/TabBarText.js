import React from "react";
import { Text, themeColor, useTheme } from "react-native-rapi-ui";

//This should control the font of the text in the navigation bar.
export default (props) => {
  const { isDarkmode } = useTheme();
  return (
    //For some reason, this doesn't show well when deploying the app, so Apple rejected it, and I stopped using this code.
    //You should be able to see a TabBarIcon import in AppNavigator.js but not a TabBarText import.
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: props.focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)",
        fontSize: 10,
      }}
    >
      {props.title}
    </Text>
  );
};
