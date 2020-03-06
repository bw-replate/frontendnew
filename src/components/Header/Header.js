import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import logo from "./replateIcon.PNG";

export default function Header() {
  return (
    <div className='headerCont'>
      <div>
        <img src={logo} alt="replate icon" />
      </div>
      <HeaderNav />
    </div>
  )
}//end Header