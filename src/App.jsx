import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';
import { getCoinId } from './utils';

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/about"></Route>

          <Route
            exact
            path="/coins/:coinLinkName"
            render={({ match }) => {
              const id = getCoinId(match.params.coinLinkName);
              return id ? <CoinPage id={id} /> : <Redirect to="/" />;
            }}
          />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
