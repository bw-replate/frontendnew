import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddBusiness from './AddBusiness';
import ProfileEdit from './ProfileEdit';
import BusinessProfile from './Business/BusinessProfile';

//styles
import './ProfileStyles';

const Profile = ({status}) => {
  return (
    
    <div className= 'profileCont'>
      <h2>{status}</h2>
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
