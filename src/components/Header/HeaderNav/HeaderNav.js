import React, {useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const HeaderNav = () => {
  const history= useHistory().location;
  const loggedInUser= window.localStorage.getItem('loggedInUser');

  useEffect(() => {

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
  )
}// end HeaderNav

export default HeaderNav;