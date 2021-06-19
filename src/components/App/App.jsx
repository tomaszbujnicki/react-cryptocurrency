import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import Coins from '../Coins';
import CoinTable from '../CoinTable';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about"></Route>
        <Route path="/coins/:coinLinkName" children={<Coins />} />
        <Route path="/">
          <CoinTable />
        </Route>
      </Switch>
    </Router>
  );
}
