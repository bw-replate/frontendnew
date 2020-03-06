import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { axiosWithAuth } from '../../../utils/axiosWithAuth';

const AddPlate = ({ touched, errors, status }) => {
const [plate, addPlate] = useState([])


  useEffect(() => {
      status && addPlate(plate => [...plate, status]);
  }, [status]);

  return (
    <div className="addPlateForm">
      <Form style={{ width: '50%', margin: '0 auto', background: 'blue', borderRadius: '50%' }}>
        <label htmlFor="type" style={{ textAlign: 'center' }}>Type</label>
        <Field id="type" type="text" name="type" placeholder="type" />
        {touched.type && errors.type && <p className="errors">{errors.type}</p>}

        <label htmlFor="amount" style={{ textAlign: 'center' }}>Amount</label>
        <Field id="amount" type="text" name="amount" placeholder="amount" />
        {touched.amount && errors.amount && (
          <p className="errors">{errors.amount}</p>
        )}

        <label htmlFor="preferredPickupTime" style={{ textAlign: 'center' }}>Preferred Pickup Time</label>
        <Field id="preferredPickupTime" type="text" name="preferredPickupTime" placeholder="pickup time" />
        {touched.preferredPickupTime && errors.preferredPickupTime && <p className="errors">{errors.preferredPickupTime}</p>}

        <label htmlFor="id" style={{ textAlign: 'center' }}>Business Id</label>
        <Field
          id="businessId"
          type="text"
          name="businessId"
          placeholder="Business Id"
        />
        {touched.businessId && errors.businessId && (
          <p className="errors">{errors.businessId}</p>
        )}
        <button type="submit" style={{ margin: '0 auto' }}>Add Plate</button>
      </Form>
      {plate.map((item, index) => {
        return (
          <ul key={index}>
            <li>Type: {item.type}</li>
            <li>Name: {item.name}</li>
            <li>Time: {item.preferredPickupTime}</li>
          </ul>
        )
      })}
    </div>
  );
};

const FormikAddPlateForm = withFormik({
  
    mapPropsToValues({amount, type, businessId }) {
      return {
        type: type || '',
        amount: amount || '',
        preferredPickupTime: Date.now(),
        businessId: businessId || ''
      };
    },

  validationSchema: Yup.object().shape({
    businessId: Yup.string().required(),
    amount: Yup.string().required(),
    type: Yup.string().required(),
    preferredPickupTime: Yup.string().required()
  }),


  handleSubmit(values, { setStatus, resetForm }) {

    const newPlate = { business_id: values.businessId, amount: values.amount, type: values.type, preferredPickupTime: values.preferredPickupTime }
    //send submitted values
    axiosWithAuth()
      .post("https://bw-replate-1.herokuapp.com/api/pickupRequest", newPlate)
      .then(response => {
        setStatus(response);
        resetForm();
      })
      .catch(err => {
        setStatus('error');
      });
  }//end handleSubmit


})(AddPlate);

export default FormikAddPlateForm;




