import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/theme";
import TopHeader from "../components/TopHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import client from "../api/client";
import SocialAuth from "../components/SocialAuth";
const SignupScreen = ({ navigation }) => {
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [visibility, setVisibilty] = useState(false);
  const [visibility2, setVisibilty2] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const signUp = async () => {
    const values = {
      userName,
      password,
      email,
      confirmpassword,
    };

    const result = await client.post("/create-user", {
      ...values,
    });
    setUserName("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="black" />
      <ScrollView>
        <View style={styles.container}>
          <TopHeader navigation={navigation} title="Sign Up" />
          <SocialAuth />
          <View style={styles.input_form_container}>
            <TextInput
              placeholder="Enter Username"
              style={{
                ...styles.input_container,
                borderColor: `${focus1 ? colors.darkPurple : "#b8b8b850"}`,
              }}
              placeholderTextColor={colors.lightGray}
              onFocus={() => setFocus1(true)}
              onBlur={() => setFocus1(false)}
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
            <TextInput
              placeholder="Enter Email"
              style={{
                ...styles.input_container,
                borderColor: `${focus2 ? colors.darkPurple : "#b8b8b850"}`,
              }}
              placeholderTextColor={colors.lightGray}
              onFocus={() => setFocus2(true)}
              onBlur={() => setFocus2(false)}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!visibility}
                placeholder="Choose a Strong Password"
                style={{
                  ...styles.input_container,
                  borderColor: `${focus3 ? colors.darkPurple : "#b8b8b850"}`,
                }}
                placeholderTextColor={colors.lightGray}
                onFocus={() => setFocus3(true)}
                onBlur={() => setFocus3(false)}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => setVisibilty(!visibility)}
              >
                <Ionicons
                  name={visibility ? "eye-off" : "eye"}
                  color="white"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!visibility2}
                placeholder="Confirm Password"
                style={{
                  ...styles.input_container,
                  borderColor: `${focus4 ? colors.darkPurple : "#b8b8b850"}`,
                }}
                placeholderTextColor={colors.lightGray}
                onFocus={() => setFocus4(true)}
                onBlur={() => setFocus4(false)}
                value={confirmpassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => setVisibilty2(!visibility2)}
              >
                <Ionicons
                  name={visibility2 ? "eye-off" : "eye"}
                  color="white"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                signUp();
              }}
            >
              <LinearGradient
                colors={[colors.darkPurple, colors.lightPurple]}
                style={styles.button_container}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  Create Account
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.bottom__container}>
              <Text style={styles.login__text}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ ...styles.login__text, fontWeight: "bold" }}>
                  {" "}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 20,
  },
  container__text: {
    color: "white",
  },

  input_form_container: {
    marginTop: 20,
  },
  input_container: {
    color: "white",
    height: 70,
    fontSize: 18,
    borderColor: "#b8b8b850",
    borderWidth: 2,
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button_container: {
    // backgroundColor: colors.darkPurple,
    padding: 20,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    width: 300,
    alignSelf: "center",
  },
  login__text: {
    color: "white",
    fontSize: 14,
  },
  bottom__container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
