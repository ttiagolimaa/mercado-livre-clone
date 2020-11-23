import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./view/Home";
import Login from "./view/Login";
import Signup from "./view/Signup";
import RedefinePass from "./view/RedefinePass";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="redefinepass" component={RedefinePass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
