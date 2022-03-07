import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CoinsScreen from "./screens/CoinsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";
import { Icon } from "react-native-elements";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  const [auth, setAuth] = useState(null);
  if (auth) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#63B4B8"
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
        <Stack.Navigator initialRouteName="Onboarding" >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen options={{
            headerShown:false
          }} name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
