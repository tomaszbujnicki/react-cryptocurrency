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
import './CoinChart.scss';

const CoinChart = ({ id }) => {
  const [rawData, setRawData] = useState({});
  useEffect(() => {
    GET.coinChart(id)
      .then((res) => setRawData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(rawData);

  let data = [];

  if (rawData.prices) {
    rawData.prices.forEach((item) => {
      data.push({
        name: new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
        }).format(item[0]),
        price: item[1],
      });
    });
  }
  return (
    <div className="CoinChart">
      <LineChart width={1000} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="var(--green)"
          dot={{ r: 0 }}
          activeDot={{ r: 5 }}
        />
        <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="1 3" />
        <XAxis interval={24} dataKey="name" />
        <YAxis
          width={100}
          type="number"
          tickCount={5}
          domain={['auto', 'auto']}
          padding={{ bottom: 20 }}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default CoinChart;
