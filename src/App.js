import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

//contexts
import { UserContext } from "./Contexts/UserContext";

//imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormikRegistration from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { EditCurrentPickups } from "./components/Profile/Volunteer/EditCurrentPickups";
import { AvailablePickups } from "./components/Profile/Volunteer/AvailablePickups";
import { AcceptPickup } from "./components/Profile/Volunteer/AcceptPickup";

//styles
import "./App.css";

function App() {
  //signup form state
  const [createUser, setCreateUser] = useState({
    username: "",
    password: "",
    phoneNumber: ""
  });

  //login from state
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect( () => {
    setLoggedInUser(window.localStorage.getItem('loggedInUser') ? ' '+window.localStorage.getItem('loggedInUser') : '');
    
  }, [loggedInUser]);

  return (
    <div className="App">
      <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Header loggedInUser= {loggedInUser}/>

        <Route path="/signup">
          <h2 className="mainHeadingSignUp"> Register Below </h2>
          <FormikRegistration createUser={createUser} setCreateUser={setCreateUser} />
        </Route>

        <Route exact path="/">
          <h1 className="mainHeading"> Replate </h1>
          <Login />
        </Route>

        <Route path="/logout">
          <h2 className="mainHeadingLogout">See You At Your Next Replate</h2>
          <Logout setLoggedInUser= {setLoggedInUser}/>
        </Route>

        <Route exact path="/profile">
          <h1 className="mainHeadingProfile">Replate</h1>
          <Profile />
        </Route>

        <Route path="/availablepickups">
          <h2 className="mainHeadingPickupsList">AvailablePickups</h2>
          <AvailablePickups />
        </Route>

        <Route path="/editcurrentpickup">
          <EditCurrentPickups />
        </Route>

        <Route path="/viewpickup:1"><AcceptPickup /></Route>

      </UserContext.Provider>
    </div>
  );
} //end App

export default App;
