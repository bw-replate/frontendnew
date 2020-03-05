// - `username`: String
// - `volunteerName`: String
// - `phoneNumber`

import React from "react";
import axios from "axios";
import { Route, NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";

//imports
import './profile.css';
import {UserContext} from '../../Contexts/UserContext';
import Business from './Business/Business';

//styles
import "./ProfileStyles";
import { VolunteerPickups } from "./Volunteer/VolunteerPickups";

const Profile = () => {
  const {username, phoneNumber} = useContext(UserContext);
  let user = window.localStorage.getItem('loggedInUser');

  return (
    <div className="profileCont">
      <Business />
      <h2>{user}</h2>
      <h3>1234 Going Places Avenue, Placeholder, CA 80012</h3>
      <h3>{phoneNumber}</h3>
      <NavLink to="/addbusiness"><button>Add Business</button></NavLink>
      {/* <Route path="/addBusiness"></Route>  */}
      <button>Delete Profile</button>
      <button>Edit Profile</button>


    {/* if the person logged in is a volunteer 
    then render the code below */}
    
    <VolunteerPickups/>

    {/* else if the person logged in is a businees
    then render the code below */}












    </div>
  );
}; // end Profile










export default Profile;
