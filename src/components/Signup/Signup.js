import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//styles
import '../../globalStyles/styleVars';
import {Anchor, Button} from '../../globalStyles/globalStyles';
import { Error, Message, ExistingAccount } from './SignupStyles';

const Registration = ({ values, errors, touched, status }) => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (typeof status === 'object' && status !== undefined) {
      status && values.setCreateUser({
        ...values.createUser, ...status
      });
      setIsError(false);
      setMessage('Successful Registration');
    } else if (status === 'duplicate') {
      setIsError(true);
      setMessage('That user already exists');
    }

  }, [status, values])
  return (
    <div style={{textAlign: 'center'}} className="user-form">
      { // if there are errors show them
        isError ? <Error className='error'>{message}</Error> :
          //if theres a message but no errors its a succes message, show it
          message.length > 1 && isError === false ? <Message className='message'>{message}</Message> : null
      }

      <Form style={{background: 'red', width: '50%', margin: '0 auto'}}>
        <label htmlFor="username" style={{textAlign: 'center'}}>
          Name
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (<p classusername="errors">{errors.username}</p>)}
        </label>
        <label htmlFor="password" style={{textAlign: 'center'}}>
          Password
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
        </label>
        <label htmlFor="phoneNumber" style={{textAlign: 'center'}}>
          Phone
          <Field
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone"
          />
          {touched.phoneNumber && errors.phoneNumber && (<p className="errors">{errors.phoneNumber}</p>)}
        </label>

        <Button type="submit"  style={{margin: '0 auto' }}>Register</Button>
        <ExistingAccount>Already have an account? 
        <Anchor>
          <Link to='/'>Log in</Link>
        </Anchor>
      </ExistingAccount>
      </Form>

      { //if successful registration show button to goto log in page 
        message === 'Successful Registration' ? <Anchor><Link to='/'><button>Log In</button></Link></Anchor> : null}
    </div>
  );
};

const FormikRegistration = withFormik({
  mapPropsToValues(props) {
    return {
      createUser: props.creatUser,
      username: props.createUser.username,
      phoneNumber: props.createUser.phoneNumber,
      password: props.password,
      setCreateUser: props.setCreateUser
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('https://bw-replate-1.herokuapp.com/api/auth/register', values)
      .then(res => {
        setStatus(res);
        resetForm();
      })
      .then(() => { setStatus('') })
      .catch(err => {
        if (err.response.status === 500) {
          setStatus('duplicate');
          resetForm();
        }//end if
      })

    setStatus('');
  }//end handleSubmit
})(Registration)
export default FormikRegistration;