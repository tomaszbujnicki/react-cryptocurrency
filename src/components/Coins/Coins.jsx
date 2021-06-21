import React, { useEffect, useState } from 'react';
import './Coins.scss';
import { useParams } from 'react-router-dom';
import { getCoinId, removeTags } from '../../utils';
import GET from '../../api';

const Coins = () => {
  let { coinLinkName } = useParams();
  let id = getCoinId(coinLinkName) || 'bitcoin';

  const [coin, setCoin] = useState([]);

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>ID: {coin.name}</h1>
      {coin.description && <article>{removeTags(coin.description.en)}</article>}
    </div>
  );
};

export default Coins;
