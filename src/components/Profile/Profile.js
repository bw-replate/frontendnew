import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import {Route} from 'react-router-dom';
import AddBusiness from './AddBusiness';
import ProfileEdit from './ProfileEdit';
import BusinessProfile from './Business/BusinessProfile';
=======
import {useState, useEffect} from 'react';

//imports
>>>>>>> bbaae1dd51bcec0962cce5720d79d57d966b58a8

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
    <Route path='/addbusiness' component={AddBusiness} />
    <Route path='/profileedit' component={ProfileEdit} />
    <Route path='/businessprofile' component={BusinessProfile} />
    </div>
  )
}// end Profile

export default Profile;
