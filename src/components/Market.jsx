import { useContext } from "react"; 
import { coinsContext } from "../context/exchangeContext"; 

import Coin from "./Coin";
const Market = () => {
  const {coins} =useContext(coinsContext)

  return (
    <section className="container">
      <header className="column-market">
        <ul>
          <li>
            <h2>#</h2>
          </li>
          <li>
            <h2>Coin</h2>
          </li>
          <li>
            <h2>Price</h2>
          </li>
          <li>
            <h2>24h</h2>
          </li>
          <li>
            <h2>Volume</h2>
          </li>
          <li>
            <h2>Mkt cap</h2>
          </li>
        </ul>
      </header>
    {coins.map(item =>(
      <Coin
        key={item.id}
        name={item.name}
        img={item.image}
        price={item.current_price}
        rank={item.market_cap_rank}
        volume={item.total_volume}
        change={item.market_cap_change_percentage_24h}
        cap={item.market_cap}
        id={item.id}
      />
    ))}
    </section>
  );
};

export default Market;
