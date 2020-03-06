import React from 'react';
import { withRouter } from 'react-router-dom';

//styles
import '../../globalStyles/styleVars';
import {Heading1} from '../../globalStyles/globalStyles';
import { StyledDiv } from './LoginStyles';
import './login.css';

//imports
import FormikLoginForm from './LoginForm';

function Login() {

  return (
    <div>
      <StyledDiv>
        <Heading1>Login Below</Heading1>
      </StyledDiv>
      <FormikLoginForm />
    </div>

  )//end return
}// end Login

export default withRouter(Login)
