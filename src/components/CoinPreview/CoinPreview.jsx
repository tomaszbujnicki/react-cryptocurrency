import React from 'react';
import assets from '../../data/assets';

import './CoinPreview.scss';

function CoinPreview(props) {
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
    <div className="coin-preview">
      <img className="coin-preview__img" src={image} alt="crypto" />
      <h3 className="coin-preview__name">{name}</h3>
      <p className="coin-preview__symbol">{symbol}</p>
      <p className="coin-preview__price">{price}</p>
      <p className={change24 < 0 ? 'red' : 'green'}>{change24}</p>
      <p className="coin-volume">{volume24}</p>
      <p className="coin-marketcap">{marketCapitalization}</p>
    </div>
  );
}

export default CoinPreview;
