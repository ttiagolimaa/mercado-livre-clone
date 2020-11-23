import React from "react";
import { View, Image, Alert } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import styles from "./styles";

const Drawer = createDrawerNavigator()

const Index = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen />
    </Drawer.Navigator>
  )
};

export default Index;
