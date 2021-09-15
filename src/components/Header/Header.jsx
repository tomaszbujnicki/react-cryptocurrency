import React from 'react';
import Logo from '../Logo';
import UserSettings from '../UserSettings/UserSettings';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Heder__container">
          <Logo height="100px" />
          <div className="Heder__content">
            <div className="Heder__row">
              {/*               <nav className="nav">
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                  <li>Home</li>
                  <li>Veteran Lion</li>
                  <li>Boss Lion</li>
                  <li>About Us</li>
                  <li>Github</li>
                </ul>
              </nav> */}
              <div className="coin-search">
                {/*                 <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="coin-input"
                  />
                </form> */}
              </div>{' '}
            </div>
            <div className="Heder__row">{/* <UserSettings /> */}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
