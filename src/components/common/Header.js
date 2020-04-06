import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: 'red' };
  
  return(
    <nav>
      <NavLink exact to='/' activeStyle={activeStyle}>Home Page</NavLink>
      {" | " } 
      <NavLink to='/about' activeStyle={activeStyle}>About</NavLink>
      {" | " } 
      <NavLink to='/advertisements' activeStyle={activeStyle}>Advertisements</NavLink>
      {" | "}
      <NavLink to='/courses' activeStyle={activeStyle}>Courses</NavLink>
    </nav>
  );
}

export default Header