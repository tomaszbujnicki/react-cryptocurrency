import React from 'react';
import assets from '../../data/assets';
import { getCoinLinkname } from '../../utils';
import { Link } from 'react-router-dom';

import './CoinPreview.scss';

function CoinPreview(props) {
  const coin = props.coin;

  const image = coin.image || assets.defaultImage;
  const name = coin.name || '';
  const symbol = coin.symbol || '';
  const price = coin.current_price ? formatCurrency(coin.current_price) : '';
  const change24 = coin.price_change_percentage_24h
    ? coin.price_change_percentage_24h.toFixed(2) + '%'
    : '';
  const volume24 = coin.total_volume
    ? formatCurrency(coin.total_volume, 0)
    : '';
  const marketCapitalization = coin.market_cap
    ? formatCurrency(coin.market_cap, 0)
    : '';

  return (
    <Link className="" to={'/coins/' + getCoinLinkname(coin.id)}>
      <div className="CoinPreview">
        <img className="CoinPreview__img" src={image} alt="" />
        <h3 className="CoinPreview__name">{name}</h3>
        <p className="CoinPreview__symbol">{symbol}</p>
        <span className="empty-positioner"></span>
        <p className="CoinPreview__price">{price}</p>
        <p className={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>
          {change24}
        </p>
        <p>{volume24}</p>
        <p>{marketCapitalization}</p>
      </div>
    </Link>
  );
}

export default CoinPreview;

function formatCurrency(amount, maxDigits = 8) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: maxDigits,
  });
}
