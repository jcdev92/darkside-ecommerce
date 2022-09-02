import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Header>
      <NavLink to='/'>
        <h1 className="header__logo"></h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><NavLink to='login'/></li>
          <li className="header__item"><NavLink to='/purchases'/></li>
        </ul>
      </nav>
    </Header>
  )
}

export default Header