import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../constants/theme";
import google from "../assets/googlelogo.png";
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="black" />
      <View style={styles.container}>
        <View style={styles.top__container}>
          <View style={styles.button_container}>
            <MaterialIcons
              onPress={() => navigation.goBack()}
              name="arrow-back-ios"
              color="white"
              size={25}
            />
          </View>
          <Text style={styles.signup__text}>Sign Up</Text>
        </View>
        <Text style={styles.options__text}>
          Sign Up with one of the following options
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#b8b8b840",
              width: 180,
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 20,
            }}
          >
            <Image
              source={google}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#050507",
    flex: 1,
  },
  container: {
    padding: 20,
  },
  container__text: {
    color: "white",
  },
  top__container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button_container: {
    padding: 10,
    borderColor: colors.lightGray,
    elevation: 3,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signup__text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
  },
  options__text: {
    marginTop: 40,
    color: colors.lightGray,
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
});
