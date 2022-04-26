import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Asset from "./Asset";

const Assets = () => {
  return (
    <View style={styles.assets}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.headerText}>Assets</Text>
        <Text style={{ ...styles.headerText, color: "#86E7B3" }}>
          View More
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row" }}
      >
        <Asset />
        <Asset />
        <Asset />
      </ScrollView>
    </View>
  );
};

export default Assets;

const styles = StyleSheet.create({
  assets: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
