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
import {axiosWithAuth} from './utils/axiosWithAuth';

import { EditCurrentPickups } from "./components/Profile/Volunteer/EditCurrentPickups";
import { AvailablePickups } from "./components/Profile/Volunteer/AvailablePickups";
import { AcceptPickup } from "./components/Profile/Volunteer/AcceptPickup";
import Business from "./components/Profile/Business/Business";
import {AddPlate} from "./components/Profile/Business/AddPlate";
import FormikAddBusiness from './components/Profile/AddBusiness';

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
  })

  const [loggedInUser, setLoggedInUser] = useState('');
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setLoggedInUser(window.localStorage.getItem('loggedInUser') ? ' ' + window.localStorage.getItem('loggedInUser') : '');


  }, [loggedInUser]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://bw-replate-1.herokuapp.com/api/business')
      .then(res => {
        console.log('flag', res)
        setProfiles(res.data)
      })
      .catch(error => {
        console.log('err', error)
      })
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{profiles, loggedInUser, setLoggedInUser, data }}>
        <Route path= '/'><Header loggedInUser={loggedInUser} /></Route>

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

         

          <Route path="/editcurrentpickup">
            <EditCurrentPickups />
          </Route>



          <Route path="/availablepickups">
            <h2 className="mainHeadingPickupsList">AvailablePickups</h2>
            <AvailablePickups />
          </Route>


      
          <Route path="/viewpickup/:id"><AcceptPickup/></Route>
          <Route path="/business" component={Business} />
          <Route path="/addplate" component={AddPlate} />
          <Route exact path="/addbusiness" component={FormikAddBusiness} />

      </UserContext.Provider>
    </div>
  );
}

export default App;