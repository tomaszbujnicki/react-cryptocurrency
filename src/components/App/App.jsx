import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import CoinOverview from '../CoinOverview';
import CoinList from '../CoinList';
import { getCoinId } from '../../utils';

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <CoinList />
          </Route>

          <Route path="/about"></Route>

          <Route
            exact
            path="/coins/:coinLinkName"
            render={({ match }) => {
              const id = getCoinId(match.params.coinLinkName);
              return id ? <CoinOverview id={id} /> : <Redirect to="/" />;
            }}
          />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
