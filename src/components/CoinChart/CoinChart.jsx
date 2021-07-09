import React, { useEffect, useState } from 'react';
import Chart from '../Chart';
import ButtonSet from '../ButtonSet';
import Button from '../Button';
import GET from '../../api';
import {
  formatCompactNumber,
  formatCurrency,
  formatDate,
  formatNumber,
} from '../../utils/format';
import './CoinChart.scss';

const CoinChart = ({ id }) => {
  const [data, setData] = useState([]);

  const dataKey = {
    id: 'date',
    tickFormatter: formatDate.short,
    tooltipFormatter: formatDate.long,
  };

  const [labels, setLabels] = useState([
    {
      id: 'price',
      name: 'Price',
      isHide: false,
      color: 'var(--green)',
      orientation: 'left',
      width: 100,
      tickFormatter: (value) => formatNumber(value, 0, 8),
      tooltipFormatter: formatCurrency,
    },
    {
      id: 'volume',
      name: 'Volume',
      isHide: false,
      color: 'var(--yellow)',
      orientation: 'right',
      width: 60,
      tickFormatter: formatCompactNumber,
      tooltipFormatter: (value) => formatCurrency(value, 0, 0),
    },
    {
      id: 'marketCap',
      name: 'Mark Cap',
      isHide: true,
      color: 'var(--red)',
      orientation: 'right',
      width: 60,
      tickFormatter: formatCompactNumber,
      tooltipFormatter: (value) => formatCurrency(value, 0, 0),
    },
  ]);

  useEffect(() => {
    GET.coinChart(id)
      .then((res) => formatData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const formatData = (rawData) => {
    const data = [];
    for (let i = 0; i < rawData.prices.length; i++) {
      data.push({
        date: rawData.prices[i][0],
        price: rawData.prices[i][1],
        volume: rawData.total_volumes[i][1],
        marketCap: rawData.market_caps[i][1],
      });
    }
    setData(data);
  };

  const toggle = (item) => {
    const found = labels.find((el) => el.id === item);
    found.isHide = !found.isHide;
    setLabels([...labels]);
  };

  if (data.length === 0) return <div className="CoinChart"></div>;

  return (
    <div className="CoinChart">
      <div className="CoinChart__heading">
        <ButtonSet>
          <Button onClick={() => toggle('price')}>price</Button>
          <Button onClick={() => toggle('volume')}>volume</Button>
          <Button onClick={() => toggle('marketCap')}>mark cap</Button>
        </ButtonSet>
        <ButtonSet>
          <Button>1d</Button>
          <Button>7d</Button>
          <Button>1m</Button>
          <Button>1y</Button>
        </ButtonSet>
      </div>
      <Chart data={data} dataKey={dataKey} labels={labels} />
    </div>
  );
};

export default CoinChart;
