import React, { useState } from "react";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";

//contexts
import { UserContext } from "./Contexts/UserContext";

//imports
import Header from "./components/Header/Header";
import FormikRegistration from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/Logout";
import {EditCurrentPickups} from "./components/Profile/Volunteer/EditCurrentPickups";
import {AvailablePickups} from "./components/Profile/Volunteer/AvailablePickups";
import {AcceptPickup} from "./components/Profile/Volunteer/AcceptPickup";
import Business from "./components/Profile/Business/Business";


//styles
import "./App.css";



function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    phoneNumber: ""
  });

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />

        <Switch>
          <Route exact path="/">
            <h1 className="mainHeading"> Replate </h1>
            <Login />
          </Route>

          <Route exact path="/profile">
            <h1 className="mainHeadingProfile">Replate</h1>
            <Profile />
          </Route>

          <Route path="/signup">
            <h2 className="mainHeadingSignUp"> Register Below </h2>
            <FormikRegistration user={user} setUser={setUser} />
          </Route>

          <Route path="/logout">
            <h2 className="mainHeadingLogout">See You At Your Next Replate</h2>
            <Logout />
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
        </Switch>
      </UserContext.Provider>
    </div>
  );
} //end App

export default App;