import React, { useState } from 'react';
import coinList from '../../data/coinList';
import './Header.scss';

function Header() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header className="header">
      <span className="header__title">React Cryptocurrency API</span>
      <div className="coin-search">
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
