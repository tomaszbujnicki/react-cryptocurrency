import React, { useState, useEffect } from 'react';
import './CoinList.scss';
import GET from '../../api';
import { getCoinLinkname } from '../../utils';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import CoinListHeader from './CoinListHeader';
import CoinListElement from './CoinListElement';

function CoinList(props) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    GET.coinList(props.page)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, [props.page]);

  if (coins.length === 0) {
    return <Loading />;
  }

  return (
    <div className="CoinList">
      <CoinListHeader />
      <ol className="CoinList__ol">
        {coins.map((coin) => {
          return (
            <li className="CoinList__li" key={coin.id}>
              <Link
                className="CoinList__a"
                to={'/coins/' + getCoinLinkname(coin.id)}
              >
                <CoinListElement coin={coin} />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default CoinList;
