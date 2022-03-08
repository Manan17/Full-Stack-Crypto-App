import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
const OnboardingScreen = ({ navigation }) => {
  // const fetchApi = async () => {
  //   try {
  //     const res = await axios.get("http://192.168.29.118:8000");
  //     console.log(res.data)
      
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // useEffect(() => {
  //   fetchApi()
  // },[])
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
