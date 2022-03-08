import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigator from "./components/MainNavigator";
import LoginProvider from "./context/LoginProvider";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  );
}
