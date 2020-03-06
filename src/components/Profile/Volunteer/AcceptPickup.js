import React from 'react';
import {NavLink} from 'react-router-dom';

// function for onClick

export const AcceptPickup = () => {
    return (
        <div className="acceptpickup">
            <h2>Sprouts</h2>
            <h2>1234 Goodfood Drive, Longmont, CO 38849</h2>
            <h2>122-330-4567</h2>
            <h2>Expected Delivery: May 23, 2020</h2>
            <NavLink to="/profile"><button>Accept Pickup</button></NavLink>
            {/* once button is clicked it will redirect to profile page and add the pickup to the volunteer component view */}
        </div>
    )
}
