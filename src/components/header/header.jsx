import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
          <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
