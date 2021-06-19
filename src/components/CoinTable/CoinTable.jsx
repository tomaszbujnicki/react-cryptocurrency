import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CoinTable.scss';
import CoinPreview from '../CoinPreview';
import { getCoinLinkname } from '../../utilities/utilities';

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
      <div className=" head">
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
              <Link to={'/coins/' + getCoinLinkname(coin.id)}>
                <CoinPreview coin={coin} />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default CoinTable;
