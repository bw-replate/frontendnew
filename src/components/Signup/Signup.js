import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Registration = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        status && setUsers(users => [...users, status]);
    }, [status])
    return (
        <div className="user-form">
            <Form>
                <label htmlFor="name">
                    Name
                    <Field
                        id="name"
                        type="text"
                        name="name"
                        placeholder="username"
                    />
                    {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                </label>
                <label htmlFor="password">
                    Name
                    <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
                </label>
                <label htmlFor="phoneNumber">
                    Email
                    <Field
                        id="phoneNumber"
                        type="number"
                        name="phoneNumber"
                        placeholder="number"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (<p className="errors">{errors.phoneNumber}</p>)}
                </label>
                <label className="checkbox-container">
                    Terms of Service
                    <Field
                        id="tos"
                        type="checkbox"
                        name="tos"
                        checked={values.tos}
                    />
                    {errors.tos && (<p className="errors">{errors.tos}</p>)}
                    <span className="checkmark" />
                </label>
                <button type="submit">Register</button>
            </Form>
            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>Name: {user.name}</li>
                        <li>Password: {user.password}</li>
                        <li>Number: {user.phoneNumber}</li>
                    </ul>
                )
            })}
        </div>
    );
};

const FormikRegistration = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || '',
            phoneNumber: props.phoneNumber || '',
            password: props.password || '',
            tos: props.tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.bool().oneOf([true],"Please accept Terms of Service to Continue").required()
    }),
    handleSubmit(values, { setStatus, resetForm}) {
        axios.post('https://reqres.in/api/users', values)
                .then(res => {
                    setStatus(res.data);
                    resetForm();
                })
                .catch(err => console.log(err.response))
    }
})(Registration)
export default FormikRegistration;