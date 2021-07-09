import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import './HomePage.scss';
import CoinList from '../../components/CoinList';
import GET from '../../api';

function HomePage() {
  const [coins, setCoins] = useState([]);
  const page = 1;

  useEffect(() => {
    GET.coinList(page)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, [page]);

  if (coins.length === 0) {
    return <Loading />;
  }
  return <CoinList coins={coins} />;
}

export default HomePage;
