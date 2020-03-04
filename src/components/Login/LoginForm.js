import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

//utils
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//components

const LoginForm = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState({
    usename: '',
    password: ''
  });

  useEffect(() => {
    status && console.log("status has changes", status.token);
    status && setUser({
      ...user,
      status
    });
    status && window.localStorage.setItem('token', status.token);

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
    </div>
  );
};

const FormikLoginForm = withFormik({

  mapPropsToValues({ password, username }) {
    return {
      username: username || "",
      password: password || ""
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
      });
  }//end handleSubmit

})(LoginForm);

export default FormikLoginForm;