import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "./homeScreen";
import colors from "./../Constants/Colors";
import palette from "./../res/palette";
import images from "./../res/palette";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const Stack = createStackNavigator();

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={25}
    color="white"
  />
);

export const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homescreen"
        component={homeScreen}
        options={({ navigation }) => ({
          title: "NexShop",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item iconName="md-camera" iconSize={25} color="white" />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item iconName="md-camera" iconSize={25} color="white" />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Styles = StyleSheet.create({
  headerLeftContainer: palette.header.headerLeftContainer,
  headerLeftImage: palette.header.headerLeftImage,
  headerRightContainer: palette.header.headerRightContainer,
  headerRightImage: palette.header.headerRightImage,
});
