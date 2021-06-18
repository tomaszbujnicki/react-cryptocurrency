import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CoinTable.scss';

function CoinTable() {
  const [coins, setCoins] = useState([]);

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

  return (
    <div className="coin-table">
      <div className="coin head">
        <p>Coin</p>
        <p>Symbol</p>
        <p>Price</p>
        <p>24h</p>
        <p>24h Volume</p>
        <p>Market Cap</p>
      </div>
      <ol>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              <Link to={getCoinLink(coin.name)}>
                <div className="coin">
                  <img src={coin.image} alt="crypto" />
                  <h3>{coin.name}</h3>
                  <p className="coin-symbol">{coin.symbol}</p>
                  <p className="coin-price">
                    ${coin.current_price.toLocaleString()}
                  </p>
                  <p
                    className={
                      coin.price_change_percentage_24h < 0
                        ? 'coin-percent red'
                        : 'coin-percent green'
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>

                  <p className="coin-volume">
                    ${coin.total_volume.toLocaleString()}
                  </p>
                  <p className="coin-marketcap">
                    ${coin.market_cap.toLocaleString()}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
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

export default CoinTable;
