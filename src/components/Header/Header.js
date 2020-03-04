import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import logo from "./replateIcon.PNG";

export default function Header ({loggedInUser}) {
  return (
    <div className= 'headerCont'>

      <div>
        <img src={logo} alt="replate icon"/>
      </div>
      <HeaderNav loggedInUser= {loggedInUser}/>



    </div>
  )
}//end Header