import React, {useState} from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import {Route} from "react-router-dom";

//contexts
import {UserContext} from './Contexts/UserContext';

//imports
import Header from './components/Header/Header';
import FormikRegistration from './components/Signup/Signup';

//styles
import './App.css';

function App() {
  const [user, setUser]= useState({
    username: '',
    password: '',
    phoneNumber: ''
  });

  return (


      <div className="App">
        <UserContext.Provider value= {user}>
          <Header/>

          {/* site heading */}
          <h1> Replate </h1>

          {/* login component */}
          <FormikRegistration 
            setUser= {setUser} 
            user= {user} 
            />
        </UserContext.Provider>
      </div>
  );
}//end App

export default App;
