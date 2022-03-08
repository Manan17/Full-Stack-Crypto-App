import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useLogin } from "../context/LoginProvider";

const ProfileScreen = () => {
  const { setUser } = useLogin();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Log Out" onPress={() => setUser(null)} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
