import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { Route, NavLink } from "react-router-dom";

import "./volunteer.css";
import { AcceptPickup } from "./AcceptPickup";

export const AvailablePickups = () => {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://bw-replate-1.herokuapp.com/api/pickupRequest")
      .then(response => {
        console.log(response);
        setPickups(response.data);
      });
  }, []);

  return (
    <div className="pickupsList">
      {pickups.map(pickup => {
        return (
          <div>
            <h2>{pickup.business_id}</h2>
            <h2>{pickup.type}</h2>
            <h2>{pickup.amount}</h2>
            <h2>{pickup.preferredPickupTime}</h2>
          </div>
        );
      })}
    </div>
  );
};
