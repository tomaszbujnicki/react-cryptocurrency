import React from 'react';
import './CoinPage.scss';
import CoinOverview from '../../components/CoinOverview';

function CoinPage({ id }) {
  return <CoinOverview id={id} />;
}

export default CoinPage;
