import React, { useState, useEffect } from 'react';
import GET from '../../api';

import Loading from '../Loading';
import CoinListHeader from './CoinListHeader';
import CoinPreview from '../CoinPreview';
import DataList from '../DataList';

function CoinList(props) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    GET.coinList(props.page)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, [props.page]);

  if (coins.length === 0) {
    return <Loading />;
  }

  return (
    <div className="CoinList">
      <CoinListHeader />
      <DataList
        items={coins}
        createElement={(data) => <CoinPreview coin={data} />}
      />
    </div>
  );
}

export default CoinList;
