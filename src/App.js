import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import { GETcoins } from "./services/exchangeConect";
import { coinsContext } from "./context/exchangeContext";

import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const { data } = await GETcoins();
      try {
        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };
    fechData();
  }, []);

  return (
    <>
      <coinsContext.Provider value={{ coins, setCoins }}>
        <Navbar />
        <Outlet />
      </coinsContext.Provider>
    </>
  );
}

export default App;
