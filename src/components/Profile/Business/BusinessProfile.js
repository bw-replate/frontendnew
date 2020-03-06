import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { UserContext } from '../../../Contexts/UserContext';

//styles
import '../../../globalStyles/styleVars';
import {Heading2, Heading3, Button, Anchor} from '../../../globalStyles/globalStyles';
import { BusinessDisplay } from './BusinessStyles';

function BusinessProfile() {
  const { profiles, deleteBusiness, editBusiness } = useContext(UserContext);

  return (
    <div>
      <Anchor><Link to='/addplate'>Add A Plate</Link></Anchor>
      <Heading2>Current Plates</Heading2>
      <Heading3>businesses:</Heading3>
            {profiles && profiles.map(profile => (
        <BusinessDisplay key={Date.now() * Math.random()} className='businessDisplay'>
          <Heading3>{profile.name}</Heading3>
          <Heading3>{profile.address}</Heading3>
          <Heading3>{profile.phoneNumber}</Heading3>
          <Heading3>{profile.username}</Heading3>
          <Button onClick={() => editBusiness(profile)}>Edit</Button>
          <Button onClick={() => deleteBusiness(profile.id)}>Delete</Button>
        </ BusinessDisplay>
      ))}
    </div>
  )
}//end businessProfile

export default withRouter(BusinessProfile);