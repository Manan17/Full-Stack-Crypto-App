import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import bitcoin from "../assets/bitcoin.png";
import Feather from "react-native-vector-icons/Feather";
const Asset = () => {
  return (
    <View style={styles.asset}>
      <View style={styles.container}>
        <Image source={bitcoin} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={{ fontSize: 30, fontWeight: "700" }}>BTC</Text>
          <Text style={{ fontSize: 16, color: "#5D5C5D" }}>Bitcoin</Text>
        </View>
        <View style={styles.percent}>
          <Feather name="arrow-up-right" size={20} color="white" />
          <Text style={{ color: "white" }}>15.3%</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#BEBEBE", fontSize: 16 }}>Portfolio</Text>
          <Text style={{ fontSize: 27, fontWeight: "700" }}>$26.46</Text>
        </View>
        <Text style={styles.quantityText}>0.0012BTC</Text>
      </View>
    </View>
  );
};

export default Asset;

const styles = StyleSheet.create({
  asset: {
    backgroundColor: "white",
    width: 300,
    marginVertical: 20,
    elevation: 3,
    padding: 20,
    borderRadius: 15,
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percent: {
    flexDirection: "row",
    backgroundColor: "#88DDB4",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  quantityText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#5D5C5D",
    alignSelf: "flex-end",
  },
});
