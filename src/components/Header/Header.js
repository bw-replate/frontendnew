import React from 'react';

//styles
import './HeaderStyles';

//imports
import HeaderNav from './HeaderNav/HeaderNav';
import logo from "./replate-icon.PNG";

export default function Header () {
  return (
    <div className= 'headerCont'>
      <div>
        <img src={logo} alt="replate icon"/>
      </div>
      <HeaderNav/>
    </div>
  )
}//end Header


