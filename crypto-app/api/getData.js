import axios from "axios";

export const getCoins = async () => {
  const result = await axios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  console.log("Hello");
  console.log(result.data[0].name);
};
