import React from 'react'
import { withRouter } from 'react-router-dom';

//imports
import BusinessProfile from './BusinessProfile';


//styles
import { BusinessCont } from './BusinessStyles';

const Business = () => {
  return (
    <BusinessCont className="businessCont">
      <h3>Business Profile</h3>
      <BusinessProfile />
    </BusinessCont>
  )
}//end Business

export default withRouter(Business);