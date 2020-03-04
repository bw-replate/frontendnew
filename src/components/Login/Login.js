import React from 'react';
import {NavLink} from 'react-router-dom';

//styles
import { StyledDiv } from './LoginStyles';
import './login.css';

//imports
import FormikLoginForm from './LoginForm';

export default function Login () {

  return (
    <div>
      <StyledDiv>
        <h1 className="mainFormHeading">Login Below</h1>
      </StyledDiv>
      <FormikLoginForm />
    </div>
    
  )
}// end Login


