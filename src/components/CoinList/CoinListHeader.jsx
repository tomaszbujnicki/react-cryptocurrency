import React from 'react';
import { getCurrencySymbol } from '../../utils/format';
import './CoinListHeader.scss';

function CoinListHeader() {
  return (
    <div className="CoinListHeader">
      <span className="empty-positioner"></span>
      <p className="CoinListHeader__left">Coin</p>
      <p className="CoinListHeader__center">Symbol</p>
      <span className="empty-positioner"></span>
      <p>Price [{getCurrencySymbol()}]</p>
      <p>&uarr;&darr;24h</p>
      <span className="empty-positioner"></span>
      <p>24h Volume [{getCurrencySymbol()}]</p>
      <p>Market Cap [{getCurrencySymbol()}]</p>
    </div>
  );
}

export default CoinListHeader;
