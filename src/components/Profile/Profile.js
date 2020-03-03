// - `username`: String
// - `volunteerName`: String
// - `phoneNumber` 

import React from 'react';
import axios from 'axios';

//imports


//styles
import './ProfileStyles';

const Profile = () => {
  return (
    <div className= 'profileCont'>
      <h1>Replate User</h1>
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
