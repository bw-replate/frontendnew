import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//styles
// import './HeaderStyles';

const HeaderNav = () => {
  const history = useHistory().location;
  const loggedInUser = window.localStorage.getItem('loggedInUser');

  useEffect(() => {
    //this is to force a re=render to display username after log in
  }, [history]);

  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Home</NavLink>
          {loggedInUser && <NavLink to='/logout'>Logout</NavLink>}
          {loggedInUser && <NavLink to={`/profile/:${loggedInUser}`}>Welcome, {loggedInUser}
          </NavLink>}
        </div>
      </nav>
    </>
  )//end render
}// end HeaderNav

export default HeaderNav;