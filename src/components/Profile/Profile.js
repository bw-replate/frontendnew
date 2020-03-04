// - `username`: String
// - `volunteerName`: String
// - `phoneNumber`

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

//imports
import './profile.css';


//styles
import "./ProfileStyles";
import { VolunteerPickups } from "./Volunteer/VolunteerPickups";

const Profile = props => {
  console.log(props.username);
  return (
    <div className="profileCont">
      <h2>Toni Placeholder</h2>
      <h3>1234 Going Places Avenue, Placeholder, CA 80012</h3>
      <h3>919-322-355</h3>
      <button>Add Business</button>
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
