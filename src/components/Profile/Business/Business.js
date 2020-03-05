import React, {useState, useEffect, useContext} from 'react'
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';


//imports
import BusinessProfile from './BusinessProfile';
import AddPlate from './AddPlate.js'
import {UserContext} from '../../../Contexts/UserContext';

//styles
import {BusinessCont} from './BusinessStyles';

const Business = () => {

    return (
        <BusinessCont className= "businessCont">
          <h3>Business Profile</h3>
            <BusinessProfile />
        </BusinessCont>

    )
}

export default withRouter(Business);