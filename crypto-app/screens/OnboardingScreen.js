import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>OnboardingScreen</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
