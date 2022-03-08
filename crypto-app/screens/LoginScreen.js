import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TopHeader from "../components/TopHeader";
import SocialAuth from "../components/SocialAuth";
import { colors } from "../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import client from "../api/client";
import { useLogin } from "../context/LoginProvider";

const LoginScreen = ({ navigation }) => {
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [visibility, setVisibilty] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useLogin();
  const login = async () => {
    const values = {
      email,
      password,
    };
    try {
      const result = await client.post("/sign-in", {
        ...values,
      });
      console.log(result.data.user);
      setUser(result.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="black" />
      <ScrollView>
        <View style={styles.container}>
          <TopHeader title="Login" navigation={navigation} />
          <SocialAuth />
          <View style={styles.input_form_container}>
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
                placeholder="Enter Your Password"
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
          </View>
          <TouchableOpacity onPress={() => login()}>
            <LinearGradient
              colors={[colors.darkPurple, colors.lightPurple]}
              style={styles.button_container}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.bottom__container}>
            <Text style={styles.login__text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ ...styles.login__text, fontWeight: "bold" }}>
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#050507",
    flex: 1,
  },
  container: {
    padding: 20,
    marginTop: 20,
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
    marginVertical: 25,
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
