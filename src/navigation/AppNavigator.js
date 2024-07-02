import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme} from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";

import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Rulebook from "../screens/Rulebook";

//This is the navigation bar at the bottom of the app.
const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    //This component creates the navigator, probably a preset from RapiUI or React itself.
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
    </MainStack.Navigator>
  );
};

//This is going to return the actual navigator component to implement it in the app. Each screen in the app is included in the component.
const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* Each of the following Tabs.Screens practically represents a button. When clicked, the icon is focused. Also, the comment symbols changed. */}
      <Tabs.Screen
        name="Scoring"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"calculator"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Rulebook"
        component={Rulebook}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"book"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Help"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"information-circle"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    //The NavigationContainer must wrap the Main component to allow the navigator to be used from any page at any place.
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
