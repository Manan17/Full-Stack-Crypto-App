import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#787A91",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Manan Shah
        </Text>
      </View>
      <Avatar
        source={{
          uri: "https://i2-prod.manchestereveningnews.co.uk/incoming/article21678284.ece/ALTERNATES/s615/1_GettyImages-1342424026.jpg",
        }}
        rounded
        size={60}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
