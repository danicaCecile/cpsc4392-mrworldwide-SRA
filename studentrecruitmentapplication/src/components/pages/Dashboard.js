import './dashboard.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if(response.data.loggedIn == false) {
        history.push('/');
      }
    })
  }, [history]);

    return (
      <>
      <div id = {(function() {
        console.log(login);
      })()}></div>

      <div className="sidenav">
      <h1>Button</h1>
      </div>

      <div className="main">
        <h2>Sidenav Example</h2>
        <h1>hi</h1>
      </div>
      </>
    );
}