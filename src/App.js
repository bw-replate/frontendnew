import React, {useState} from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Business from "./components/Profile/Business/Business";

//contexts
import {UserContext} from './Contexts/UserContext';

//imports
import Header from './components/Header/Header';
import FormikRegistration from './components/Signup/Signup';

//styles
import './App.css';

function App() {
  const [user, setUser]= useState();

  return (


      <div className="App">
        <UserContext.Provider value= {user}>
          <Header/>

        <Route exact path="/">
        <h1 className="mainHeading"> Replate </h1>
          <Login/>
        </Route>

        <Route exact path="/profile">
        <h1 className="mainHeading"> Profile </h1>
          <Profile/>
        </Route>

          {/* login component */}

        <Route path="/signup">
        <h2 className="mainHeading"> Register Below </h2>
          <FormikRegistration user= {user} setUser= {setUser} />
        </Route>

      </UserContext.Provider>

      </div>
  );
}//end App

export default App;