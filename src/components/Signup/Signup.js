import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';

//styles
import {Error} from './SignupStyles';

const Registration = ({values, errors, touched, status }) => {
  const [error, setError]= useState('');
  const history= useHistory();

    useEffect(() =>{
      if(typeof status === 'string'){
        setError(status);
      }else{
        setError('');
        status && values.setUser({
          ...values.user, ...status
        });
        // history.push('/login');
        console.log('user from useEffect: ', values.user);
      }//end if/else
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
                {/* <label className="checkbox-container">
                    Terms of Service
                    <Field
                        id="tos"
                        type="checkbox"
                        name="tos"
                        checked={values.tos}
                    />
                    {errors.tos && (<p className="errors">{errors.tos}</p>)}
                    <span className="checkmark" />
                </label> */}
                <button type="submit">Register</button>
            </Form>
              {error? <Error className= 'error'>{error}</Error> : null }
            { 
              <>
                <p><i>testing purposes only:</i></p>
                <p>useName: {values.username}</p>
                <p>password: {values.password}</p>
                <p>phone: {values.phoneNumber}</p>
              </>
            }
        </div>
    );
};

const FormikRegistration = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.user.username || '',
            phoneNumber: props.user.phoneNumber || '',
            password: props.user.password || '',
            // tos: props.tos || false,
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
    handleSubmit(values, { setStatus, resetForm}) {
        axios.post('https://bw-replate-1.herokuapp.com/api/auth/register', values)
                .then(res => {
                    setStatus(res);
                    console.log('res: ', res);
                    resetForm();
                })
                .catch(err => {
                  if (err.response.status === 500){
                    setStatus('That user already exists');
                  }else{
                    console.log('Error: ', err.response);
                  }
                  // console.log('Error: ', err.response.status)
                })
    }
})(Registration)
export default FormikRegistration;