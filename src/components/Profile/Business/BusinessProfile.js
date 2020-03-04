import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import axiosWithAuth from '../../../utils/axiosWithAuth';


export const BusinessProfile = () => {
    return (
        <div>
            <Link to='/addplate'>Add A Plate</Link>
            <h2>Current Plates</h2>
            This is business profiles information
        </div>
    )
}

export default withRouter(BusinessProfile);