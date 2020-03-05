import React, {useState} from 'react';

const Editbusiness = () => {
  const [formValue, setFormValue]= useState({
    address: '',
    phoneNumber: ''
  });

  const handleChange= e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
    console.log('formValue: ', formValue);
  }//end handleChange

  return (
    <div className= 'editBusinessCont'>
      <form>
        <label htmlFor= 'address'>Address</label>  
        <input 
          onChange= {handleChange}
          type= 'text'
          name= 'address'
          id= 'address'
        />
      </form>      
    </div>
  )
}

export default Editbusiness;