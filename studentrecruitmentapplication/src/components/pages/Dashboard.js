import './dashboard.css';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const result = await Axios(
        'http://localhost:3001/login',
      );
    if(mounted){
      setLogin(result.data.loggedIn);
    }
  };
  fetchData();
  return () => mounted = false;
  }, 
  );

  /*useEffect(() => { 
    let mounted = true;
    const fetchData = async () => {
      if(mounted) {
        console.log(login)
        if(login !== true) { history.push("/") } 
      }
    }
    fetchData();
    return () => mounted = false;
  }, [login])

  console.log(login);
    /*let mounted = true;
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        if(mounted){
        setLogin("true");
        console.log(login);
        };
      };
      /*if(mounted){
        setLogin(response.data.loggedIn);  
      }*/
    //});

  //return () => mounted = false;
  //}, []);

    return (
      <>
      <div id = {(function() {
        console.log(login);
        //if(login !== true) {
          //history.push("/")
        //}
      })()}></div>

      <div className="sidenav">
      <p>Button</p>
      </div>

      <div className="main">
        <h2>Sidenav Example</h2>
        <p>hi</p>
      </div>
      </>
    );
}