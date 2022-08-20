import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { coinsContext } from "../context/exchangeContext";
import { GETcoin } from "../services/exchangeConect";

const AboutCoin = () => {
  const coinName = useParams();

  const [coin, setCoin] = useState({});

  useEffect(() => {
    const fechData = async () => {
      const { data } = await GETcoin(coinName.coinId);
      try {
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    fechData();
  }, []);

  // market_price_varibble_connect_server
  let market_24h = coin.market_data
    ? coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)
    : null;
  let market_7d = coin.market_data
    ? coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)
    : null;
  let market_30d = coin.market_data
    ? coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)
    : null;
  let market_6m = coin.market_data
    ? coin.market_data.price_change_percentage_200d_in_currency.usd.toFixed(2)
    : null;

  return (
    <div className="container about-coin">
      <div
        className="about-coin-img"
        style={{ "textAlign":"center"}}
      >
        {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
        <div style={{"margin":"20px" ,"fontSize":"2rem" ,"fontWeight":"800"}}>
          {coin.name}
        </div>
      </div>

      <table className="about-coin__table">
        <thead>
          <tr>
            <th>24h</th>
            <th>7days</th>
            <th>30days</th>
            <th>6month</th>
          </tr>
        </thead>
        <tbody className="tab-content">
          <tr>
            <th style={market_24h > 0 ? { color: "green" } : { color: "red" }}>
              {market_24h}
            </th>
            <th style={market_7d > 0 ? { color: "green" } : { color: "red" }}>
              {market_7d}
            </th>
            <th style={market_30d > 0 ? { color: "green" } : { color: "red" }}>
              {market_30d}
            </th>
            <th style={market_6m > 0 ? { color: "green" } : { color: "red" }}>
              {market_6m}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AboutCoin;
