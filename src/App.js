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

import {EditCurrentPickups} from "./components/Profile/Volunteer/EditCurrentPickups";
import {AvailablePickups} from "./components/Profile/Volunteer/AvailablePickups";
import {AcceptPickup} from "./components/Profile/Volunteer/AcceptPickup";
import Business from "./components/Profile/Business/Business";
import {AddPlate} from "./components/Profile/Business/AddPlate";

//styles
import "./App.css";

function App() {
  //signup form state
  const [createUser, setCreateUser] = useState({
    username: "",
    password: "",
    phoneNumber: ""
  });


  const [data, setData] = useState({
    address: "",
    phoneNumber: "",
    plates: "",
    businesses: ""
  });

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

          <Route path="/profile">
            <h1 className="mainHeadingProfile">Replate</h1>
            <Profile />
          </Route>


        <Route path="/logout">
          <h2 className="mainHeadingLogout">See You At Your Next Replate</h2>
          <Logout setLoggedInUser= {setLoggedInUser}/>
        </Route>

        

          <Route path="/signup">
            <h2 className="mainHeadingSignUp"> Register Below </h2>
            <FormikRegistration user={user} setUser={setUser} />
          </Route>

          
          <Route path="/editcurrentpickup">
            <EditCurrentPickups/>
          </Route>



          <Route path="/availablepickups">
          <h2 className="mainHeadingPickupsList">AvailablePickups</h2>
            <AvailablePickups/>
          </Route>

        
          <Route path="/viewpickup/:id"><AcceptPickup/></Route>

          <Route path="/business" component={Business} />



        <Route path="/viewpickup:1"><AcceptPickup /></Route>

          <Route path="/addplate" component={AddPlate} />



      </UserContext.Provider>
    </div>
  );
} //end App

export default App;