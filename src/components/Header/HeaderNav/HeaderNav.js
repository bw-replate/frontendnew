import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = ({loggedInUser}) => {
  // const [curUser, setCurUser]= useState(loggedInUser);

  // useEffect(() => {
  //   loggedInUser ? setCurUser(loggedInUser) : setCurUser('');
  // }, [loggedInUser]);

  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/logout'>Logout</NavLink>
          {loggedInUser && <NavLink to={`/profile/:${loggedInUser}`}>Welcome, {loggedInUser}
          </NavLink>}
        </div>
      </nav>
    </>
  )
}// end HeaderNav

export default HeaderNav;