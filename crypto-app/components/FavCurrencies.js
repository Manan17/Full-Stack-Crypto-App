import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PortfolioCard from "./PortfolioCard";
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
const FavCurrencies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FAVORITE CURRENCIES</Text>
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
            keyExtractor={item.id}
          />
        )}
      />
    </View>
  );
};

export default FavCurrencies;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingTop: 20,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 23,
    fontWeight: "700",
    color: "black",
  },
});
