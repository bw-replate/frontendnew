import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

//utils
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//stlyles
import { Error, Message } from './LoginStyles';

const LoginForm = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  let curUser = '';

  //redirect if theyre already logged in
  if (window.localStorage.getItem('token')) {
    history.push('/profile');
  }

  useEffect(() => {
    //if status contains a response, and is not undefined... proceed
    if (typeof status === 'object' && status !== undefined) {
      setIsError(false);
      curUser = status.message.slice(8);
      setUser(curUser);

      status && window.localStorage.setItem('loggedInUser', values.username);
      status && window.localStorage.setItem('token', status.token);
      setIsError(false);
      setMessage('Successful Log In');
      setTimeout(() => {
        //redirect
        //this allows time to see success message before redirecting
        history.push(`/profile`);
      }, 1000);//end setTimeout

    } else if (status === 'error') {
      setIsError(true);
      setMessage('Username or password is incorrect');
    }//end if
  }, [status]);

  return (
    <div className="userForm">
      {/* if error, show it */
        isError ? <Error className='error'>{message}</Error> :
          // if success message, show it
          !isError && message ? <Message>{message}</Message> : null
      }
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
      <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
    </div>
  );
};

const FormikLoginForm = withFormik({

  mapPropsToValues({ username, password }) {
    return {
      username: username,
      password: password
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    //send submitted values
    axiosWithAuth()
      .post("https://bw-replate-1.herokuapp.com/api/auth/login", values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(err => {
        setStatus('error');
      })
    setStatus('')
  }//end handleSubmit

})(LoginForm);

export default FormikLoginForm;