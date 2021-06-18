import React, { useEffect, useState } from 'react';
import './Coins.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import coinList from '../../utilities/coinList';

const Coins = () => {
  let { linkName } = useParams();
  let id = generateId(linkName);

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

function generateId(linkName) {
  const index = coinList.findIndex((x) => x.name === linkName);
  return index === -1 ? 'Nope' : coinList[index].id;
}

function removeTags(str) {
  if (str === null || str === '') return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, '');
}
