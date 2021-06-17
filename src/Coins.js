import React, { useEffect, useState } from 'react';
import './Coins.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import coinList from './coinList';

const Coins = () => {
  let { linkName } = useParams();
  let id = generateId(linkName);

  const [coin, setCoin] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/' + id)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>ID: {coin.name}</h1>
    </div>
  );
};

export default Coins;

function generateId(linkName) {
  const index = coinList.findIndex((x) => x.name === linkName);
  return index === -1 ? 'Nope' : coinList[index].id;
}
