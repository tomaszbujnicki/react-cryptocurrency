import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Coins from '../Coins/Coins';
import CoinTable from '../CoinTable.js/CoinTable';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about"></Route>
        <Route path="/coins/:linkName" children={<Coins />} />
        <Route path="/">
          <CoinTable />
        </Route>
      </Switch>
    </Router>
  );
}
