import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import google from "../assets/google.png";
import facebook from "../assets/apple-logo.png"
const SocialAuth = () => {
  return (
    <View>
      <Text style={styles.options__text}>
        Sign Up with one of the following options
      </Text>
      <View style={styles.social_media_container}>
        <TouchableOpacity style={styles.image__container}>
          <Image source={google} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image__container}>
          <Image source={facebook} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
  options__text: {
    marginTop: 40,
    color: colors.lightGray,
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
  social_media_container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image__container: {
    backgroundColor: "#b8b8b840",
    width: 170,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
});
