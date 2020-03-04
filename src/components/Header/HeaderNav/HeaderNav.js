
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';



//styles
import './HeaderNavStyles';

const HeaderNav = ({loggedInUser}) => {
  const [curUser, setCurUser]= useState('');
  useEffect(() => {
  setCurUser(loggedInUser);
  }, [loggedInUser])

  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/logout'>Logout</NavLink>
          {curUser !== null && <NavLink to={`/profile/:${curUser}`}>Welcome, {curUser}
          </NavLink>}
        </div>
      </nav>
    </>
  )
}// end HeaderNav

export default withRouter(HeaderNav);