import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss'
const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink to="/" className={style.link}>home</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="/movies" className={style.link}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
