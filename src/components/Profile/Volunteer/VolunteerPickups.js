import React from 'react';
import { NavLink } from 'react-router-dom';

//imports
import "./volunteer.css";

export const VolunteerPickups = () => {

    return (
        <div className="volunteerOnlyPickups">
            <h1>Active Pickups</h1>
            {/* dynamic routes most likely */}
            {/* <NavLink to="IndividualPickup"><h2>Sprouts</h2></NavLink> */}
            <NavLink to="/editcurrentpickup">Pickup 1</NavLink>
            <h2>Pickup 2</h2>
            <NavLink to="/availablepickups"><button>View or Get Pickups</button></NavLink>
            
            
        </div>
    )
}
