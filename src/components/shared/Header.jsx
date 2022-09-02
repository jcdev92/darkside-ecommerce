import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Header>
      <NavLink to="/">
        <h1 className="header__logo"></h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to="login" />
          </li>
          <li className="header__item">
            <NavLink className="header__link" to="/purchases" />
          </li>
          <li className="header__item">
            <h2 className="header__link">Cart</h2>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Header;
