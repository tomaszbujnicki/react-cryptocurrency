import React from 'react';
import './CoinOverview.scss';
import { removeTags } from '../../utils';
import CoinHeading from '../CoinHeading';
import Article from '../Article';
import CoinChart from '../CoinChart';
import { CoinStats } from './CoinStats';

const CoinOverview = ({ coin }) => {
  const image = coin.image ? coin.image.small : '';
  const description = coin.description
    ? coin.description.en
      ? removeTags(coin.description.en)
      : null
    : null;

  return (
    <div className="CoinOverview">
      <section className="CoinOverview__head">
        <CoinHeading image={image} name={coin.name} symbol={coin.symbol} />
      </section>
      <section className="CoinOverview__chart">
        <CoinChart id={coin.id} />
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
