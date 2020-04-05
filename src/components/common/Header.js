import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: 'red' };
  
  return(
    <nav>
      <NavLink exact to='/' activeStyle={activeStyle}>Home Page</NavLink> | 
      <NavLink to='/about' activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
}

export default Header