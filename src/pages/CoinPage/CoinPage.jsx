import React, { useState, useEffect } from 'react';
import './CoinPage.scss';
import CoinOverview from '../../components/CoinOverview';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';

function CoinPage(props) {
  const id = props.match.params.id;
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    GET.coinDetails(id)
      .then((res) => setCoin(res.data))
      .catch(() => setCoin(undefined));
  }, [id]);

  if (coin === null) {
    return <Loading />;
  }

  if (coin === undefined) {
    return <Redirect to="/" />;
  }

  return <CoinOverview coin={coin} />;
}

export default CoinPage;
