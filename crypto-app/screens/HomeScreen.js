import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import FavCurrencies from "../components/FavCurrencies";
import Header from "../components/Header";

import { colors } from "../constants/theme";
const HomeScreen = () => {
  return (
    <View style={styles.homescreen}>
      <Header />
      <FavCurrencies />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreen: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
