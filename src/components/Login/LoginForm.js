import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import {Route, NavLink, useHistory} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

//utils
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//components

//stlyles
import {Error, Message} from './LoginStyles';

const LoginForm = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState({
    usename: '',
    password: ''
  });
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const history = useHistory();
  useEffect(() => {
    // status && console.log("status:", status);
    //if status contains a response, and is not undefined... proceed
    if( typeof status === 'object' && status !== undefined ){
      setIsError(false);
      status && setUser({
        ...user,
        status
      });
      status && window.localStorage.setItem('token', status.token);
      setIsError(false);
      setMessage('Successful Registration');
      setTimeout( () => {
        //redirect
        history.push('/profile');  
      },1000 );//end setTimeout
    }else if( status === 'error' ){
      setIsError(true);
      setMessage('Username or password is incorrect');
    }//end if

  }, [status]);

  return (
    <div className="userForm">
      <Form>
        <label htmlFor="username">Username</label>
        <Field
          id="username"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}

        <label htmlFor="password">Password</label>
        <Field
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">Login</button>
      </Form>
      {/* if error, show it */}
        {isError ? <Error className= 'error'>{message}</Error>:
          // if success message, show it
          !isError && message ? <Message>{message}</Message> : null
        }

    </div>
  );
};

const FormikLoginForm = withFormik({

  mapPropsToValues({ }) {
    return {

    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {

    //send submitted values
    axiosWithAuth()
      .post("https://bw-replate-1.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log("success", response);
        setStatus(response.data);
        // resetForm();
      })
      .catch(err => {
        setStatus('error');
        console.log('Error: ', err);
      })
      setStatus('')
  }//end handleSubmit

})(LoginForm);

export default FormikLoginForm;