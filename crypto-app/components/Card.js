import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../constants/theme";

const Card = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text
          style={{
            color: "white",
          }}
        >
          Balance
        </Text>
        <Text
          style={{
            color: "#EFF8FF",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          $450,000
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
            }}
          >
            Monthly Profit
          </Text>
          <Text
            style={{
              color: "#EFF8FF",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            $2000
          </Text>
        </View>
        <View
          style={{
            padding: 6,
            backgroundColor: "rgba(255,255,255, 0.3)",
            height: 35,
            borderRadius: 40,
            alignSelf: "flex-end",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon type="entypo" name="triangle-up" size={15} color="lightgreen" />
          <Text
            style={{
              color: "white",
              marginLeft: 5,
            }}
          >
            + 10%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightPurple,
    padding: 30,
    marginTop: 30,
    borderRadius: 30,
  },
});
