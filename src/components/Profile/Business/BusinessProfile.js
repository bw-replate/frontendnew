import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {UserContext} from '../../../Contexts/UserContext';

//styles
import {BusinessDisplay} from './BusinessStyles';

function BusinessProfile() {
  const {getBusinesses, loggedInUser, profiles, deleteBusiness, editBusiness}= useContext(UserContext);
  const [curUser, setCurUser] = useState();
  const [userProfiles, setUserProfiles] = useState(profiles);

  return (
    <div>
      <Link to='/addplate'>Add A Plate</Link>
      <h2>Current Plates</h2>
      businesses:
            {profiles && profiles.map(profile => (
        <BusinessDisplay key= {Date.now()*Math.random()} className= 'businessDisplay'>
          <h3>{profile.name}</h3>
          <h3>{profile.address}</h3>
          <h3>{profile.phoneNumber}</h3>
          <h3>{profile.username}</h3>
          <button onClick= {() => editBusiness(profile)}>Edit</button>
          <button onClick= {() => deleteBusiness(profile.id)}>Delete</button>
        </ BusinessDisplay>
      ))}
      {console.log('userProfiles:', userProfiles)}
    </div>
  )
}

export default withRouter(BusinessProfile);