import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const PortfolioCard = ({ imageUrl, name, amount, rate }) => {
  return (
    <View style={styles.portfolioCard}>
      <View style={styles.portfolioCard__upperContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.portfolioCard__image}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {name}
        </Text>
      </View>
      <View style={styles.portfolioCard__lowerContainer}>
        <Text
          style={{
            fontSize: 16,
            color: "#cccccc",
          }}
        >
          Portfolio
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {amount}
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 15,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-end",
            }}
          >
            <Icon
              type="entypo"
              name="triangle-up"
              size={15}
              color="lightgreen"
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#6ECB63",
              }}
            >
              + {rate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({
  portfolioCard: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 20,
    width: Dimensions.get("screen").width / 1.8,
    paddingBottom: 30,
    elevation: 2,
    borderRadius: 30,
    marginRight: 20,
    marginBottom: 20,
  },
  portfolioCard__upperContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  portfolioCard__lowerContainer: {
    marginTop: 30,
  },
  portfolioCard__image: {
    width: 50,
    height: 50,
  },
});
