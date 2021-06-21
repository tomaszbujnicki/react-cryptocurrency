import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoinTable.scss';
import CoinPreview from '../CoinPreview';
import { getCoinLinkname } from '../../utils';
import GET from '../../api';

function CoinTable(props) {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    GET.coinList(props.page)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, [props.page]);

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
        {Array.isArray(coins) &&
          coins.map((coin) => {
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
