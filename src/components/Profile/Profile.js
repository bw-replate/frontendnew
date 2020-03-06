import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//imports
import './profile.css';
import { UserContext } from '../../Contexts/UserContext';
import Business from './Business/Business';

//styles
import '../../globalStyles/styleVars';
import {Heading2, Heading3, Button, Anchor} from '../../globalStyles/globalStyles';
import {ProfileCont} from "./ProfileStyles";
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
    <ProfileCont className="profileCont">

      <Business />

      <Heading2>{user}</Heading2>
      <Heading3>{address}</Heading3>
      <Heading3>{phoneNumber}</Heading3>
      <Anchor><NavLink to="/addbusiness"><Button>Add Business</Button></NavLink></Anchor>
      <Anchor><Link to={`/business/${curUser}`}><Button>Business Profiles</Button></Link></Anchor>

      <Button>Delete Profile</Button>
      <Button>Edit Profile</Button>

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
    </ProfileCont>
  );
}; // end Profile

export default Profile;
