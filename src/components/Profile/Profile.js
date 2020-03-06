import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//imports
import './profile.css';
import { UserContext } from '../../Contexts/UserContext';
import Business from './Business/Business';

//styles
import "./ProfileStyles";
import { VolunteerPickups } from "./Volunteer/VolunteerPickups";

const Profile = ({ loggedInUser }) => {
  const { address,phoneNumber } = useContext(UserContext);
  const [curUser] = useState(loggedInUser.replace(/\s/g, ""));
  let user = window.localStorage.getItem('loggedInUser');
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axiosWithAuth()

      .get(`https://bw-replate-1.herokuapp.com/api/volunteer/${user}`)
      .then(res => {
        setVolunteers(res.data);
      })
      .catch(error => {
        // console.log('error', error);
      })
  }, [])

  return (
    <div className="profileCont">
      <Business />
      <h2>{user}</h2>

      <h3>{address}</h3>
      <h3>{phoneNumber}</h3>
      <NavLink to="/addbusiness"><button>Add Business</button></NavLink>
      <Link to={`/business/${curUser}`}><button>Business Profiles</button></Link>

      <button>Delete Profile</button>
      <button>Edit Profile</button>

      {/* {volunteers.map(volunteer => {
        return (
          <div key={Date.now() * Math.random()} className="volunteers">
            <h2>Volunteer Name: {volunteer.username}</h2>
            <h2>Volunteer Phone: {volunteer.phoneNumber}</h2>
            <h2>Volunteer id: {volunteer.id}</h2>
          </div>
        )
      })} */}

      {/* if the person logged in is a volunteer 
    then render the code below */}

      <VolunteerPickups />

      {/* else if the person logged in is a businees
    then render the code below */}

      <VolunteerPickups />

      {/* else if the person logged in is a businees
    then render the code below */}
    </div>
  );
}; // end Profile

export default Profile;
