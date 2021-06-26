import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import GET from '../../api';
import {
  formatDate,
  formatNumber,
  formatCompactNumber,
} from '../../utils/format';
import './CoinChart.scss';
import { CustomTooltip } from './CustomTooltip';

const CoinChart = ({ id }) => {
  const [rawData, setRawData] = useState({});
  useEffect(() => {
    GET.coinChart(id)
      .then((res) => setRawData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  let data = [];

  if (rawData.prices) {
    for (let i = 0; i < rawData.prices.length; i++) {
      const date = rawData.prices[i][0];
      const price = rawData.prices[i][1];
      const volume = rawData.total_volumes[i][1];
      data.push({ date, price, volume });
    }
  }

  if (data.length === 0) return <div className="CoinChart"></div>;

  return (
    <div className="CoinChart">
      <LineChart width={1000} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="var(--green)"
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
          yAxisId="left"
        />
        <Line
          type="monotone"
          dataKey="volume"
          stroke="var(--red)"
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
          yAxisId="right"
        />
        <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="1 3" />
        <XAxis interval={24} dataKey="date" tickFormatter={formatDate.short} />
        <YAxis
          yAxisId="left"
          width={100}
          type="number"
          tickCount={5}
          domain={['auto', 'auto']}
          padding={{ bottom: 20 }}
          tickFormatter={(value) => formatNumber(value, 0, 8)}
        />
        <YAxis
          width={100}
          type="number"
          tickCount={5}
          domain={['auto', 'auto']}
          padding={{ bottom: 20 }}
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => formatCompactNumber(value)}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default CoinChart;
