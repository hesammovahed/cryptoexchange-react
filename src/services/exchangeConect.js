import axios from "axios";

const URL_SERVER =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

export const GETcoins = () => {
  return axios.get(URL_SERVER);
};

export const GETcoin =(coinName)=>{
  return axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`);
};