import React from 'react';
import './Coin.css';

const Coin = ({
  coinName,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin">
      <img src={image} alt="crypto" />
      <h3>{coinName}</h3>
      <p className="coin-symbol">{symbol}</p>
      <p className="coin-price">${price.toLocaleString()}</p>
      {priceChange < 0 ? (
        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
      ) : (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
      )}
      <p className="coin-volume">${volume.toLocaleString()}</p>
      <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
