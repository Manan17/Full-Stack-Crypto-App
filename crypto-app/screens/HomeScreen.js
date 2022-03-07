import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";

const portfolioData = [
  {
    id: 1,
    imageUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "BTC",
    amount: "$145,000",
    rate: "20%",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    name: "ETH",
    amount: "$25,000",
    rate: "12%",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    name: "ADA",
    amount: "$45,000",
    rate: "10%",
  },
  {
    id: 4,
    imageUrl:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    name: "XRP",
    amount: "$67,980",
    rate: "3%",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.homescreen}>
      <Header />
      <Card />
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          My Portfolio
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={portfolioData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PortfolioCard
              imageUrl={item.imageUrl}
              name={item.name}
              amount={item.amount}
              rate={item.rate}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreen: {
    backgroundColor: "#EFF8FF",
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 20,
  },
});
