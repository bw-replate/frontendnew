// - `username`: String
// - `volunteerName`: String
// - `phoneNumber`

<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
=======
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
>>>>>>> 46dabb2b40a1cae34eaa7c2e90b38a610f593bc9

//imports
import './profile.css';


//styles
import "./ProfileStyles";
import { VolunteerPickups } from "./Volunteer/VolunteerPickups";

<<<<<<< HEAD
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
=======
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












>>>>>>> 46dabb2b40a1cae34eaa7c2e90b38a610f593bc9
    </div>
  );
}; // end Profile










export default Profile;
