import React, { useEffect, useState } from 'react';
import './CoinOverview.scss';
import { removeTags } from '../../utils';
import GET from '../../api';
import Loading from '../Loading';
import CoinHeading from '../CoinHeading';
import Article from '../Article';

const CoinOverview = (props) => {
  let id = props.id;

  const [coin, setCoin] = useState([]);
  const image = coin.image ? coin.image.small : '';

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (coin.length === 0) {
    return <Loading />;
  }

  return (
    <div className="CoinOverview">
      <section className="CoinOverview__head">
        <CoinHeading image={image} name={coin.name} symbol={coin.symbol} />
      </section>
      <section className="CoinOverview__description">
        {coin.description && (
          <Article
            title={`What is ${coin.name}`}
            content={removeTags(coin.description.en)}
          />
        )}
      </section>
    </div>
  );
};

export default CoinOverview;
