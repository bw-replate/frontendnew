import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export const VolunteerPickups = () => {

    return (
        <div>
            <h1>Active Pickups</h1>
            //dynamic routes most likely
            <NavLink><h2>Sprouts</h2></NavLink>
            <h2>Pickup 2</h2>
            <h2>Pickup 3</h2>
            <h2>View or Get Pickups</h2>
            <NavLink>View or Get New Pickups</NavLink>
        </div>
    )
}
