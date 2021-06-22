import React from 'react';
import './CoinListHeader.scss';

function CoinListHeader() {
  return (
    <div className="CoinListHeader">
      <p>Coin</p>
      <p>Symbol</p>
      <span className="empty-positioner"></span>
      <p>Price</p>
      <p>24h</p>
      <p>24h Volume</p>
      <p>Market Cap</p>
    </div>
  );
}

export default CoinListHeader;
