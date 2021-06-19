import React, { useEffect, useState } from 'react';
import './Coins.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getCoinId, removeTags } from '../../utilities/utilities';

const Coins = () => {
  let { coinLinkName } = useParams();
  let id = getCoinId(coinLinkName) || 'bitcoin';

  const [coin, setCoin] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/' + id)
      .then((res) => {
        setCoin(res.data);
        setDescription(removeTags(res.data.description.en));
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(coin);

  return (
    <div>
      <h1>ID: {coin.name}</h1>
      {description && <article>{description}</article>}
    </div>
  );
};

export default Coins;
