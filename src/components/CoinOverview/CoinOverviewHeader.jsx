import React from 'react';
import './CoinOverviewHeader.scss';

const CoinOverviewHeader = (props) => {
  const coin = props.coin;
  const image = coin.image ? coin.image.small : '';

  return (
    <header className="CoinOverviewHeader">
      <img className="CoinOverviewHeader__image" src={image} alt=""></img>
      <h1 className="CoinOverviewHeader__title">{coin.name}</h1>
      <span className="CoinOverviewHeader__symbol">{coin.symbol}</span>
    </header>
  );
};

export default CoinOverviewHeader;
