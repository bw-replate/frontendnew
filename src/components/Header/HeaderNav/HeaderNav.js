import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import './HeaderNavStyles';

const HeaderNav = () => {
  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Logout</NavLink>
          <NavLink to='/'>Display Username</NavLink>
        </div>
      </nav>
    </>
  )
}// end HeaderNav

export default HeaderNav;