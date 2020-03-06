import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

import "./volunteer.css";
// import { AcceptPickup } from "./AcceptPickup";

export const AvailablePickups = () => {
  const [pickups, setPickups] = useState([]);

  function addToVolProfile(){
    
  }

  useEffect(() => {
    axiosWithAuth()
      .get("https://bw-replate-1.herokuapp.com/api/pickupRequest")
      .then(response => {
        setPickups(response.data);
      });
  }, []);

  return (
    <div className="pickupsList">
      {pickups.map(pickup => {
        return (
          <div className="pickupList">
            <h2>Business Name: {pickup.id}</h2>
            <h2>Food Type: {pickup.type}</h2>
            <h2>Amount: {pickup.amount}</h2>
            <h2>Pickup Time: {pickup.preferredPickupTime}</h2>
            <NavLink to="/acceptPickup"><button>Accept{pickup.id}</button></NavLink>
            <button>Completed</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};//end availablePickups
