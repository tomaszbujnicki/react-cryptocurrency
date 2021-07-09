import React, { useState, useEffect } from 'react';
import './CoinPage.scss';
import CoinOverview from '../../components/CoinOverview';
import { getCoinId } from '../../utils';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';

function CoinPage(props) {
  const coinLinkName = props.match.params.coinLinkName;
  const id = getCoinId(coinLinkName);
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (id === null) return <Redirect to="/" />;

  if (!coin) {
    return <Loading />;
  }

  return <CoinOverview coin={coin} />;
}

export default CoinPage;
