import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';

//styles
import './HeaderStyles';

export const Header = () => {
  return (
    <div className= 'headerCont'>
      <HeaderNav />
    </div>
  )
}//end Header

export default Header;
