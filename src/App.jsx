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

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/coins/:id" component={CoinPage} />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
