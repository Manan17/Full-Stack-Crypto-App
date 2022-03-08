import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../constants/theme";
const TopHeader = ({ navigation, title }) => {
  return (
    <View>
      <View style={styles.top__container}>
        <View style={styles.button_container}>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            color="white"
            size={20}
          />
        </View>
        <Text style={styles.signup__text}>{title}</Text>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  top__container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button_container: {
    padding: 10,
    borderColor: colors.lightGray,
    elevation: 3,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signup__text: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
  },
});
