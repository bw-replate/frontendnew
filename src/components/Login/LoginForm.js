import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

//imports

//styles
const LoginForm = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log("status has changes", status);
    status && setUser(user => [...user, status]);
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
        <NavLink to="/profile"><button type="submit">Login</button></NavLink>
      </Form>
    </div>
  );
};

//super component

// The withFormik higher order component passes props and handler functions into your React component. All Formik forms need to be passed a handleSubmit prop. This should be a function which is called whenever the form is submitted. The withFormik wrapper automatically handles the onChange and onBlur functionality for you, however, this can be customised if needed.


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

   //handles submission

   handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    console.log("submitting", values);
    console.log('Submitted Username:', values.username);
    console.log('Submitted Password:', values.password)
    //send submitted values
    axios.post("https://bw-replate-1.herokuapp.com/api/auth/login", values)
    .then(response => {
      console.log("success", response);
      setStatus(response.data);
      resetForm();
    });
  }

  })(LoginForm);

  export default FormikLoginForm;