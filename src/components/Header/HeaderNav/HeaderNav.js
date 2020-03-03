import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import './HeaderNavStyles';

const HeaderNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='/'>Nav item</NavLink></li>
          <li><NavLink to='/'>Nav item</NavLink></li>
          <li><NavLink to='/'>Nav item</NavLink></li>
        </ul>
      </nav>
    </>
  )
}// end HeaderNav

export default HeaderNav;