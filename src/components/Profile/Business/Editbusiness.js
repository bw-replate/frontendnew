import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../Contexts/UserContext';

function EditBusiness() {
  const history = useHistory();
  const { getBusinesses, businessToEdit } = useContext(UserContext);
  const [formValues, setFormValues] = useState({ ...businessToEdit });

  useEffect(() => {
    setFormValues({
      ...formValues, ...businessToEdit
    });

  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bw-replate-1.herokuapp.com/api/business/${businessToEdit.id}`, {
        phoneNumber: formValues.phoneNumber,
        address: formValues.address,
        name: formValues.name
      })
      .then(editBusRes => {
        getBusinesses();
        history.push('/profile');
        // resetForm();
      })
      .catch(editBusErr => {
        // console.log('editBusErr', editBusErr.response)
      })

  }//end handleSubmit

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }//end handleChange

  return (
    <div className="business-address">
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input disabled style={{ backgroundColor: '#eeeeee' }}
          value={formValues.username}
          id="username"
          type="text"
          name="username"
          placeholder="username"
        />

        <label htmlFor='phoneNumber'>Business Number</label>
        <input
          onChange={handleChange}
          value={formValues.phoneNumber}
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
        />

        <label htmlFor='address'>Business Address</label>
        <input
          onChange={handleChange}
          value={formValues.address}
          id="address"
          type="text"
          name="address"
          placeholder="Address of Business"
        />

        <label htmlFor='name'>Business Name</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          id="name"
          type="text"
          name="name"
          placeholder="Name of Business"
        />
        <button type="submit">Update</button>
        <button type='button' onClick={() => { history.push('/profile') }}>cancel</button>
      </form>
    </div>
  );
};//end editbusiness

export default EditBusiness;