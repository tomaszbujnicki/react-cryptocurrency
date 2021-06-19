import React from 'react';

import './CoinPreview.scss';

function CoinPreview(props) {
  const coin = props.coin;
  return (
    <div className="coin-preview">
      <img className="coin-preview__img" src={coin.image} alt="crypto" />
      <h3 className="coin-preview__name">{coin.name}</h3>
      <p className="coin-preview__symbol">{coin.symbol}</p>
      <p className="coin-preview__price">
        ${coin.current_price.toLocaleString()}
      </p>
      <p className={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>

      <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>
      <p className="coin-marketcap">${coin.market_cap.toLocaleString()}</p>
    </div>
  );
}

export default CoinPreview;
