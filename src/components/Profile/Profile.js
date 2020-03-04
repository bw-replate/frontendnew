// - `username`: String
// - `volunteerName`: String
// - `phoneNumber` 

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

//imports

//styles
import './ProfileStyles';

const Profile = (props) => {
  console.log(props.username)
  return (
    <div className= 'profileCont'>
      <h2>Name</h2>
      <h2>Address</h2>
      <h2>Phone</h2>
    <button>Edit Profile</button>
    <button>Add Business</button>
    <button>Logout</button>
    <button>Delete Profile</button>
    <button>Edit Profile</button>
    </div>
  )
}// end Profile

export default Profile;
