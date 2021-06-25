import React from 'react';
import { formatCurrency, formatDate } from '../../utils/format';
import './CustomTooltip.scss';

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    const date = payload[0].payload.date;
    const price = payload[0].payload.price;
    const volume = payload[0].payload.volume;
    return (
      <div className="CustomTooltip">
        <p>{formatDate.long(date)}</p>
        <p className="CustomTooltip__price">
          Price: <span>{formatCurrency(price)}</span>
        </p>
        <p className="CustomTooltip__volume">
          Volume: <span>{formatCurrency(volume, 0, 0)}</span>
        </p>
      </div>
    );
  }

  return null;
};
