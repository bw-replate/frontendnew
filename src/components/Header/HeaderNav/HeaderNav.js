import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import './HeaderNavStyles';

const HeaderNav = () => {
  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Nav item</NavLink>
          <NavLink to='/'>Nav item</NavLink>
          <NavLink to='/'>Nav item</NavLink>
        </div>
      </nav>
    </>
  )
}// end HeaderNav

export default HeaderNav;