import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

//contexts
import { UserContext } from "./Contexts/UserContext";

//imports
import Header from "./components/Header/Header";
import FormikRegistration from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { axiosWithAuth } from './utils/axiosWithAuth';
import EditBusiness from './components/Profile/Business/Editbusiness';
import ProfileEdit from './components/Profile/ProfileEdit';

import { EditCurrentPickups } from "./components/Profile/Volunteer/EditCurrentPickups";
import { AvailablePickups } from "./components/Profile/Volunteer/AvailablePickups";
import { AcceptPickup } from "./components/Profile/Volunteer/AcceptPickup";
import Business from "./components/Profile/Business/Business";

import FormikAddPlateForm from "./components/Profile/Business/AddPlate";
import FormikAddBusiness from './components/Profile/Business/AddBusiness';

//styles
import "./App.css";

function App() {
  //signup form state
  const [createUser, setCreateUser] = useState({
    username: "",
    password: "",
    phoneNumber: ""
  });

  const [data] = useState({
    address: "",
    phoneNumber: "",
    plates: "",
    businesses: ""
  })

  // state
  const [loggedInUser, setLoggedInUser] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [businessToEdit, setBusinessToEdit] = useState({});
  const history= useHistory();
  const [loggedIn, setLoggedIn]= useState(false); 

  //for Log in page
  useEffect(() => {
    setLoggedInUser(window.localStorage.getItem('loggedInUser') ? ' ' + window.localStorage.getItem('loggedInUser') : '');
  }, [loggedInUser]);


  //for business profile
  const getBusinesses= () => {
    console.log('getBusinesses');
    axiosWithAuth()
      .get('https://bw-replate-1.herokuapp.com/api/business')
      .then(res => {
        setProfiles(res.data)
      })
      .catch(error => {
        console.log('err', error)
      })

  }//end getBusinesses

    //get businessses on first page load
  useEffect(() => {
    getBusinesses();
  }, [])

  const deleteBusiness = (id) => {
    console.log('delete business');
    axiosWithAuth()
      .delete(`https://bw-replate-1.herokuapp.com/api/business/${id}`)
      .then(delRes => {
        console.log('delRes', delRes);
        console.log('id', id);
        getBusinesses();
      })
      .catch(delErr => {
        console.log('delError')
      })
  }//end deleteBusiness

  const editBusiness = (profile) => {
    console.log('Edit business');
    setBusinessToEdit(profile);
    history.push('/editbusiness')

  }//end editBusiness
  
  return (
    <div className="App">
      <UserContext.Provider value={{
        loggedIn,
        setLoggedIn,
        profiles,
        loggedInUser,
        setLoggedInUser,
        data,
        deleteBusiness,
        editBusiness,
        businessToEdit,
        getBusinesses,
      }}>
        <Route path='/'><Header loggedInUser={loggedInUser} /></Route>

        <Route path="/signup">
          <h2 className="mainHeadingSignUp" style={{textAlign: 'center', fontSize: '3rem'}}> Register Below </h2>
          <FormikRegistration createUser={createUser} setCreateUser={setCreateUser} />
        </Route>

        <Route exact path="/">
          <h1 className="mainHeading"> Replate </h1>
          <Login />
        </Route>

        <Route path="/profile">
          <h1 className="mainHeadingProfile">Replate</h1>
          <Profile loggedInUser={loggedInUser} />
        </Route>

        <Route path="/availablepickups">
          <h1 className="mainHeadingAddPlate">AvailablePickups</h1>
          <AvailablePickups/>
        </Route>

        <Route path="/viewpickup/:id"><AcceptPickup/></Route>

        <Route path="/logout">
          <h2 className="mainHeadingLogout">See You At Your Next Replate</h2>
          <Logout setLoggedInUser={setLoggedInUser} />
        </Route>

        <Route path="/editcurrentpickup">
          <EditCurrentPickups />
        </Route>


          <Route path="/addplate">
            <h2 className="mainHeadingAddPlate">Add A Plate</h2>
            <FormikAddPlateForm/>
          </Route>

          
          <Route path="/business/:username" component={Business} />
          <Route exact path="/addbusiness" component={FormikAddBusiness} />
          <Route exact path= '/editbusiness'>
            <EditBusiness />
          </Route>

          <Route exact path= '/editprofile'>
            <ProfileEdit />
          </Route>

      </UserContext.Provider>
    </div>
  );
}

export default App;