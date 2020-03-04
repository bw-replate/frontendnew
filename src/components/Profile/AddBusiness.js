import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const AddBusiness = ({ errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        status && setUsers(address => [...address, status]);
    }, [status])
    return (
        <div className="business-address">
            <Form>
                <label htmlFor="business-add">
                    Name
                    <Field
                        id="businessAddress"
                        type="text"
                        name="businessAddress"
                        placeholder="Address of Business"
                    />
                    {touched.businessAddress && errors.businessAddress && (<p className="errors">{errors.businessAddress}</p>)}
                    <span className="checkmark" />
                </label>
                <button type="submit">Update</button>
            </Form>
            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>Address: {user.businessAddress}</li>
                    </ul>
                )
            })}
        </div>
    );
};

const FormikAddBusiness = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.businessAddress || ''
        };
    },
    validationSchema: Yup.object().shape({
        businessAddress: Yup.string().required()
    }),
    handleSubmit({ setStatus, resetForm}) {
        axios.post('https://reqres.in/api/users')
                .then(res => {
                    setStatus(res.data);
                    resetForm();
                })
                .catch(err => console.log(err.response))
    }
})(AddBusiness)
export default FormikAddBusiness;