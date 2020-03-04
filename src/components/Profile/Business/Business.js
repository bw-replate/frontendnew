import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';


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