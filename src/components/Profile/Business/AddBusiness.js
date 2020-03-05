import React, { useState, useEffect, useContext } from 'react';
import { withFormik, Form, Field } from 'formik';
import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../../Contexts/UserContext';

function AddBusiness ({ errors, touched, status, values }) {
    const [users, setUsers] = useState([]);
    const history= useHistory();
    const {getBusinesses}= useContext(UserContext);

    const handleFinished= () => {
      history.push(`/profile`);
      getBusinesses();
    }//end handleFinished

    useEffect(() =>{
        status && setUsers(address => [...address, status]);
        
    }, [status])
    return (
        <div className="business-address">
            <Form>
                <label htmlFor="business-add">
                    Username
                    <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                    />
                    {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
                    Business Number
                    <Field
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        placeholder="phoneNumber"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (<p className="errors">{errors.phoneNumber}</p>)}
                    Business Address
                    <Field
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Address of Business"
                    />
                    {touched.address && errors.address && (<p className="errors">{errors.address}</p>)}
                </label>
                <label htmlFor="name-add">
                    Business Name
                    <Field
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name of Business"
                    />
                    {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                </label>
                <button type="submit">Update</button>
            </Form>
            <button onClick= {() => handleFinished()}>Finished</button>
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
            address: props.address || '',
            name: props.name || '',
            phoneNumber: props.phoneNumber || '',
            username: props.username || ''

        };
    },
    validationSchema: Yup.object().shape({
        address: Yup.string().required(),
        name: Yup.string().required()
    }),
    handleSubmit(values, { setStatus, resetForm}) {
        axiosWithAuth()
                .post('https://bw-replate-1.herokuapp.com/api/business/',values)
                .then(res => {
                    setStatus(res.data);
                    console.log('addBusinessRes: ', res);
                    resetForm();
                })
                .catch(err => console.log(err.response))
    }
})(AddBusiness)
export default FormikAddBusiness;