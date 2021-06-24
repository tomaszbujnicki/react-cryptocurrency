import React, { useState } from 'react';
import coinList from '../../data/coinList';
import Logo from '../Logo';
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
    <header className="Header">
      <div className="container">
        <div className="Heder__container">
          <Logo height="100px" />
          <div className="Heder__content">
            <div className="Heder__row">
              <nav className="nav">
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                  <li>Home</li>
                  <li>Veteran Lion</li>
                  <li>Boss Lion</li>
                  <li>About Us</li>
                  <li>Github</li>
                </ul>
              </nav>
              <div className="coin-search">
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="coin-input"
                    onChange={handleChange}
                  />
                </form>
              </div>{' '}
            </div>
            <div className="Heder__row"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
