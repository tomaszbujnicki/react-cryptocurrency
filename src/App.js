import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <h1>React Cryptocurrency API</h1>
      <div className="coin-search">
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <ul>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              coinName={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            ></Coin>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
