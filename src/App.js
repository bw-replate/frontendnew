import React, {useState} from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import {Route} from "react-router-dom";
import Business from "./components/Profile/Business/Business";

//contexts
import {UserContext} from './Contexts/UserContext';

//imports
import Header from './components/Header/Header';
import FormikRegistration from './components/Signup/Signup';
import Profile from './components/Profile/Profile';


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
        {/* <UserContext.Provider value= {user}> */}
          <Header/>

          {/* site heading */}
        <Route exact path="/">
        <h1 className="mainHeading"> Replate </h1>
          <Login/>
        </Route>

        <Route exact path="/profile">
        <h1 className="mainHeading"> Profile </h1>
          <Profile/>
        </Route>

          {/* login component */}
<<<<<<< HEAD
          <FormikRegistration 
            setUser= {setUser} 
            user= {user} 
            />
        </UserContext.Provider>
        <Route exact path="/busines" component={Business} />
=======

        <Route path="/register">
        <h2 className="mainHeading"> Register Below </h2>
          <FormikRegistration user= {user} setUser= {setUser} />
        {/* </UserContext.Provider> */}
        </Route>

>>>>>>> 44f70b701490658bf47aaa604f242cd02d3825fa
      </div>
  );
}//end App

export default App;