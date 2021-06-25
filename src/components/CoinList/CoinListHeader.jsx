import React from 'react';
import './CoinListHeader.scss';

function CoinListHeader() {
  return (
    <div className="CoinListHeader">
      <span className="empty-positioner"></span>
      <p className="CoinListHeader__left">Coin</p>
      <p className="CoinListHeader__center">Symbol</p>
      <span className="empty-positioner"></span>
      <p>Price</p>
      <p>24h</p>
      <span className="empty-positioner"></span>
      <p>24h Volume</p>
      <p>Market Cap</p>
    </div>
  );
}

export default CoinListHeader;
