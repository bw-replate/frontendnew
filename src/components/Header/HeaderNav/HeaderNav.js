import React from 'react';
import { NavLink } from 'react-router-dom';



const HeaderNav = () => {
  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/logout'>Logout</NavLink>
          <NavLink to='/profile'>Toni Placeholder</NavLink>
        </div>
      </nav>
    </>
  )
}// end HeaderNav

export default HeaderNav;