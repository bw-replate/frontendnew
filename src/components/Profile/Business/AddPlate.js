import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import * as Yup from "yup";

//utils
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

const AddPlate = ({ values, touched, errors, status }) => {
  const [plate, addPlate] = useState()
  

  useEffect(() => {
      status && addPlate(plate => [...plate, status])
  }, [status]);

  return (
    <div className="addPlateForm">
      <Form>
        <label htmlFor="type">Type</label>
        <Field id="type" type="text" name="type" placeholder="type" />
        {touched.type && errors.type && <p className="errors">{errors.type}</p>}

        <label htmlFor="amount">Amount</label>
        <Field id="amount" type="text" name="amount" placeholder="amount" />
        {touched.amount && errors.amount && (
          <p className="errors">{errors.amount}</p>
        )}

        <label htmlFor="time">Preferred Pickup Time</label>
        <Field id="time" type="text" name="time" placeholder="pickup time" />
        {touched.time && errors.time && <p className="errors">{errors.time}</p>}

        <label htmlFor="id">Business Id</label>
        <Field
          id="businessId"
          type="text"
          name="businessId"
          placeholder="Business Id"
        />
        {touched.businessId && errors.businessId && (
          <p className="errors">{errors.businessId}</p>
        )}
        <button type="submit">Add Plate</button>
      </Form>   
    </div>
  );
};

const FormikAddPlateForm = withFormik({
    mapPropsToValues({amount, type, time, businessId }) {
      return {
        type: type || '',
        amount: amount || '',
        time: time || '',
        businessId: businessId || ''
      };
    },

  validationSchema: Yup.object().shape({
    businessId: Yup.string().required(),
    amount: Yup.string().required(),
    type: Yup.string().required(),
    time: Yup.string().required()
  }),

    handleSubmit(values, { setStatus, resetForm, setSubmitting }) {

        console.log('submitting', values);

      //send submitted values
      axiosWithAuth()
        .post("https://bw-replate-1.herokuapp.com/api/pickupRequest", values)
        .then(response => {
          console.log("success", response);
          setStatus(response);
          resetForm();
        })
        .catch(err => {
          setStatus('error');
          console.log('Error: ', err);
        });
    }//end handleSubmit
})(AddPlate);

export default FormikAddPlateForm;
