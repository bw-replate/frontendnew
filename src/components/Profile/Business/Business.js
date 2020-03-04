import React from 'react'
import {withRouter} from 'react-router-dom';

//imports
import BusinessProfile from './BusinessProfile';
import AddPlate from './AddPlate.js'

//styles
import {BusinessCont} from './BusinessStyles';

const Business = () => {
    return (
        <BusinessCont className= "businessCont">
            <BusinessProfile/>
        </BusinessCont>
    )
}

export default withRouter(Business);