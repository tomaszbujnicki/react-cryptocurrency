import React from 'react';
import assets from '../../data/assets';

import './CoinListElement.scss';

function CoinListElement(props) {
  const coin = props.coin;

  const image = coin.image || assets.defaultImage;
  const name = coin.name || '';
  const symbol = coin.symbol || '';
  const price = coin.current_price
    ? '$' + coin.current_price.toLocaleString()
    : '';
  const change24 = coin.price_change_percentage_24h
    ? coin.price_change_percentage_24h.toFixed(2) + '%'
    : '';
  const volume24 = coin.total_volume
    ? '$' + coin.total_volume.toLocaleString()
    : '';
  const marketCapitalization = coin.market_cap
    ? '$' + coin.market_cap.toLocaleString()
    : '';

  return (
    <div className="CoinListElement">
      <img className="CoinListElement__img" src={image} alt="" />
      <h3 className="CoinListElement__name">{name}</h3>
      <p className="CoinListElement__symbol">{symbol}</p>
      <span className="empty-positioner"></span>
      <p className="CoinListElement__price">{price}</p>
      <p className={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>
        {change24}
      </p>
      <p>{volume24}</p>
      <p>{marketCapitalization}</p>
    </div>
  );
}

export default CoinListElement;
