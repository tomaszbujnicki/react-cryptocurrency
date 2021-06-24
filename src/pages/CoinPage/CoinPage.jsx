import React from 'react';
import './CoinPage.scss';
import CoinOverview from '../../components/CoinOverview';
import { getCoinId } from '../../utils';
import { Redirect } from 'react-router-dom';

function CoinPage(props) {
  const coinLinkName = props.match.params.coinLinkName;
  const id = getCoinId(coinLinkName);

  if (id === null) return <Redirect to="/" />;

  return <CoinOverview id={id} />;
}

export default CoinPage;
