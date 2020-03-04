import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';


function BusinessProfile(){
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        axiosWithAuth()
                    .get('https://bw-replate-1.herokuapp.com/api/business')
                    .then(res => {
                        console.log('flag',res)
                        setProfiles(res.data)
                    })
                    .catch(error => {
                        console.log('err',error)
                    })
    }, [])
    return (
        <div>
            <Link to='/addplate'>Add A Plate</Link>
            <h2>Current Plates</h2>
            This is business profiles information
            {profiles.map(profile => (
                <div>
                    <h3>{profile.name}</h3>
                    <h3>{profile.address}</h3>
                    <h3>{profile.phoneNumber}</h3>
                    <h3>{profile.username}</h3>
                </div>
            ))}
        </div>
    )
}

export default withRouter(BusinessProfile);