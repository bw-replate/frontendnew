import React, { useState } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

const ProfileEdit = ({ volunteerToEdit }) => {
  const [volunteerData, setVolunteerData] = useState(volunteerToEdit);

  const [formValue, setFormValue] = useState(volunteerToEdit.phoneNumber);

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }//end handleChange

  const handleSubmit = e => {
    e.preventDefault();
    setVolunteerData({
      ...volunteerData,
      phoneNumber: formValue
    });

    axiosWithAuth()
      .put(`https://bw-replate-1.herokuapp.com/api/volunteer/${volunteerData.id}`, volunteerData)
    // .then(res => {console.log('edit volunteer data: ', res)})
    // .catch(err => {console.log('edit volunteer error: ', err)})
  }//end handleSubmit

  return (
    <div className='editProfileCont'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='phoneNumber'>phoneNumber</label>
        <input
          onChange={handleChange}
          value={formValue}
          name='phoneNumber'
          id='phoneNumber'
          placeholder='Phone Number'
        />
        <button>Submit Changes</button>
      </form>

    </div>
  )
}//end profileEdit

export default ProfileEdit;