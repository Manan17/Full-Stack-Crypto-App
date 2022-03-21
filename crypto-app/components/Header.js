import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import menuLogo from "../assets/menu.png";
import { colors } from "../constants/theme";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <StatusBar backgroundColor={colors.offBlue} barStyle={"dark-content"} />
        <Avatar
          source={{
            uri: "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article21487067.ece/ALTERNATES/s1200c/0_GettyImages-1337497847.jpg",
          }}
          rounded
          size={60}
        />

        <Image style={styles.menuLogo} source={menuLogo} />
      </View>
      <Text style={styles.amountText}>$564,322.56</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.percentContainer}>
          <Text style={{ color: colors.darkGray }}>+3.78%</Text>
        </View>
        <Text style={{ color: colors.darkGray }}>+$67.22</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offBlue,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
    paddingTop: 30,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuLogo: {
    width: 18,
    height: 18,
  },
  amountText: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  percentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 20,
    marginRight: 10,
  },
});
