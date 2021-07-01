import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  formatDate,
  formatNumber,
  formatCompactNumber,
} from '../../utils/format';
import { CustomTooltip } from './CustomTooltip';

const Chart = ({ data, dataToShow }) => {
  return (
    <LineChart width={1000} height={400} data={data}>
      <Line
        type="monotone"
        dataKey={dataToShow.price ? 'price' : null}
        stroke="var(--green)"
        dot={{ r: 0 }}
        activeDot={{ r: 5 }}
        yAxisId="left"
      />
      <Line
        type="monotone"
        dataKey={dataToShow.volume ? 'volume' : null}
        stroke="var(--yellow)"
        dot={{ r: 0 }}
        activeDot={{ r: 5 }}
        yAxisId="right"
      />
      <Line
        type="monotone"
        dataKey={dataToShow.marketCap ? 'marketCap' : null}
        stroke="var(--red)"
        dot={{ r: 0 }}
        activeDot={{ r: 5 }}
        yAxisId="far-right"
      />
      <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="1 3" />
      <XAxis interval={24} dataKey="date" tickFormatter={formatDate.short} />
      <YAxis
        yAxisId="left"
        width={100}
        type="number"
        tickCount={5}
        tick={{ fill: 'var(--green)', opacity: 0.65 }}
        domain={['auto', 'auto']}
        padding={{ bottom: 20 }}
        tickFormatter={(value) => formatNumber(value, 0, 8)}
      />
      <YAxis
        width={60}
        type="number"
        tickCount={5}
        tick={{ fill: 'var(--yellow)', opacity: 0.65 }}
        domain={['auto', 'auto']}
        padding={{ bottom: 20 }}
        yAxisId="right"
        orientation="right"
        tickFormatter={(value) => formatCompactNumber(value)}
      />
      <YAxis
        yAxisId="far-right"
        orientation="right"
        width={75}
        type="number"
        tickCount={5}
        tick={{ fill: 'var(--red)', opacity: 0.65 }}
        domain={['auto', 'auto']}
        padding={{ bottom: 20 }}
        tickFormatter={(value) => formatCompactNumber(value)}
      />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
};

export default Chart;
