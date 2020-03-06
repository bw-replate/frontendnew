
import React from 'react'
import { withRouter } from 'react-router-dom';

//imports
import BusinessProfile from './BusinessProfile';

//styles
import '../../../globalStyles/styleVars';
import {Heading2, Heading3, Button, Anchor} from '../../../globalStyles/globalStyles';
import { BusinessCont } from './BusinessStyles';

const Business = () => {
  return (
    <BusinessCont className="businessCont">
      <Heading3>Business Profile</Heading3>
      <BusinessProfile />
    </BusinessCont>
  )
}//end Business

export default withRouter(Business);