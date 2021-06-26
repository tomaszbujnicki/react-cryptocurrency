import React, { useEffect, useState } from 'react';
import './CoinOverview.scss';
import { removeTags } from '../../utils';
import GET from '../../api';
import Loading from '../Loading';
import CoinHeading from '../CoinHeading';
import Article from '../Article';
import CoinChart from '../CoinChart';
import { CoinStats } from './CoinStats';

const CoinOverview = ({ id }) => {
  const [coin, setCoin] = useState([]);
  const image = coin.image ? coin.image.small : '';
  const description = coin.description
    ? coin.description.en
      ? removeTags(coin.description.en)
      : null
    : null;

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (coin.length === 0) {
    return <Loading />;
  }
  console.log(coin);

  return (
    <div className="CoinOverview">
      <section className="CoinOverview__head">
        <CoinHeading image={image} name={coin.name} symbol={coin.symbol} />
      </section>
      <section className="CoinOverview__chart">
        <CoinChart id={id} />
        <CoinStats coin={coin} />
      </section>
      <section className="CoinOverview__description">
        {description && (
          <Article title={`What is ${coin.name}?`} content={description} />
        )}
      </section>
    </div>
  );
};

export default CoinOverview;
