import React from "react";
import { NavLink } from "react-router-dom";
import {CgLogIn} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineAutoStories} from 'react-icons/md';

const Header = () => {
  return (
    <header className="header">
        <NavLink to="/">
          <div className="header__logo"> <h1>Dark Side</h1></div>
        </NavLink>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink className={({isActive}) => isActive ? 'active-link': 'inactive-link'} to="/login"> <CgLogIn/> </NavLink>
            </li>
            <li className="header__item">
              <NavLink className={({isActive}) => isActive ? 'active-link': 'inactive-link'} to="/purchases"> <MdOutlineAutoStories/> </NavLink>
            </li>
            <li className="header__item">
              <NavLink className={({isActive}) => isActive ? 'active-link': 'inactive-link'} to="/Cart"><AiOutlineShoppingCart/></NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
