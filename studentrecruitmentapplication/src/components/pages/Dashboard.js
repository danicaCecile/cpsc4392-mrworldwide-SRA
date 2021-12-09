import './dashboard.css';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios'

export default function Dashboard() {
  Axios.defaults.withCredentials = true;
  const [authorize, setAuthorize] = useState("false");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setAuthorize("true");
      }
    });
  }, []);

  /*if(!authorize) {
    return <Redirect to = '/register' />
  }*/

    return (
      <>
      <div className="sidenav">
      <p>{authorize}</p>
      </div>

      <div className="main">
        <h2>Sidenav Example</h2>
        <p>This sidenav is always shown.</p>
      </div>
      </>
    );
}