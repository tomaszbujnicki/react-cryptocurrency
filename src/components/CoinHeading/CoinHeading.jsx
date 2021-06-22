import React from 'react';
import './CoinHeading.scss';

const CoinHeading = (props) => {
  return (
    <header className="CoinHeading">
      <img className="CoinHeading__image" src={props.image} alt=""></img>
      <h1 className="CoinHeading__title">{props.name}</h1>
      <span className="CoinHeading__symbol">{props.symbol}</span>
    </header>
  );
};

export default CoinHeading;
