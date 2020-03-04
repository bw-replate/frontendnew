import React from 'react'
import {withRouter} from 'react-router-dom';

//imports
import BusinessProfile from './BusinessProfile';
import AddPlate from './AddPlate.js'

const Business = () => {
    return (
        <div>
            <BusinessProfile/>
        </div>
    )
}

export default withRouter(Business);