import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {UserContext} from '../../../Contexts/UserContext';

//styles
import {BusinessDisplay} from './BusinessStyles';

function BusinessProfile() {
  const {getBusinesses, loggedInUser, profiles, deleteBusiness, editBusiness}= useContext(UserContext);
  const [curUser, setCurUser] = useState(loggedInUser.replace(/\s/g, ""));
  const [userProfiles, setUserProfiles] = useState(profiles.filter(profile => {
                                                            return (profile.username === curUser)
  }))
  console.log(loggedInUser,"Liu")
  console.log(userProfiles,"Up")
  console.log(profiles,'p')
  return (
    <div>
      <Link to='/addplate'>Add A Plate</Link>
      <h2>Current Plates</h2>
      This is business profiles information
            {userProfiles && userProfiles.map(profile => (
        <BusinessDisplay key= {Date.now()*Math.random()} className= 'businessDisplay'>
          <h3>{profile.name}</h3>
          <h3>{profile.address}</h3>
          <h3>{profile.phoneNumber}</h3>
          <h3>{profile.username}</h3>
          <button onClick= {() => editBusiness(profile.id)}>Edit</button>
          <button onClick= {() => deleteBusiness(profile.id)}>Delete</button>
        </ BusinessDisplay>
      ))}
    </div>
  )
}

export default withRouter(BusinessProfile);