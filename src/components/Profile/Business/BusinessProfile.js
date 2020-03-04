import React from 'react';
import { NavLink } from 'react-router-dom';
import {Route} from 'react-router-dom';
import AddPlate from './AddPlate';
import axios from 'axios';


export const BusinessProfile = () => {
    return (
        <div>
            <NavLink>Add A Plate</NavLink>
            <h2>Current Plates</h2>
            This is business profiles information
            <Route path='/addplate' component={AddPlate} />
        </div>
    )
}

export default BusinessProfile;