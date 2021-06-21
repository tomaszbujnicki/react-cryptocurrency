import React, { useEffect, useState } from 'react';
import './Coins.scss';
import { removeTags } from '../../utils';
import GET from '../../api';

const Coins = (props) => {
  let id = props.id;

  const [coin, setCoin] = useState([]);

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!coin) {
    return <div className="coins">Loading...</div>;
  }

  return (
    <div className="coins">
      <header className="coins__header">
        <img
          className="coins__image"
          src={coin.image ? coin.image.small : ''}
          alt=""
        ></img>
        <h2 className="coins__title">{coin.name}</h2>
      </header>

      {coin.description && (
        <article className="coins__article">
          <h3 className="coins__heading">What is {coin.name}</h3>
          <p>{removeTags(coin.description.en)}</p>
        </article>
      )}
    </div>
  );
};

export default Coins;
