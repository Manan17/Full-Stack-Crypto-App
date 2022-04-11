import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import CoinsScreen from "../screens/CoinsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useLogin } from "../context/LoginProvider";
import { colors } from "../constants/theme";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const MainNavigator = () => {
  const { user } = useLogin();
  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#86E7B3"
          inactiveColor="lightgray"
          barStyle={{
            backgroundColor: "white",
          }}
          labeled={false}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon type="entotype" name="home" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Coins"
            component={CoinsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon
                  type="font-awesome-5"
                  name="coins"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon type="ionicons" name="person" size={30} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainNavigator;

const styles = StyleSheet.create({});
