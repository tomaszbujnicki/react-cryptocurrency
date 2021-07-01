import React, { useState, useEffect } from 'react';
import GET from '../../api';

import Loading from '../Loading';
import CoinListHeader from './CoinListHeader';
import CoinPreview from './CoinPreview';
import DataList from '../DataList';

function CoinList({ page }) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    GET.coinList(page)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, [page]);

  if (coins.length === 0) {
    return <Loading />;
  }

  return (
    <section>
      <CoinListHeader />
      <DataList
        items={coins}
        keys={'id'}
        createElement={(data) => <CoinPreview coin={data} />}
      />
    </section>
  );
}

export default CoinList;
