import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Coins from './Coins';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/coins/:linkName" children={<Coins />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
