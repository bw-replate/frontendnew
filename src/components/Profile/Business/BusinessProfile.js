import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';


function BusinessProfile({profile}){
    return (
        <div>
            <Link to='/addplate'>Add A Plate</Link>
            <h2>Current Plates</h2>
            This is business profiles information
            <div>
                <h3>{profile.name}</h3>
                <p>{profile.address}</p>
                <p>{profile.phoneNumber}</p>
                <p>{profile.username}</p>
            </div>
        </div>
    )
}

export default withRouter(BusinessProfile);