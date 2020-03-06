import React from 'react';
import { withRouter } from 'react-router-dom';

//styles
import { StyledDiv } from './LoginStyles';
import './login.css';

//imports
import FormikLoginForm from './LoginForm';

function Login() {

  return (
    <div>
      <StyledDiv>
        <h1 className="mainFormHeading">Login Below</h1>
      </StyledDiv>
      <FormikLoginForm />
    </div>

  )//end return
}// end Login

export default withRouter(Login)
