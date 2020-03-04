import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom'

import "./volunteer.css";
import { AcceptPickup } from './AcceptPickup';

export const AvailablePickups = () => {
    //get request 
    return (
        <div className="pickupsList">
            
            <NavLink to="/viewpickup:1"><h2>Sprouts</h2></NavLink>
            <NavLink to="/viewpickup:2"><h2>Safeway</h2></NavLink>
            <NavLink to="/viewpickup:3"><h2>Git N Go</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Panera</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Walmart</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Mom and Pop</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Tadka</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Leaf</h2></NavLink>
            <NavLink to="/viewpickup"><h2>One Cup</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Enterprise</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Chicken Gal</h2></NavLink>
            <NavLink to="/viewpickup"><h2>McDonalds</h2></NavLink>
            <NavLink to="/viewpickup"><h2>PianoHut</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Sprite Elementary</h2></NavLink>
            <NavLink to="/viewpickup"><h2>The Corner Store</h2></NavLink>
            <NavLink to="/viewpickup"><h2>G2H</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Mayhem Sports</h2></NavLink>
            <NavLink to="/viewpickup"><h2>Lambda</h2></NavLink>
            {/* /display all the available pickups from backend */}

            
            
        </div>
    )
}
