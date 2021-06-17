import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { Link } from 'react-router-dom';

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
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
            <li>
              <Link to={getCoinLink(coin.name)}>
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getCoinLink(coinName) {
  const reg0 = /τ/g;
  const reg = /[ ._]/g;
  const reg2 = /[^a-zA-Z0-9-]/g;

  coinName = coinName.replace(reg0, 't-');
  coinName = coinName.replace(reg, '-');
  coinName = coinName.replace(reg2, '');
  coinName = coinName.toLowerCase();

  const link = '/coins/' + coinName;

  return link;
}

export default Home;
