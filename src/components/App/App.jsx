import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import Coins from '../Coins';
import CoinTable from '../CoinTable';
import { getCoinId } from '../../utils';

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <CoinTable />
          </Route>

          <Route path="/about"></Route>

          <Route
            exact
            path="/coins/:coinLinkName"
            render={({ match }) => {
              const id = getCoinId(match.params.coinLinkName);
              return id ? <Coins id={id} /> : <Redirect to="/" />;
            }}
          />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
