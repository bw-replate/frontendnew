import React from 'react';
import { NavLink } from 'react-router-dom';

//imports
import "./volunteer.css";

//styles
import '../../../globalStyles/styleVars';
import {Heading2, Heading1, Anchor, Button} from '../../../globalStyles/globalStyles';

export const VolunteerPickups = () => {

    return (
        <div className="volunteerOnlyPickups">
            <Heading1>Active Pickups</Heading1>
            {/* dynamic routes most likely */}
            {/* <NavLink to="IndividualPickup"><h2>Sprouts</h2></NavLink> */}
            <Anchor><NavLink to="/editcurrentpickup">Pickup 1</NavLink></Anchor>
            <Heading2>Pickup 2</Heading2>
            <Anchor><NavLink to="/availablepickups"><Button>View or Get Pickups</Button></NavLink></Anchor>
            
            
        </div>
    )
}
