import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {UserContext} from '../../../Contexts/UserContext';

//styles
import {BusinessDisplay} from './BusinessStyles';

function BusinessProfile() {
  const {getBusinesses, profiles, deleteBusiness, editBusiness}= useContext(UserContext);

  useEffect(() => {

  }, [profiles])
  

  return (
    <div>
      <Link to='/addplate'>Add A Plate</Link>
      <h2>Current Plates</h2>
      This is business profiles information
            {profiles.map(profile => (
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