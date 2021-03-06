import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import Assets from "../components/Assets";
import Header from "../components/Header";

import { colors } from "../constants/theme";
const HomeScreen = () => {
  return (
    <View style={styles.homescreen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header />
      <Assets />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreen: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
});
