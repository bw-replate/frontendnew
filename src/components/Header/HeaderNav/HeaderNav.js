import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//styles
import '../../../globalStyles/styleVars';
import {Anchor} from '../../../globalStyles/globalStyles';
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
          <Anchor><NavLink to='/'>Home</NavLink></Anchor>
          {loggedInUser && <Anchor><NavLink to='/logout'>Logout</NavLink></Anchor>}
          {loggedInUser && <Anchor><NavLink to={`/profile/:${loggedInUser}`}>Welcome, {loggedInUser}
          </NavLink></Anchor>}
        </div>
      </nav>
    </>
  )//end render
}// end HeaderNav

export default HeaderNav;