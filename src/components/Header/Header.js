import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';


//styles
import './HeaderStyles';


//imports
import HeaderNav from './HeaderNav/HeaderNav';
import logo from "./replate-icon.PNG";

export default function Header ({loggedInUser}) {

  return (
    <div className= 'headerCont'>
      <div>
        <img src={logo} alt="replate icon"/>
      </div>
      <HeaderNav loggedInUser= {loggedInUser} />

export const Header = () => {
  return (
    <div className= 'headerCont'>
      <HeaderNav />

    </div>
  )
}//end Header

export default Header;
