import React from 'react';
import './HomePage.scss';
import CoinList from '../../components/CoinList';

function HomePage() {
  return <CoinList page={2} />;
}

export default HomePage;
