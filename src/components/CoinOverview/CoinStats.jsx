import React from 'react';
import settings from '../../data/settings';
import { formatCurrency, formatNumber } from '../../utils/format';
import './CoinStats.scss';

export const CoinStats = ({ coin }) => {
  const data = coin.market_data;
  const currency = settings.currency;

  return (
    <article className="CoinStats">
      <table>
        <tbody>
          <tr>
            <th>Mkt Cap Rank</th>
            <th>{data.market_cap_rank ? data.market_cap_rank : '-'}</th>
          </tr>
          <tr>
            <th>Price</th>
            <th>{formatCurrency(data.current_price[currency])}</th>
          </tr>
          <tr>
            <th>Market Cap</th>
            <th>
              {data.market_cap[currency]
                ? formatCurrency(data.market_cap[currency])
                : '-'}
            </th>
          </tr>
          <tr>
            <th>Volume</th>
            <th>
              {data.total_volume[currency]
                ? formatCurrency(data.total_volume[currency])
                : '-'}
            </th>
          </tr>

          <tr>
            <th>24h Low</th>
            <th>{formatCurrency(data.low_24h[currency])}</th>
          </tr>
          <tr>
            <th>24h High</th>
            <th>{formatCurrency(data.high_24h[currency])}</th>
          </tr>
          <tr>
            <th>1h Change</th>
            <th>
              {data.price_change_percentage_1h_in_currency
                ? formatNumber(
                    data.price_change_percentage_1h_in_currency[
                      settings.currency
                    ],
                    2,
                    2
                  ) + '%'
                : '-'}
            </th>
          </tr>
          <tr>
            <th>1d Change</th>
            <th>
              {data.price_change_percentage_24h_in_currency[currency]
                ? formatNumber(
                    data.price_change_percentage_24h_in_currency[currency],
                    2,
                    2
                  ) + '%'
                : '-'}
            </th>
          </tr>
          <tr>
            <th>7d Change</th>
            <th>
              {data.price_change_percentage_7d_in_currency[currency]
                ? formatNumber(
                    data.price_change_percentage_7d_in_currency[currency],
                    2,
                    2
                  ) + '%'
                : '-'}
            </th>
          </tr>
          <tr>
            <th>30d Change</th>
            <th>
              {data.price_change_percentage_30d_in_currency[currency]
                ? formatNumber(
                    data.price_change_percentage_30d_in_currency[currency],
                    2,
                    2
                  ) + '%'
                : '-'}
            </th>
          </tr>
          <tr>
            <th>1y Change</th>
            <th>
              {data.price_change_percentage_1y_in_currency[currency]
                ? formatNumber(
                    data.price_change_percentage_1y_in_currency[currency],
                    2,
                    2
                  ) + '%'
                : '-'}
            </th>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
