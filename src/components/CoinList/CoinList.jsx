import React from 'react';
import CoinListHeader from './CoinListHeader';
import CoinPreview from './CoinPreview';
import './CoinList.scss';

function CoinList({ coins }) {
  return (
    <section>
      <CoinListHeader />
      <ol className={'CoinList'}>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              <CoinPreview coin={coin} />
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default CoinList;
