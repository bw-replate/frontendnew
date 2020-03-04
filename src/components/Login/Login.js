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
      <FormikLoginForm/>
      <NavLink to="/signup">
      <h2 className="accountSignUp">Don't Have An Account Yet?</h2>
      </NavLink>
    </div>
    
  )
}// end Login


