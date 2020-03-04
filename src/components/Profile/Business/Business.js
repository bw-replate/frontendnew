import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';


//imports
import BusinessProfile from './BusinessProfile';
import AddPlate from './AddPlate.js'

function Business() {
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
            {profiles.map(profile => (
                <BusinessProfile profile={profile} key={profile} />
            ))}
        </div>
    )
}

export default withRouter(Business);