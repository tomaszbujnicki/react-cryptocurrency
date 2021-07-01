import React, { useEffect, useState } from 'react';
import GET from '../../api';
import Chart from './Chart';
import './CoinChart.scss';
import ButtonSet from './ButtonSet';
import Button from '../Button';

const CoinChart = ({ id }) => {
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState({
    price: true,
    volume: true,
    marketCap: false,
  });
  useEffect(() => {
    GET.coinChart(id)
      .then((res) => formatData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const formatData = (rawData) => {
    console.log(rawData);
    const data = [];
    for (let i = 0; i < rawData.prices.length; i++) {
      const date = rawData.prices[i][0];
      const price = rawData.prices[i][1];
      const volume = rawData.total_volumes[i][1];
      const marketCap = rawData.market_caps[i][1];
      data.push({ date, price, volume, marketCap });
    }
    setData(data);
  };

  const toggle = (item) => {
    dataToShow[item] = !dataToShow[item];
    setDataToShow({ ...dataToShow });
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
      <Chart data={data} dataToShow={dataToShow} />
    </div>
  );
};

export default CoinChart;
