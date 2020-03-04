import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//styles
import { Error, Message } from './SignupStyles';

const Registration = ({ values, errors, touched, status }) => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('status: ', status);
    if ( typeof status === 'object' && status !== undefined) {
      status && values.setUser({
        ...values.user, ...status
      });
      setIsError(false);
      setMessage('Successful Registration');
    }else if( status === 'duplicate' ){
      setIsError(true);
      setMessage('That user already exists');
    }

  }, [status])
  return (
    <div className="user-form">

      {console.log('user: ', values.user)}

      <Form>
        <label htmlFor="username">
          Name
                    <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (<p classusername="errors">{errors.name}</p>)}
        </label>
        <label htmlFor="password">
          Password
                    <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
        </label>
        <label htmlFor="phoneNumber">
          Phone
                    <Field
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone"
          />
          {touched.phoneNumber && errors.phoneNumber && (<p className="errors">{errors.phoneNumber}</p>)}
        </label>

        <button type="submit">Register</button>
      </Form>
      { // if there are errors show them
        isError ? <Error className='error'>{message}</Error> :
        //if theres a message but no errors its a succes message, show it
          message.length > 1 && isError === false ? <Message className='message'>{message}</Message> : null
      }
      { //if successful registration show button to goto log in page 
      message === 'Successful Registration' ? <Link to= '/'><button>Log In</button></Link> : null}
    </div>
  );
};

const FormikRegistration = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.user.username || '',
      phoneNumber: props.user.phoneNumber || '',
      password: props.user.password || '',
      user: props.user,
      setUser: props.setUser
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    password: Yup.string().required(),
    // tos: Yup.bool().oneOf([true],"Please accept Terms of Service to Continue").required()
  }),
  handleSubmit(values,{setStatus, resetForm }) {
    axios.post('https://bw-replate-1.herokuapp.com/api/auth/register', values)
      .then(res => {
        setStatus(res);
        resetForm();
      })
      .then( () => {setStatus('')} )
      .catch(err => {
        if (err.response.status === 500) {
          setStatus('duplicate');
          resetForm();
        }
        // console.log('Error: ', err.response.status);
      })
      setStatus('');
  }//end handleSubmit
})(Registration)
export default FormikRegistration;